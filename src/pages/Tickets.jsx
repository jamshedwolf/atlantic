import React from 'react';
import poolsbg from "../assets/poolscrd.webp";
import baloon from "../assets/baloon.svg";
import k10 from "../assets/10k.svg";
import k3 from "../assets/3k.svg";
import k100 from "../assets/k100.svg";
import k200 from "../assets/k200.svg";

import pools1 from "../assets/pools1.svg";
import lk from "../assets/lk.svg";
import tick from "../assets/tick.svg";
import "../App.css";
import CircularProgress from './CircularProgress';

function Tickets() {
    return (
        <div id='tickets' className='flex clash flex-col h-auto py-10 bg-[#111219] items-center justify-center'>
            <div className="text-center max-w-[1400px] mx-auto py-10 flex flex-col text-white">
                <div className="lg:text-6xl items-center justify-center gap-2 flex font-bold">
                    <img src={pools1} className='w-[300px] lg:w-[400px]' alt="tick" />
                </div>
                <div className="text-[#AAAAAA] mt-5">Purchase a ticket to win big money</div>
            </div>
            <div className="max-w-[1400px] pl-4 md:pl-0 lg:w-[1200px] flex-wrap clash gap-5 mx-auto flex flex-col lg:flex-row items-center justify-center">

                {/* Ticket 1 */}
                <div
                    style={{
                        backgroundImage: `url(${poolsbg})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    }}
                    className="w-[300px] h-[450px] flex text-white items-center justify-center flex-col gap-5"
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
                        <p className="flex justify-between w-[200px] items-center gap-10">
                            <div>Participant Limit</div>
                            <div>100</div>
                        </p>
                        <p className="flex justify-between w-[200px] items-center gap-10">
                            <div>Ticket Price</div>
                            <div>$100</div>
                        </p>
                        <p className="flex justify-between w-[200px] items-center gap-10">
                            <div>Tickets</div>
                            <div>+ 1 -</div>
                        </p>
                    </div>
                    <button className='px-3 py-2 connect rounded-lg b font-bold text-[#111219]'>Buy Now</button>
                </div>

                {/* Ticket 2 */}
                <div
                    style={{
                        backgroundImage: `url(${poolsbg})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    }}
                    className="w-[300px] h-[450px] flex text-white items-center justify-center flex-col gap-5"
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
                        <p className="flex justify-between w-[200px] items-center gap-10">
                            <div>Participant Limit</div>
                            <div>100</div>
                        </p>
                        <p className="flex justify-between w-[200px] items-center gap-10">
                            <div>Ticket Price</div>
                            <div>$250</div>
                        </p>
                        <p className="flex justify-between w-[200px] items-center gap-10">
                            <div>Tickets</div>
                            <div>+ 1 -</div>
                        </p>
                    </div>
                    <button className='px-3 py-2 connect rounded-lg b font-bold text-[#111219]'>Buy Now</button>
                </div>

                {/* Ticket 3 */}
                <div
                    style={{
                        backgroundImage: `url(${poolsbg})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    }}
                    className="w-[300px] h-[450px] flex text-white items-center justify-center flex-col gap-5"
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
                        <p className="flex justify-between w-[200px] items-center gap-10">
                            <div>Participant Limit</div>
                            <div>100</div>
                        </p>
                        <p className="flex justify-between w-[200px] items-center gap-10">
                            <div>Ticket Price</div>
                            <div>$500</div>
                        </p>
                        <p className="flex justify-between w-[200px] items-center gap-10">
                            <div>Tickets</div>
                            <div>+ 1 -</div>
                        </p>
                    </div>
                    <button className='px-3 py-2 connect rounded-lg b font-bold text-[#111219]'>Buy Now</button>
                </div>

                {/* Ticket 4 */}
                <div
                    style={{
                        backgroundImage: `url(${poolsbg})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    }}
                    className="w-[300px] h-[450px] flex text-white items-center justify-center flex-col gap-5"
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
                        <p className="flex justify-between w-[200px] items-center gap-10">
                            <div>Participant Limit</div>
                            <div>100</div>
                        </p>
                        <p className="flex justify-between w-[200px] items-center gap-10">
                            <div>Ticket Price</div>
                            <div>$1000</div>
                        </p>
                        <p className="flex justify-between w-[200px] items-center gap-10">
                            <div>Tickets</div>
                            <div>+ 1 -</div>
                        </p>
                    </div>
                    <button className='px-3 py-2 connect rounded-lg b font-bold text-[#111219]'>Buy Now</button>
                </div>

                {/* Ticket 5 */}
                <div
                    style={{
                        backgroundImage: `url(${poolsbg})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    }}
                    className="w-[300px] h-[450px] flex text-white items-center justify-center flex-col gap-5"
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
                        <p className="flex justify-between w-[200px] items-center gap-10">
                            <div>Participant Limit</div>
                            <div>100</div>
                        </p>
                        <p className="flex justify-between w-[200px] items-center gap-10">
                            <div>Ticket Price</div>
                            <div>$2.5k</div>
                        </p>
                        <p className="flex justify-between w-[200px] items-center gap-10">
                            <div>Tickets</div>
                            <div>+ 1 -</div>
                        </p>
                    </div>
                    <button className='px-3 py-2 connect rounded-lg b font-bold text-[#111219]'>Buy Now</button>
                </div>

                {/* Ticket 6 */}
                <div
                    style={{
                        backgroundImage: `url(${poolsbg})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    }}
                    className="w-[300px] h-[450px] flex text-white items-center justify-center flex-col gap-5"
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
                        <p className="flex justify-between w-[200px] items-center gap-10">
                            <div>Participant Limit</div>
                            <div>100</div>
                        </p>
                        <p className="flex justify-between w-[200px] items-center gap-10">
                            <div>Ticket Price</div>
                            <div>$5k</div>
                        </p>
                        <p className="flex justify-between w-[200px] items-center gap-10">
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

export default Tickets;
