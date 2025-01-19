// import { useState, useEffect } from "react";

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);
//   const url = "https://api.coinpaprika.com/v1/tickers";
//   useEffect(() => {
//     fetch(url).then((response) =>
//       response.json().then((json) => {
//         setCoins(json);
//         setLoading(false);
//       })
//     );
//   }, []);
//   return (
//     <div>
//       <h1>The Coins! ({coins.length})</h1>
//       {loading ? <strong>Loading...</strong> : null}
//       <select>
//         {coins.map((coin, key) => (
//           <option key={coin.id}>
//             {coin.name} ({coin.symbol}):{coin.quotes.USD.price} USD
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

// export default App;

// // https://api.coinpaprika.com/v1/tickers
