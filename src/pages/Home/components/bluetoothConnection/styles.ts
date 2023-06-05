import styled, { keyframes } from "styled-components";

const CENTERCONTENT = `
display: flex;
justify-content: center;
align-items: center;`;

export interface IContainer {
  $disabled: boolean;
}

export const Container = styled.div<IContainer>`
  ${CENTERCONTENT}
  flex-direction: column;
  height: 50%;
  width: 500px;
  padding: 20px;
  border-radius: 8px;
  gap: 50px;

  border: 1px solid #d9d9d9;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-family: "Open Sans";

  cursor: ${(props) => props.$disabled && "not-allowed"};
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  pointer-events: ${(props) => props.$disabled && "none"};
`;

export const Title = styled.div`
  font-size: 35px;
  font-weight: 800;
  color: rgba(0, 0, 0, 0.8);
`;

export const BluetoothConnectionButton = styled.button`
  ${CENTERCONTENT}
  width: 120px;
  height: 120px;
  border-radius: 120px;
  border: none;
  cursor: pointer;

  background-color: #3e6fd8;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));

  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0.5),
      transparent
    );
    transform: rotate(45deg);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const IconContainer = styled.div`
  ${CENTERCONTENT}
  max-width: 70px;
  max-height: 70px;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingLabel = styled.div<{ $isVisible: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  color: #333;

  visibility: ${({ $isVisible }) => !$isVisible && "hidden"};
`;

export const LoadingIcon = styled.span`
  display: inline-block;
  margin-right: 8px;
  animation: ${rotate} 1s linear infinite;
`;

export const DataList = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  gap: 15px;
`;

export const InfoTitle = styled(Title)`
  font-size: 25px;
  margin-bottom: 20px;
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 30px;
`;

export const ItemName = styled.div`
  width: 160px;
  font-weight: 600;
  font-size: 15px;
`;

export const ItemValue = styled.div`
  font-weight: 400;
  font-size: 12px;
`;

export const BackButtonContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: end;
  width: 100%;
`;

export const BackButton = styled.div`
  font-family: "Open Sans";
  font-size: 20px;
  text-decoration: underline;
  color: #441c34;

  cursor: pointer;
  user-select: none;

  &:active {
    color: #8e5377;
  }
`;
