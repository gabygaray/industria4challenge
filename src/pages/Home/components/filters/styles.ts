import styled from "styled-components";

const CENTERCONTENT = `
display: flex;
justify-content: center;
align-items: center;`;

export const Container = styled.div`
  ${CENTERCONTENT}
  flex-direction: column;
  width: 500px;
  padding: 20px;
  border-radius: 8px;
  gap: 10px;

  border: 1px solid #d9d9d9;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-family: "Open Sans";
`;

export const Title = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 800;
  color: rgba(0, 0, 0, 0.8);
`;

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  gap: 10px;
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

export const CheckboxsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 5px;
`;
