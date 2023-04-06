import React, { useState } from "react";

const CryptoCell = ({ name }) => {
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rate, setRate] = useState(0);

  const handleClick = () => {
    setExpanded(!expanded);
    if (!expanded) {
      setLoading(true);
      fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${name}&vs_currencies=rub,usd`)
        .then((res) => res.json())
        .then((data) => {
          setRate(data[name]);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }
  };

  return (
    <div className="crypto-cell" onClick={handleClick}>
      <div className="crypto-name">{name}</div>
      <div className="crypto-rate">
        {loading ? "Loading..." : `RUB: ${rate.rub} | USD: ${rate.usd}`}
      </div>
      {expanded && (
        <div className="crypto-details">
          <p>Some details about {name} cryptocurrency...</p>
        </div>
      )}
    </div>
  );
};

export default CryptoCell;