import React from 'react';

import poolsbg from "../assets/poolscrd.webp";
import pools2 from "../assets/pools2.svg";
import img1 from "../assets/m1.svg";
import img2 from "../assets/m2.svg";
import CircularProgress from './CircularProgress';

function Tickets2() {
  return (
    <div className='py-10 clash bg-[#111219]'>
      <div className="text-center flex flex-col gap-5 items-center justify-center p-5">
        <img src={pools2} alt="" className="w-[300px] lg:w-[400px]" />
        <div className="text-[#FF0000] my-5">Purchase a ticket to win big money</div>
      </div>

      <div className="flex items-center flex-col lg:flex-row gap-3 justify-center max-w-[1400px] mx-auto lg:w-[900px]">

        {/* Card 1 */}
        <div
          style={{
            backgroundImage: `url(${poolsbg})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
          }}
          className="w-[300px] ml-4 lg:ml-0 h-[450px] flex text-white items-center justify-center flex-col gap-5"
        >
          <CircularProgress
            size={150}
            progress={50}
            strokeWidth={25}
            circleColor="#333"
          >
            <div className="font-bold text-[20px] text-center text-[#ebc568]">50%</div>
            <div className="font-semibold text-center">$2000</div>
          </CircularProgress>
          <div className="flex items-center justify-center flex-col gap-3">
            <p className="flex justify-between w-[250px] items-center gap-10">
              <div>Participant Limit</div>
              <div>100</div>
            </p>
            <p className="flex justify-between w-[250px] items-center">
              <div>Ticket Price</div>
              <div className=''>10k</div>
            </p>
            <p className="flex justify-between w-[250px] items-center gap-10">
              <div>Tickets</div>
              <div>+ 1 -</div>
            </p>
          </div>
          <button className='px-3 py-2 connect rounded-lg b font-bold text-[#111219]'>Buy Now</button>
        </div>

        {/* Card 2 */}
        <div
          style={{
            backgroundImage: `url(${poolsbg})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
          }}
          className="w-[300px] ml-4 lg:ml-0 h-[450px] flex text-white items-center justify-center flex-col gap-5"
        >
          <CircularProgress
            size={150}
            progress={50}
            strokeWidth={25}
            circleColor="#333"
          >
           <div className="font-bold text-[20px] text-center text-[#ebc568]">50%</div>
           <div className="font-semibold text-center">$2000</div>
          </CircularProgress>
          <div className="flex items-center justify-center flex-col gap-3">
            <p className="flex justify-between w-[250px] items-center gap-10">
              <div>Participant Limit</div>
              <div>unlimitted</div>
            </p>
            <p className="flex justify-between w-[250px] items-center">
              <div>Ticket Price</div>
              <div className=''>10k</div>
            </p>
            <p className="flex justify-between w-[250px] items-center gap-10">
              <div>Tickets</div>
              <div>+ 1 -</div>
            </p>
          </div>
          <button className='px-3 py-2 connect rounded-lg b font-bold text-[#111219]'>Buy Now</button>
        </div>

      </div>
    </div>
  );
}

export default Tickets2;
