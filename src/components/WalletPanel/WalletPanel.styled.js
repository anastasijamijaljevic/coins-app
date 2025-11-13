import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  width: 95%;
  max-width: 900px;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  max-height: 80vh;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: #60a5fa;
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 22px;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  padding: 16px 24px;
  overflow-y: auto;
  flex: 1;
`;

// Grid za coin listu
export const CoinGrid = styled.div`
  display: grid;
  grid-template-columns: 50px 2.5fr 1.2fr 1.8fr 50px 80px;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  &:first-child {
    border-top: 1px solid #eee;
  }
`;

export const GridHeader = styled(CoinGrid)`
  font-weight: bold;
  background: #f1f5f9;
`;

export const CoinCell = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CoinIcon = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  cursor: pointer;
`;
