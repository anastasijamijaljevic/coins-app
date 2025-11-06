import { useEffect, useState } from "react"
import { HeroSection } from "../../components/HeroSection/HeroSection"
import { SearchBar } from "../../components/SearchBar/SearchBar"
import { getTrendingCoins } from "../../services/coinsService";
import { TrendingCoins } from "../../components/TrendingCoins/TrendingCoins";

export const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const fetchCoins = async () => {
            const data = await getTrendingCoins();
            setCoins(data);
        }
        fetchCoins();
    }, []);

    const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <HeroSection />
            <SearchBar
                searchTerm={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <TrendingCoins coins={filteredCoins} />
        </>
    )
}