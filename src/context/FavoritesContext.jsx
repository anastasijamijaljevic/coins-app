import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem("favorites");
      const parsed = stored ? JSON.parse(stored) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (coin) => {
    setFavorites((prev) => {
      const safePrev = Array.isArray(prev) ? prev : [];
      const exists = safePrev.find((c) => c.uuid === coin.uuid);

      if (exists) {
        return safePrev.filter((c) => c.uuid !== coin.uuid);
      }
      return [...safePrev, coin];
    });
  };

  const isFavorite = (coinId) =>
    Array.isArray(favorites) && favorites.some((c) => c.uuid === coinId);

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
