import React, { useState } from "react";
import { Overlay, Modal, Header, Title, CloseButton, Body, InputWrapper, Input, ResultWrapper, Result } from "./CalculatorModal.styles";

export const CalculatorModal = ({ coin, onClose }) => {
    const [amount, setAmount] = useState("");
    const usdValue = amount ? (amount * Number(coin.price)).toLocaleString() : "0";

    return (
        <Overlay>
            <Modal>
                <Header>
                    <Title>{coin.name} Calculator</Title>
                    <CloseButton onClick={onClose}>×</CloseButton>
                </Header>

                <Body>
                    <InputWrapper>
                        <Input
                            type="number"
                            placeholder="Enter coin amount..."
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </InputWrapper>

                    <ResultWrapper>
                        <Result>${usdValue}</Result>
                    </ResultWrapper>
                </Body>
            </Modal>
        </Overlay>
    );
};
