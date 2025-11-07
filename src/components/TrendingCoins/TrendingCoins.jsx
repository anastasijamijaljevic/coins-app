import { useState } from "react";
import { TrendingWrapper, Title, CoinTable, CoinRow, CoinCell, CoinInfo, CoinIcon, CoinName, SparklineWrapper, SparklineCell, FavoriteCell, CalculatorCell } from "./TrendingCoins.styles";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { CalculatorModal } from "../CalculatorModal/CalculatorModal";
import { FaHeart, FaRegHeart, FaCalculator } from "react-icons/fa";

export const TrendingCoins = ({ coins }) => {
  const [favorites, setFavorites] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(null);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

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
                  <CoinIcon src={coin.iconUrl} alt={coin.name} />
                  <CoinName>{coin.name}</CoinName>
                </CoinInfo>
              </CoinCell>

              <CoinCell>${Number(coin.price).toLocaleString()}</CoinCell>
              <CoinCell>${Number(coin["24hVolume"]).toLocaleString()}</CoinCell>
              <CoinCell>${Number(coin.marketCap).toLocaleString()}</CoinCell>

              <SparklineCell>
                <SparklineWrapper>
                  <Sparklines data={coin.sparkline}>
                    <SparklinesLine
                      style={{ strokeWidth: 2, fill: "none", color: "#60a5fa" }}
                    />
                  </Sparklines>
                </SparklineWrapper>
              </SparklineCell>

              <FavoriteCell $isFavorite={favorites.includes(coin.uuid)}>
                {favorites.includes(coin.uuid) ? (
                  <FaHeart onClick={() => toggleFavorite(coin.uuid)} />
                ) : (
                  <FaRegHeart onClick={() => toggleFavorite(coin.uuid)} />
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
