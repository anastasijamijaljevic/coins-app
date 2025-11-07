import styled from "styled-components";

export const DetailsWrapper = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  color: #000;
  font-family: 'Inter', sans-serif;
`;

export const CoinHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

export const Rank = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: black;
`;

export const CoinIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export const CoinName = styled.h2`
  font-size: 18px;
  margin-top: 10px;
  color: black;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const CoinSymbol = styled.span`
  font-size: 16px;
  color: black;
  margin-left: 8px;
`;

export const PriceDisplay = styled.h2`
  color: black;
  font-size: 18px;
`;

export const Divider = styled.hr`
  border: 0;
  border-bottom: 1px solid #1f2937;
  margin-top: 10px;
  margin-bottom: 12px;
`;

export const Section = styled.section`
  margin: 30px 0;
  padding: 25px;
  border-radius: 12px;
`;

export const SectionTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 22px;
  color: black;
`;

export const PriceChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  margin-bottom: 10px;

  span {
    font-weight: 600;
  }
`;

export const SparklineWrapper = styled.div`
  padding: 10px 0;
  border-radius: 10px;
`;

export const StatsContainer = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
`;

export const StatsColumn = styled.div`
  flex: 1;
  min-width: 300px;
  padding: 20px;
  border-radius: 12px;
  background-color: ${(props) => props.$bgColor || "transparent"};
`;

export const StatsColumnTitle = styled.h4`
  font-size: 30px;
  color: black;
  margin-bottom: 10px;
  text-align: center;
`;

export const StatsColumnDescription = styled.p`
  font-size: 20px;
  color: grey;
  margin-bottom: 20px;
  text-align: left;
`;

export const StatRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;

  .icon {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    display: inline-block;
    color: lightblue;
  }

  .label {
    flex: 1;
    color: #374151;
    font-size: 14px;
  }

  .value {
    color: #111827;
    font-weight: 700;
    font-size: 14px;
    text-align: right;
    min-width: 120px;
  }
`;

export const Description = styled.div`
  color: black;
  line-height: 1.6;
  font-size: 16px;

  a {
    color: #60a5fa;
  }

  p {
    margin: 12px 0;
  }
`;

export const ExtraContainer = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 40px;
`;

export const WhatIsBox = styled.div`
  width: 300px;
  padding: 20px;
  border: 2px solid #60a5fa;
  border-radius: 12px;
  background-color: #f0f9ff;
  font-size: 16px;
  line-height: 1.6;
`;

export const LinksBox = styled.div`
  flex: 1;
  min-width: 300px;
  padding: 20px;
  background-color: #e6f7ff;
  border-radius: 12px;
`;

export const LinkRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;

  svg {
    width: 28px;
    height: 28px;
    color: #2563eb;
  }

  .link-name {
    flex: 1;
    font-size: 18px;
    font-weight: 500;
  }

  .link-url {
    font-size: 14px;
    color: #1d4ed8;
    text-decoration: underline;
  }
`;
