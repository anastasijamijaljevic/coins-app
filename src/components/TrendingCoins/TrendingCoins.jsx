import { useState } from "react";
import {
  TrendingWrapper,
  Title,
  CoinTable,
  CoinRow,
  CoinCell,
  CoinInfo,
  CoinIcon,
  CoinName,
  SparklineWrapper,
  SparklineCell,
  FavoriteCell,
  CalculatorCell,
} from "./TrendingCoins.styles";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { CalculatorModal } from "../CalculatorModal/CalculatorModal";
import { FaHeart, FaRegHeart, FaCalculator } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useFavorites } from "../../context/FavoritesContext";

export const TrendingCoins = ({ coins }) => {
  const [selectedCoin, setSelectedCoin] = useState(null);
  const { favorites, toggleFavorite, isFavorite } = useFavorites(); // koristi context

  const top10Coins = coins.slice(0, 10);

  return (
    <TrendingWrapper>
      <Title>Top 10 Coins</Title>

      <CoinTable>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h Volume</th>
            <th>Market Cap</th>
            <th>Chart</th>
            <th>Fav</th>
            <th>Calc</th>
          </tr>
        </thead>

        <tbody>
          {top10Coins.map((coin) => (
            <CoinRow key={coin.uuid}>
              <CoinCell>{coin.rank}</CoinCell>

              <CoinCell>
                <CoinInfo>
                  <Link
                    to={`/coins/${coin.uuid}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <CoinIcon src={coin.iconUrl} alt={coin.name} />
                    <CoinName>{coin.name}</CoinName>
                  </Link>
                </CoinInfo>
              </CoinCell>

              <CoinCell>${Number(coin.price).toLocaleString()}</CoinCell>
              <CoinCell>${Number(coin["24hVolume"]).toLocaleString()}</CoinCell>
              <CoinCell>${Number(coin.marketCap).toLocaleString()}</CoinCell>

              <SparklineCell>
                <SparklineWrapper>
                  <Sparklines data={coin.sparkline.filter(v => v !== null)}>
                    <SparklinesLine style={{ stroke: "#60a5fa", strokeWidth: 2, fill: "none" }} />
                  </Sparklines>

                </SparklineWrapper>
              </SparklineCell>

              <FavoriteCell $isFavorite={isFavorite(coin.uuid)}>
                {isFavorite(coin.uuid) ? (
                  <FaHeart onClick={() => toggleFavorite(coin)} />
                ) : (
                  <FaRegHeart onClick={() => toggleFavorite(coin)} />
                )}
              </FavoriteCell>

              <CalculatorCell>
                <FaCalculator onClick={() => setSelectedCoin(coin)} />
              </CalculatorCell>
            </CoinRow>
          ))}
        </tbody>
      </CoinTable>

      {selectedCoin && (
        <CalculatorModal coin={selectedCoin} onClose={() => setSelectedCoin(null)} />
      )}
    </TrendingWrapper>
  );
};
