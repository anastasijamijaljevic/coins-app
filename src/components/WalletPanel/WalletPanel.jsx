import React from "react";
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  CloseButton,
  ModalBody,
  CoinGrid,
  GridHeader,
  CoinCell,
  CoinIcon,
  CheckBox
} from "./WalletPanel.styled";

export default function WalletPanel({ coins = [], loading = false, onClose }) {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalHeader>
          My Wallet
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>

        <ModalBody>
          {loading ? (
            <p style={{ textAlign: "center", color: "#777" }}>Loading coins...</p>
          ) : coins.length === 0 ? (
            <p style={{ textAlign: "center", color: "#777" }}>No coins to show.</p>
          ) : (
            <>
              <GridHeader>
                <CoinCell>Rank</CoinCell>
                <CoinCell>Name</CoinCell>
                <CoinCell>Price</CoinCell>
                <CoinCell>MarketCap</CoinCell>
                <CoinCell>Check</CoinCell>
                <CoinCell>Amount</CoinCell>
              </GridHeader>

              {coins.map((coin, index) => (
                <CoinGrid key={coin.id ?? coin.symbol}>
                  <CoinCell>{index + 1}</CoinCell>
                  <CoinCell>
                    <CoinIcon src={coin.iconUrl} alt={coin.name} />
                    {coin.name}
                  </CoinCell>
                  <CoinCell>${Number(coin.price).toLocaleString()}</CoinCell>
                  <CoinCell>${Number(coin.marketCap).toLocaleString()}</CoinCell>
                  <CoinCell>
                    <CheckBox />
                  </CoinCell>
                  <CoinCell>{coin.amount ?? "—"}</CoinCell>
                </CoinGrid>
              ))}
            </>
          )}
        </ModalBody>
      </ModalContainer>
    </ModalOverlay>
  );
}
