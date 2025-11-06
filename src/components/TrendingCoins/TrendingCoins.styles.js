import styled from "styled-components";

export const TrendingWrapper = styled.div`
  margin: 40px auto;
  max-width: 1200px;
  padding: 0 20px;
  overflow-x: auto;
`;

export const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 25px;
  font-weight: 600;
  color: black;
  letter-spacing: 0.5px;
`;

export const CoinTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: black;
  font-size: 15px;
  font-weight: bold;

  th {
    text-align: left;
    padding: 12px 8px;
    border-bottom: 1px solid #333;
    font-weight: 500;
    color: black;
  }

  th:nth-child(1) { width: 70px; }
  th:nth-child(2) { width: 250px; }
  th:nth-child(6) { width: 140px; text-align: center; }
`;

export const CoinRow = styled.tr`
  height: 55px;
  transition: all 0.2s ease;
`;

export const CoinCell = styled.td`
  padding: 14px 8px;
  border-bottom: 1px solid #2e2e2e;
  font-size: 15px;

  &:nth-child(1) { color: black; font-weight: 500; }
  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5) { font-family: "Roboto Mono", monospace; }
  &:nth-child(6) { text-align: center; }
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

export const SparklineWrapper = styled.div`
  width: 100px;
  height: 40px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const SparklineCell = styled(CoinCell)`
  text-align: center;
`;

export const FavoriteCell = styled(CoinCell)`
  text-align: center;

  svg {
    cursor: pointer;
    font-size: 20px;
    transition: 0.2s;
    color: ${(props) => (props.isFavorite ? "red" : "#777")};
  }

  svg:hover {
    transform: scale(1.1);
  }
`;

export const CalculatorCell = styled(CoinCell)`
  text-align: center;

  svg {
    cursor: pointer;
    font-size: 20px;
    color: #60a5fa;
    transition: 0.2s;
  }

  svg:hover {
    transform: scale(1.1);
  }
`;
