import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCoinDetails } from "../../services/coinsService";
import { Sparklines, SparklinesLine } from "react-sparklines";

import {
  DetailsWrapper,
  CoinHeader,
  PriceChartHeader,
  StatsContainer,
  StatsColumn,
  StatsColumnTitle,
  StatsColumnDescription,
  StatRow,
  CoinIcon,
  CoinName,
  CoinSymbol,
  Section,
  SectionTitle,
  SparklineWrapper,
  Divider,
  Description,
  ExtraContainer,
  WhatIsBox,
  LinksBox,
  LinkRow,
  HeaderLeft,
  Rank,
  PriceDisplay
} from "./CoinDetails.styles";

import { FiDollarSign, FiBarChart2, FiHash, FiTrendingUp, FiPieChart, FiActivity, FiArrowUpCircle, FiCheckCircle } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaReddit, FaTelegram, FaGlobe } from "react-icons/fa";

export const CoinDetails = () => {
  const { coinId } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);

  const { data: coin, isLoading, error } = useQuery({
    queryKey: ["coinDetails", coinId],
    queryFn: () => getCoinDetails(coinId),
  });

  if (isLoading) return <p>Loading coin details...</p>;
  if (error) return <p>Error loading coin details!</p>;
  if (!coin) return <p>No data available.</p>;

  const highPrice = coin.allTimeHigh?.price
    ? Number(String(coin.allTimeHigh.price).replace(/[^0-9.-]+/g, ""))
    : 0;

  const linksData = [
    { name: "Website", url: coin.websiteUrl || "#", icon: <FaGlobe /> },
    { name: "Facebook", url: coin.facebookUrl || "#", icon: <FaFacebook /> },
    { name: "Instagram", url: coin.instagramUrl || "#", icon: <FaInstagram /> },
    { name: "Reddit", url: coin.redditUrl || "#", icon: <FaReddit /> },
    { name: "Telegram", url: coin.telegramUrl || "#", icon: <FaTelegram /> },
  ];

  return (
    <DetailsWrapper>
      <CoinHeader>
        <HeaderLeft>
          <Rank>#{coin.rank}</Rank>
          <CoinIcon src={coin.iconUrl} alt={coin.name} />
          <CoinName>
            {coin.name} <CoinSymbol>({coin.symbol})</CoinSymbol>
          </CoinName>
        </HeaderLeft>

        <PriceDisplay>${Number(coin.price).toLocaleString()}</PriceDisplay>
      </CoinHeader>

      <Divider />

      <Section>
        <PriceChartHeader>
          <span>Price Chart</span>
          <span style={{ color: Number(coin.change) >= 0 ? "#22c55e" : "#ef4444" }}>
            24h {Number(coin.change).toFixed(2)}%
          </span>
          <span>High ${highPrice.toLocaleString()}</span>
        </PriceChartHeader>

        <Divider />
        <SparklineWrapper>
          <Sparklines data={coin.sparkline || []}>
            <SparklinesLine style={{ strokeWidth: 2, fill: "none", stroke: "#60a5fa" }} />
          </Sparklines>
        </SparklineWrapper>
      </Section>

      <Section>
        <StatsContainer>
          <StatsColumn>
            <StatsColumnTitle>Value Statistics</StatsColumnTitle>
            <StatsColumnDescription>Overview of {coin.name} including price, rank and volume.</StatsColumnDescription>
            <StatRow>
              <FiDollarSign className="icon" />
              <div className="label">Price to EUR</div>
              <div className="value">{Number(coin.price).toLocaleString()}</div>
            </StatRow>
            <Divider />
            <StatRow>
              <FiPieChart className="icon" />
              <div className="label">Price to BTC</div>
              <div className="value">{Number(coin.btcPrice).toLocaleString()}</div>
            </StatRow>
            <Divider />
            <StatRow>
              <FiHash className="icon" />
              <div className="label">Rank</div>
              <div className="value">#{coin.rank}</div>
            </StatRow>
            <Divider />
            <StatRow>
              <FiTrendingUp className="icon" />
              <div className="label">24h Volume</div>
              <div className="value">${Number(coin["24hVolume"]).toLocaleString()}</div>
            </StatRow>
            <Divider />
            <StatRow>
              <FiBarChart2 className="icon" />
              <div className="label">Market Cap</div>
              <div className="value">${Number(coin.marketCap).toLocaleString()}</div>
            </StatRow>
            <Divider />
            <StatRow>
              <FiActivity className="icon" />
              <div className="label">Fully Diluted Market Cap</div>
              <div className="value">${Number(coin.fullyDilutedMarketCap || 0).toLocaleString()}</div>
            </StatRow>
            <Divider />
            <StatRow>
              <FiArrowUpCircle className="icon" />
              <div className="label">All-time high</div>
              <div className="value">${Number(highPrice).toLocaleString()}</div>
            </StatRow>
          </StatsColumn>

          <StatsColumn $bgColor="lightgrey">
            <StatsColumnTitle>Supply Information</StatsColumnTitle>
            <StatsColumnDescription>Total, circulating and max supply of {coin.name}.</StatsColumnDescription>
            <StatRow>
              <FiCheckCircle className="icon" />
              <div className="label">Verified supply</div>
              <div className="value">{coin.supply?.confirmed ? "Yes" : "No"}</div>
            </StatRow>
            <Divider />
            <StatRow>
              <FiPieChart className="icon" />
              <div className="label">Total supply</div>
              <div className="value">{Number(coin.supply?.total).toLocaleString()}</div>
            </StatRow>
            <Divider />
            <StatRow>
              <FiPieChart className="icon" />
              <div className="label">Max supply</div>
              <div className="value">{coin.supply?.max ? Number(coin.supply.max).toLocaleString() : "—"}</div>
            </StatRow>
            <Divider />
            <StatRow>
              <FiActivity className="icon" />
              <div className="label">Circulating supply</div>
              <div className="value">{Number(coin.supply?.circulating).toLocaleString()}</div>
            </StatRow>
          </StatsColumn>
        </StatsContainer>
      </Section>

      <ExtraContainer>
        <WhatIsBox>
          <SectionTitle>What is {coin.name}?</SectionTitle>
          <p>{coin.description || "Binance Coin (BNB) is a utility token used to pay for trading fees at a discounted rate on the Binance exchange, founded by Changpeng Zhao (CZ) in 2017."}</p>
        </WhatIsBox>

        <LinksBox>
          <SectionTitle>Links</SectionTitle>
          {linksData.map(link => (
            <LinkRow key={link.name}>
              {link.icon}
              <div className="link-name">{link.name}</div>
              <a className="link-url" href={link.url} target="_blank" rel="noopener noreferrer">
                {link.url.replace(/^https?:\/\//, '')}
              </a>
            </LinkRow>
          ))}
        </LinksBox>
      </ExtraContainer>
    </DetailsWrapper>
  );
};

export default CoinDetails;
