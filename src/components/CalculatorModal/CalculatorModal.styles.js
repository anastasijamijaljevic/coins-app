import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const Modal = styled.div`
  width: 420px;
  max-width: 95%;
  background: #ffffff;
  border-radius: 14px;
  box-shadow: 0 12px 28px rgba(0,0,0,0.18);
`;

export const Header = styled.div`
  padding: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CoinInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: center;
`;

export const CoinImage = styled.img`
  width: 32px;
  height: 32px;
`;

export const CoinName = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #111;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 22px;
  color: #444;
  cursor: pointer;
`;

export const Body = styled.div`
  padding: 20px;
  background: white;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  gap: 12px;
  justify-content: center;
`;

export const SmallInput = styled.input`
  width: 100px;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background: grey;
  font-size: 16px;
  color: #111;
  outline: none;
`;

export const Result = styled.div`
  font-size: 10px;
  width: 100px;
  color: black;
  background-color: grey;
  min-width: 90px;
  text-align: right;
  border: 1px solid #d1d5db;
  padding: 10px 12px;
  border-radius: 8px;
`;

