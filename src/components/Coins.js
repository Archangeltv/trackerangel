import Axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Coins() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins").then((response) => {
      console.log(response.data.coins);
      setCoins(response.data.coins);
    });
  }, []);

  return (
    <section className="p-8 md:px-16 bg-white">
      <h2 className="text-[#0D0D2B] font-bold text-2xl text-center mb-5">
        Popular Coins Watch
      </h2>
      <div className="overflow-x-scroll">
        <table className="w-full overflow-x-scroll table-auto">
          <thead>
            <tr className="text-left bg-gray-100 h-10">
              <th>S/N</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price</th>
              <th>Change(1d)</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            {coins.slice(0, 10).map((coin) => {
              return (
                <tr className="even:bg-gray-100 h-10">
                  <td>{coin.rank}</td>
                  <td>
                    <a href={coin.websiteUrl} target="_blank" rel="noreferrer">
                      {coin.name}
                    </a>
                  </td>
                  <td>{coin.symbol}</td>
                  <td>$ {coin.price.toFixed(3).toLocaleString()}</td>
                  <td
                    className={`${
                      coin.priceChange1d < 0 ? "text-red-600" : "text-green-600"
                    }`}
                  >
                    {coin.priceChange1d}
                  </td>
                  <td>{Math.floor(coin.volume).toLocaleString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Coins;
