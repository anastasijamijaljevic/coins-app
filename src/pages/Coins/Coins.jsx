import { useQuery } from "@tanstack/react-query";
import { getAllCoins } from "../../services/coinsService";
import {CoinsWrapper,CoinTable,CoinRow, CoinCell,CoinInfo,CoinIcon,CoinName,FavoriteCell,CalculatorCell} from "./Coins.styles";
import { Pagination } from "../../components/Pagination/Pagination";
import { FaHeart, FaCalculator } from "react-icons/fa";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { useState } from "react";

export const Coins = () => {
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const limit = 20;

    const { data, isLoading, isError } = useQuery({
        queryKey: ["coins", page, searchTerm],
        queryFn: () => getAllCoins(page, limit, searchTerm),
        keepPreviousData: true,
    });

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error fetching coins!</p>;

    const coins = data.coins || [];
    const totalCoins = data.stats?.total || 0;
    const totalPages = Math.ceil(totalCoins / limit);

    return (
        <CoinsWrapper>

            <SearchBar
                searchTerm={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <CoinTable>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Market Cap</th>
                        <th>Change (24h)</th>
                        <th>Favorite</th>
                        <th>Calculator</th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map((coin, index) => (
                        <CoinRow key={coin.uuid}>
                            <CoinCell>{index + 1 + (page - 1) * limit}</CoinCell>
                            <CoinCell>
                                <CoinInfo>
                                    <CoinIcon src={coin.iconUrl} alt={coin.name} />
                                    <CoinName>{coin.name}</CoinName>
                                </CoinInfo>
                            </CoinCell>
                            <CoinCell>${parseFloat(coin.price).toFixed(2)}</CoinCell>
                            <CoinCell>${Number(coin.marketCap).toLocaleString()}</CoinCell>
                            <CoinCell>{parseFloat(coin.change).toFixed(2)}%</CoinCell>
                            <FavoriteCell $isFavorite={false}>
                                <FaHeart />
                            </FavoriteCell>
                            <CalculatorCell>
                                <FaCalculator />
                            </CalculatorCell>
                        </CoinRow>
                    ))}
                </tbody>
            </CoinTable>

            <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={(p) => setPage(p)}
            />
        </CoinsWrapper>
    );
};
