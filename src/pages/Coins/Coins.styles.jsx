import styled from "styled-components";

export const CoinsWrapper = styled.div`
  margin: 40px auto;
  max-width: 1200px;
  padding: 0 20px;
  overflow-x: auto;
`;

export const SearchInput = styled.input`
  padding: 10px 15px;
  margin-bottom: 20px;
  font-size: 15px;
  width: 250px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const CoinTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 15px;
  font-weight: bold;
  color: black;

  th {
    text-align: left;
    padding: 12px 8px;
    border-bottom: 1px solid #333;
    font-weight: 500;
  }

  th:nth-child(1) { width: 70px; }
  th:nth-child(2) { width: 250px; }
  th:nth-child(6),
  th:nth-child(7) { width: 140px; text-align: center; }
`;

export const CoinRow = styled.tr`
  height: 55px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const CoinCell = styled.td`
  padding: 14px 8px;
  border-bottom: 1px solid #2e2e2e;

  &:nth-child(1) { font-weight: 500; color: black; }
  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5) { font-family: "Roboto Mono", monospace; }
  &:nth-child(6),
  &:nth-child(7) { text-align: center; }
`;

export const CoinInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CoinIcon = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

export const CoinName = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: black;
`;

export const FavoriteCell = styled(CoinCell)`
  cursor: pointer;

  svg {
    font-size: 20px;
    transition: 0.2s;
    color: ${(props) => (props.$isFavorite ? "red" : "#777")};
  }

  svg:hover {
    transform: scale(1.1);
  }
`;

export const CalculatorCell = styled(CoinCell)`
  cursor: pointer;

  svg {
    font-size: 20px;
    color: #60a5fa;
    transition: 0.2s;
  }

  svg:hover {
    transform: scale(1.1);
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
`;

export const PageButton = styled.button`
  padding: 8px 12px;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.active ? "#60a5fa" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #60a5fa;
    color: #fff;
  }
`;
