import { useFavorites } from "../../context/FavoritesContext";
import {
  FavoritesWrapper,
  CoinTable,
  CoinRow,
  CoinCell,
  CoinInfo,
  CoinIcon,
  CoinName,
  FavoriteCell,
  EmptyMessage,
  GoToCoinsButton,
} from "./Favorites.styles";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Favorites = () => {
  const { favorites, toggleFavorite } = useFavorites();

  if (favorites.length === 0) {
    return (
      <FavoritesWrapper>
        <EmptyMessage>
          You haven't added any coin to your favourite list, please add some.
        </EmptyMessage>
        <GoToCoinsButton as={Link} to="/coins">
          Go to coins
        </GoToCoinsButton>
      </FavoritesWrapper>
    );
  }

  return (
    <FavoritesWrapper>
      <CoinTable>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>Change (24h)</th>
            <th>Favorite</th>
          </tr>
        </thead>
        <tbody>
          {favorites.map((coin, index) => (
            <CoinRow key={coin.uuid}>
              <CoinCell>{index + 1}</CoinCell>
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
              <CoinCell>${parseFloat(coin.price).toFixed(2)}</CoinCell>
              <CoinCell>${Number(coin.marketCap).toLocaleString()}</CoinCell>
              <CoinCell>{parseFloat(coin.change).toFixed(2)}%</CoinCell>
              <FavoriteCell $isFavorite={true}>
                <FaHeart onClick={() => toggleFavorite(coin)} />
              </FavoriteCell>
            </CoinRow>
          ))}
        </tbody>
      </CoinTable>
    </FavoritesWrapper>
  );
};
