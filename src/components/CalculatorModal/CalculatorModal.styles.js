import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const Modal = styled.div`
  width: 400px;
  max-width: 95%;
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
`;

export const Header = styled.div`
  background: #2563eb;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: white;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 22px;
  color: white;
  cursor: pointer;

  &:hover {
    color: #f87171;
  }
`;

export const Body = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
`;

export const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background: #f9fafb;
  color: #111827;
  font-size: 16px;
  outline: none;

  &::placeholder {
    color: #9ca3af;
  }
`;

export const ResultWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9fafb;
  border-radius: 8px;
`;

export const Result = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #2563eb;
`;
