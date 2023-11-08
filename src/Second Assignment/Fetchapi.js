import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Fetchapi() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <table className="table">
        {/* <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price (USD)</th>
            <th>Total Volume</th>
            <th>Price Change (24h)</th>
            <th>Market Cap Change (24h)</th>
          </tr>
        </thead> */}
        <tbody>
          {posts.map((post, i) => (
            <tr key={i}>
              <td>
                <img src={post.image} alt={post.name} width="30" height="30" className='mx-1'/>
                {post.name}
              </td>
              <td>{post.symbol}</td>
              <td>${post.current_price}</td>
              <td>${post.total_volume}</td>

              <td style={{ color: post.price_change_24h > 0 ? 'green' : 'red' }}>
                {post.price_change_24h}%
              </td>

              <td>Market Cap: ${post.market_cap_change_24h}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
