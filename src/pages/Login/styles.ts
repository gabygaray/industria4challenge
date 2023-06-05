import styled from "styled-components";

const CENTERCONTENT = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  ${CENTERCONTENT}
  flex-direction: row;
  flex-wrap: nowrap;

  width: 100%;
  height: 100vh;
`;

export const BackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 0.6;
  height: 100%;
  background-color: #662352;
`;

export const LoginFormContainer = styled.div`
  ${CENTERCONTENT}
  flex-direction: column;
  flex: 0.4;
  height: 100%;
  background-color: #ffffff;
  gap: 34px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: end;
  margin-top: 30%;
  flex-direction: column;
  color: #ffffff;
  font-family: "Helvetica";
`;

export const Title = styled.div`
  font-size: 60px;
  font-weight: 600;
`;
export const Subtitle = styled.div`
  font-size: 30px;
  font-style: italic;
`;

export const LoginForm = styled.div`
  ${CENTERCONTENT}
  width: 320px;
  flex-direction: column;
  gap: 34px;
`;

export const FormTitle = styled.div`
  font-family: "Open Sans";
  font-size: 24px;
  font-weight: 800;
  color: rgba(0, 0, 0, 0.8);
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  padding: 16px;
  outline: none;
  transition: border-color 0.3s ease;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);

  &:focus {
    border: 1px solid #441c34;
  }

  &:hover {
    border: 1px solid #8e5377;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  border: 0px;
  background-color: #662352;

  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.44px;
  color: #ffffff;

  cursor: pointer;

  &:active {
    background-color: #8e5377;
  }
`;

export const RegisterButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;

export const RegisterLink = styled.div`
  font-family: "Open Sans";
  font-size: 15px;
  text-decoration: underline;
  color: #441c34;

  cursor: pointer;
  user-select: none;

  &:active {
    color: #8e5377;
  }
`;
