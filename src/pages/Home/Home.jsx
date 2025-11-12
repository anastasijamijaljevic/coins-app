import { useState } from "react";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { getTrendingCoins } from "../../services/coinsService";
import { TrendingCoins } from "../../components/TrendingCoins/TrendingCoins";
import { useQuery } from "@tanstack/react-query";
import { useFavorites } from "../../context/FavoritesContext";


export const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { favorites, toggleFavorite } = useFavorites();

    const { data, isLoading, error } = useQuery({
        queryKey: ["trendingCoins"],
        queryFn: getTrendingCoins,
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading coins</p>;

    const filteredCoins = data.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <HeroSection />
            <SearchBar
                searchTerm={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <TrendingCoins coins={filteredCoins} favorites={favorites} toggleFavorite={toggleFavorite} />
        </>
    );
};
