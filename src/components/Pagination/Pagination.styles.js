import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 30px 0;
`;

export const PageButton = styled.button`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: ${(props) => (props.active ? "#60a5fa" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #60a5fa;
    color: #fff;
  }
`;
