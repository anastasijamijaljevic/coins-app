import styled from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background-color: #f8fafc;
  min-height: 100vh;
  text-align: center;
`;

export const Header = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 1.25rem;
  color: #475569;
  max-width: 600px;
  margin-bottom: 40px;

  span {
    color: #ef4444;
    font-weight: 600;
  }
`;

export const WalletButton = styled.button`
  padding: 15px 30px;
  font-size: 1rem;
  background-color: #3b82f6;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 40px;
  transition: 0.2s;

  &:hover {
    background-color: #2563eb;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  max-width: 600px;
  margin: 40px 0;
`;
