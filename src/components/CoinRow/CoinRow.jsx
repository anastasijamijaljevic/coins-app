import React from "react";

export default function CoinRow({ coin }) {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 border rounded">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white border flex items-center justify-center text-sm font-semibold">
          {coin.symbol?.toUpperCase?.() ?? "?"}
        </div>
        <div>
          <div className="text-sm font-medium">{coin.name}</div>
          <div className="text-xs text-gray-400">{coin.symbol?.toUpperCase()}</div>
        </div>
      </div>

      <div className="text-right">
        <div className="font-medium">${Number(coin.price).toLocaleString()}</div>
        <div className="text-xs text-gray-400">amount: {coin.amount ?? "—"}</div>
      </div>
    </div>
  );
}
