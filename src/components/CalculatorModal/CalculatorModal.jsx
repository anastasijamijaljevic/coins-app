import React, { useState } from "react";
import {
    Overlay, Modal, Header, CoinInfo, CoinImage, CoinName,
    CloseButton, Body, Row, SmallInput, Result
} from "./CalculatorModal.styles";

export const CalculatorModal = ({ coin, onClose }) => {
    const [amount, setAmount] = useState("");

    const usdValue = amount ? (amount * Number(coin.price)).toLocaleString() : "0";

    return (
        <Overlay>
            <Modal>
                <Header>
                    <CoinInfo>
                        <CoinImage src={coin.iconUrl} alt={coin.name} />
                        <CoinName>{coin.name}</CoinName>
                    </CoinInfo>

                    <CloseButton onClick={onClose}>×</CloseButton>
                </Header>

                <Body>
                    <Row>
                        <SmallInput
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />

                        <span>×</span>

                        <SmallInput
                            type="text"
                            value={coin.price}
                            readOnly
                        />

                        <span>=</span>

                        <Result>${usdValue}</Result>
                    </Row>
                </Body>
            </Modal>
        </Overlay>
    );
};
