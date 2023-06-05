import { ChangeEvent, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import {
  getLogin,
  getLoginWithGoogle,
  getRegister,
} from "../../app/services/firebase";

import { useAppDispatch } from "../../app/store/hooks";
import { setIsLogin, setUser } from "../../app/store/slices/appStateSlice";

import {
  BackgroundContainer,
  Container,
  FormTitle,
  LoginForm,
  LoginFormContainer,
  RegisterButtonContainer,
  RegisterLink,
  StyledButton,
  StyledInput,
  Subtitle,
  Title,
  TitleContainer,
} from "./styles";

const inputsInitialValues = {
  email: "",
  password: "",
};

export const Login: React.FC = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState<"login" | "register">("login");
  const [inputsValues, setInputsValues] = useState(inputsInitialValues);

  useEffect(() => {
    setInputsValues(inputsInitialValues);
  }, [selectedTab]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputsValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    getRegister(inputsValues.email, inputsValues.password);
    setInputsValues(inputsInitialValues);
    setSelectedTab("login");
  };

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    getLogin(inputsValues.email, inputsValues.password);
    setInputsValues(inputsInitialValues);
    setCurrentUser();
  };

  const handleGoogleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    getLoginWithGoogle();
  };

  const setCurrentUser = () => {
    onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        dispatch(setIsLogin(false));
      } else {
        dispatch(setIsLogin(true));
        dispatch(
          setUser({
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            email: currentUser.email,
          })
        );
        navigate("/home");
      }
    });
  };

  return (
    <Container>
      <BackgroundContainer>
        <TitleContainer>
          <Title>Industria 4</Title>
          <Subtitle>Challenge</Subtitle>
        </TitleContainer>
      </BackgroundContainer>

      <LoginFormContainer>
        <FormTitle>Ingresa o regístrate</FormTitle>

        <LoginForm>
          <StyledInput
            type="email"
            name="email"
            placeholder="Email"
            value={inputsValues.email}
            onChange={handleInputChange}
          />
          <StyledInput
            type="password"
            name="password"
            placeholder="Contraseña"
            value={inputsValues.password}
            onChange={handleInputChange}
          />
          {selectedTab === "login" ? (
            <>
              <StyledButton type="submit" onClick={handleLogin}>
                Ingresar
              </StyledButton>
              <StyledButton type="submit" onClick={handleGoogleLogin}>
                Ingresar con Google
              </StyledButton>
              <RegisterButtonContainer>
                <RegisterLink onClick={() => setSelectedTab("register")}>
                  Registrarse
                </RegisterLink>
              </RegisterButtonContainer>
            </>
          ) : (
            <>
              <StyledButton type="submit" onClick={handleRegister}>
                Registrarse
              </StyledButton>
              <RegisterButtonContainer>
                <RegisterLink onClick={() => setSelectedTab("login")}>
                  Volver
                </RegisterLink>
              </RegisterButtonContainer>
            </>
          )}
        </LoginForm>
      </LoginFormContainer>
    </Container>
  );
};
