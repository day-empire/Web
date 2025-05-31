import React, { useEffect, useState } from 'react';

function CardCount() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://static.dayempire.co.uk/stats/products')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  if (!data) {
    <span className="mb-6 px-4 py-1 bg-orange-200 mx-auto inline-flex rounded-4xl">
        Over 100,000 items for sale!
    </span>
  }
  else {
  return (
    <span className="mb-6 px-4 py-1 bg-orange-200 mx-auto inline-flex rounded-4xl">
        {data.totalProducts.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} items for sale!
    </span>
  );
  }
}

export default CardCount;