import React from 'react';
import { Link } from "react-router-dom";
import MetaUpdater from "../MetaData";

const NotFound = () => {

    return (
<>
<MetaUpdater title="Day Empire - Page Not Found" description="Looks like Team Rocket stole this page!"/>
  <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8 pt-20 pb-20 text-center lg:pt-32 lg:pb-32">

      <span className="mb-6 px-4 py-1 bg-orange-200 mx-auto inline-flex rounded-4xl">Page not found</span>
      <h1 className='mx-auto max-w-5xl font-bold font-display text-5xl tracking-tight text-black sm:text-7xl'>Team Rocket Stole This Page!</h1>
      <p className='mx-auto mt-6 max-w-2xl text-lg tracking-tight text-gray-600'>Prepare for trouble, and make it double! The page you’re looking for has been snatched by the sneakiest villains in all of Kanto.</p>
      <div className="flex justify-center gap-2 mt-6">

        <Link to="/" title="Day Empire Home Page" className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-black rounded-lg hover:bg-gray-700 text-white">Return Home</Link>
        <Link to="/about-us" title="About Day Empire" className="flex items-center underline hover:no-underline justify-center gap-2 px-6 py-2 relative bg-white rounded-lg text-black hover:text-gray-500">Learn about Day Empire</Link>

      </div>

  </div>
  </>
    );
  }
  
  export default NotFound;


