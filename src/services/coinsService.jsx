import axios from "axios";

export const getTrendingCoins = async () => {
    try {
        const response = await axios.get(
           "https://coinranking1.p.rapidapi.com/coins",
            {
                headers: {
                    "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
                    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com"
                },
                params: {
                    limit: 10,
                    referenceCurrencyUuid: "yhjMzLPhuIDl", 
                    timePeriod: "24h"
                }
            }
        );
         return response.data.data.coins; 
    } catch (error) {
        console.error("Error fetching trending coins:", error);
        return [];
    }
};
