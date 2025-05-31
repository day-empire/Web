import React, { useEffect, useState } from 'react';
import Text from './Text';
import TimeAgo from '../utils/DateUtils';

function Testimonial() {
  const [data, setData] = useState({ testimonials: [], totalReviews: 1500, weightedAverage: 4.8 });

  useEffect(() => {
    fetch('https://static.dayempire.co.uk/stats/feedback?max=12')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

    return (
    <div className="mx-8 mb-16 lg:mb-32">

      <div className="mx-auto max-w-7xl lg:px-8 pb-10 text-center lg:pb-16 relative">
        <span className="mb-6 px-4 py-1 bg-orange-200 mx-auto inline-flex rounded-4xl">
            Testimonials
        </span>
        <h2 className="mx-auto max-w-3xl font-bold font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-black">
          Our customers love us 
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-gray-600">
            Don’t just take our word for it! Discover why our customers love our service.
        </p>
        <div className="sm:grid justify-center text-center mt-4">
          <span className="px-4 py-1 bg-orange-200 mx-auto inline-flex rounded-4xl">
            <strong>{data.weightedAverage.toFixed(2)}</strong><span>&nbsp;/&nbsp;</span><strong>5.00</strong><span>&nbsp;rating</span>
          </span>
          <span className="text-gray-600 sm:text-xs">
            Based on <a href="https://www.cardmarket.com/en/Pokemon/Users/DayEmpire" title="See All Reviews" target="_blank" className="underline hover:text-gray-600">{data.totalReviews.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} reviews</a>
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 space-y-4">
          {data.testimonials.map(function(testimony, i) {
            return (
              <div id={"testimony-" + i} className="bg-[#fef5e9] p-6 rounded-md break-inside-avoid">
                <img src={testimony.score == 4 ? "/four-stars.webp" : "/five-stars.webp"} height={200} width={100} className="mb-2" alt={testimony.score + " Star Review"}/>
                <h3 className="text-black text-2l mb-1"><span className="font-bold">{testimony.alias}</span><span className="text-gray-600">, {TimeAgo(testimony.date)}</span></h3>
                <p><Text text={testimony.comment} /></p>
              </div>
          );
          })}
        </div>

        <div className="mx-auto sm:flex justify-center gap-2 mt-10 sm:mt-16 text-center">
          <a
            href="https://www.facebook.com/thedayempire"
            title="Join Day Empire Community" target="_blank"
            className="mb-2 sm:mb-0 inline-flex items-center justify-center gap-2 px-6 py-3 bg-black rounded-lg hover:bg-gray-700 text-white"
          >
            Join our community
          </a>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;