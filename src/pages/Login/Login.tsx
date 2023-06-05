import { ChangeEvent, useEffect, useState } from "react";

import {
  getLogin,
  getLoginWithGoogle,
  getRegister,
} from "../../app/services/firebase";
import { auth } from "../../firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth";

import { useNavigate } from "react-router-dom";

import { setIsLogin, setUser } from "../../app/store/slices/appStateSlice";
import { useAppDispatch } from "../../app/store/hooks";

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

  const [selectedTab, setSelectedTab] = useState<"login" | "register">("login");
  const [inputsValues, setInputsValues] = useState(inputsInitialValues);

  const navigate = useNavigate();

  useEffect(() => {
    setInputsValues(inputsInitialValues);
  }, [selectedTab]);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputsValues((prevState) => ({ ...prevState, email: value }));
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputsValues((prevState) => ({ ...prevState, password: value }));
  };

  const handleRegister = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    getRegister(inputsValues.email, inputsValues.password);
    setInputsValues(inputsInitialValues);
    setSelectedTab("login");
  };

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    getLogin(inputsValues.email, inputsValues.password);
    setInputsValues(inputsInitialValues);
    setCurrentUser();
  };

  const handleGoogleLogin = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    getLoginWithGoogle();
  };

  const setCurrentUser = () => {
    const suscribed = () =>
      onAuthStateChanged(auth, (currentUser) => {
        if (!currentUser) {
          console.log("No hay usuario logeado");
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

    return suscribed();
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
        <FormTitle>Ingresa o registrate</FormTitle>

        <LoginForm>
          <StyledInput
            type="email"
            name="email"
            placeholder="Email"
            value={inputsValues.email}
            onChange={(e) => handleEmailChange(e)}
          />
          <StyledInput
            type="password"
            name="password"
            placeholder="Contraseña"
            value={inputsValues.password}
            onChange={handlePasswordChange}
          />
          {selectedTab === "login" ? (
            <>
              <StyledButton type="submit" onClick={(e) => handleLogin(e)}>
                Ingresar
              </StyledButton>
              <StyledButton type="submit" onClick={(e) => handleGoogleLogin(e)}>
                Ingresar con Google
              </StyledButton>
              <RegisterButtonContainer>
                <RegisterLink onClick={() => setSelectedTab("register")}>
                  Registarse
                </RegisterLink>
              </RegisterButtonContainer>
            </>
          ) : (
            <>
              <StyledButton type="submit" onClick={(e) => handleRegister(e)}>
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
