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
`;

export const CoinTable = BaseCoinTable;
export const CoinRow = BaseCoinRow;
export const CoinCell = BaseCoinCell;
export const CoinInfo = BaseCoinInfo;
export const CoinIcon = BaseCoinIcon;
export const CoinName = BaseCoinName;
export const FavoriteCell = BaseFavoriteCell;

export const EmptyMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-top: 50px;
  color: black; 
`;

export const GoToCoinsButton = styled.button`
  display: block;
 margin: 30px auto 0;  
  padding: 10px 20px;
  font-size: 1.5rem;
  background: none;     
  color: #000;           
  border: none;          
  cursor: pointer;
  text-decoration: underline; 

  &:hover {
    color: #e63946;      
  }
`;