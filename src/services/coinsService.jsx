import axios from "axios";

const BASE_URL = "https://coinranking1.p.rapidapi.com";
const HEADERS = {
  "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};


export const getTrendingCoins = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/coins`, {
      headers: HEADERS,
      params: {
        limit: 10,
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
      },
    });
    return response.data.data.coins;
  } catch (error) {
    console.error("Error fetching trending coins:", error);
    return [];
  }
};


export const getAllCoins = async (page = 1, limit = 50, searchTerm = "") => {
  const offset = (page - 1) * limit;
  try {
    const response = await axios.get(`${BASE_URL}/coins`, {
      headers: HEADERS,
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
        limit,
        offset,
        search: searchTerm || undefined,
      },
    });
    return response.data.data; 
  } catch (error) {
    console.error("Error fetching all coins:", error);
    return { coins: [], stats: {} };
  }
};


export const getCoinDetails = async (coinId) => {
  try {
    const response = await axios.get(`${BASE_URL}/coin/${coinId}`, {
      headers: HEADERS,
    });
    return response.data.data.coin; 
  } catch (error) {
    console.error("Error fetching coin details:", error);
    return null;
  }
};


export const getCoinHistory = async (coinId, timePeriod = "7d") => {
  try {
    const response = await axios.get(`${BASE_URL}/coin/${coinId}/history`, {
      headers: HEADERS,
      params: { timePeriod },
    });
    return response.data.data.history; 
  } catch (error) {
    console.error("Error fetching coin history:", error);
    return [];
  }
};
