import styled from "styled-components";
import {
  CoinTable as BaseCoinTable,
  CoinRow as BaseCoinRow,
  CoinCell as BaseCoinCell,
  CoinInfo as BaseCoinInfo,
  CoinIcon as BaseCoinIcon,
  CoinName as BaseCoinName,
  FavoriteCell as BaseFavoriteCell,
} from "../Coins/Coins.styles";

export const FavoritesWrapper = styled.div`
  padding: 20px 40px;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CoinTable = BaseCoinTable;
export const CoinRow = BaseCoinRow;
export const CoinCell = BaseCoinCell;
export const CoinInfo = BaseCoinInfo;
export const CoinIcon = BaseCoinIcon;
export const CoinName = BaseCoinName;
export const FavoriteCell = BaseFavoriteCell;

export const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  text-align: center;
`;

export const EmptyImage = styled.img`
  width: 300px;
  max-width: 80%;
  margin-bottom: 20px;
`;

export const EmptyMessage = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 20px;
`;

export const GoToCoinsButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #60a5fa;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #3b82f6;
  }
`;
