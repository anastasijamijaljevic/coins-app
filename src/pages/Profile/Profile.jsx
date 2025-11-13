import React, { useEffect, useState } from "react";
import WalletPanel from "../../components/WalletPanel/WalletPanel";
import * as coinsService from "../../services/coinsService";
import { ProfileWrapper, Header, Description, WalletButton, HeroImage } from "./Profile.styled";

export const Profile = () => {
  const [walletOpen, setWalletOpen] = useState(false);
  const [coins, setCoins] = useState([]);
  const [loadingCoins, setLoadingCoins] = useState(false);

  useEffect(() => {
    if (!walletOpen) return;
    let mounted = true;

    const loadCoins = async () => {
      setLoadingCoins(true);
      try {
        const data = await coinsService.getTrendingCoins();
        if (mounted) setCoins(data);
      } catch (err) {
        console.error("Error loading coins:", err);
      } finally {
        if (mounted) setLoadingCoins(false);
      }
    };

    loadCoins();
    return () => (mounted = false);
  }, [walletOpen]);

  return (
    <ProfileWrapper>
      <Header>But Bitcoin & Crypto</Header>
      <Description>
        Sign up today and buy 50+ cryptocurrencies in minutes. Get started with as little as <span>$10</span>.
      </Description>
      <HeroImage src="https://i.postimg.cc/wjZfpsYF/Crypto-portfolio-rafiki.png" alt="Crypto portfolio" />
      <WalletButton onClick={() => setWalletOpen(true)}>CRYPTO WALLET</WalletButton>

      {walletOpen && (
        <WalletPanel coins={coins} loading={loadingCoins} onClose={() => setWalletOpen(false)} />
      )}
    </ProfileWrapper>
  );
};
