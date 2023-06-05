import { useNavigate } from "react-router-dom";

import { getLogout } from "../../app/services/firebase";

import { useAppDispatch } from "../../app/store/hooks";

import { clearUser, setIsLogin } from "../../app/store/slices/appStateSlice";

import {
  Navbar as NavbarContainer,
  LogoContainer,
  Logo,
  LogoutItem,
} from "./styles";

export const Navbar: React.FC = (): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (getLogout()) {
      navigate("/");
      dispatch(setIsLogin(false));
      dispatch(clearUser());
    }
  };
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo>Industria 4</Logo>
      </LogoContainer>
      <LogoutItem onClick={(e) => handleLogout(e)}>Cerrar Sesión</LogoutItem>
    </NavbarContainer>
  );
};
