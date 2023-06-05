import styled from "styled-components";

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  height: 70px;
  padding: 10px 25px;
  background-color: #662352;

  border-bottom: 1px solid #2b101e;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Logo = styled.div`
  color: #ffffff;
  font-family: "Helvetica";
  font-size: 25px;
  line-height: 27px;
  font-weight: 600;
`;

export const LogoutItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 8px;
  border: 0px;
  background-color: #ffffff;
  padding: 10px;

  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.44px;
  color: #662352;

  cursor: pointer;

  &:active {
    background-color: #8e5377;
    color: #ffffff;
  }
`;
