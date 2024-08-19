import React, { useState } from 'react'
import card from "../assets/card.webp"
import crd2 from "../assets/crd2.svg"
import f1 from "../assets/f1.svg"
import f2 from "../assets/f2.svg"
import f3 from "../assets/f3.svg"
import coin from "../assets/coin.svg"
import aro from "../assets/aro.svg"
import p1 from "../assets/p1.svg"
import p2 from "../assets/p2.svg"
import p3 from "../assets/p3.svg"
import p4 from "../assets/p4.svg"
import p5 from "../assets/p5.svg"
import p6 from "../assets/p6.svg"
import eth from "../assets/eth.svg"
import "../App.css"
import Leaderboardnav from './Leaderboardnav'

function Leaderboard() {
    const [row, setrow] = useState(null)
    const leaderboardData = [
        { rank: 1, player: 'reclusivevitamins', img: p1, won: 1236, lost: 245, handsPlayed: 3108, tokensWon: 8811, currency: 'ETH' },
        { rank: 2, player: 'reclusivevitamins', img: p2, won: 1236, lost: 245, handsPlayed: 3108, tokensWon: 8811, currency: 'ETH' },
        { rank: 3, player: 'reclusivevitamins', img: p3, won: 1236, lost: 245, handsPlayed: 3108, tokensWon: 8811, currency: 'ETH' },
        { rank: 4, player: 'reclusivevitamins', img: p4, won: 1236, lost: 245, handsPlayed: 3108, tokensWon: 8811, currency: 'ETH' },
        { rank: 5, player: 'reclusivevitamins', img: p5, won: 1236, lost: 245, handsPlayed: 3108, tokensWon: 8811, currency: 'ETH' },
        { rank: 6, player: 'reclusivevitamins', img: p2, won: 1236, lost: 245, handsPlayed: 3108, tokensWon: 8811, currency: 'ETH' },
        { rank: 7, player: 'reclusivevitamins', img: p4, won: 1236, lost: 245, handsPlayed: 3108, tokensWon: 8811, currency: 'ETH' },
        { rank: 8, player: 'reclusivevitamins', img: p5, won: 1236, lost: 245, handsPlayed: 3108, tokensWon: 8811, currency: 'ETH' },
    ];

    return (
        <div className="text-white px-2  md:pl-10 py-2 bg-[#111219]">
            <div className='max-w-[1400px] mx-auto'>

              
                <div className="flex flex-col items-center  lg:items-start lg:flex-row gap-5">
                    <div className="flex flex-col lg:flex-row gap-5">
                        <div style={{
                            backgroundImage: `url(${card})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',



                        }} className="w-[300px] h-[300px] p-3 ">
                            <div className="mt-5">
                                <div className="flex justify-between px-2">
                                    <div className="">$<span className="text-5xl font-semibold">1</span></div>
                                    <div className="pt-5  "><img src={f1} alt="" className="" /></div>
                                </div>
                                <div className=''>@mahoganycrib</div>

                                <div className="flex flex-col py-2  gap-2">
                                    <p className="flex justify-between items-center ">
                                        <span className="text-[#7D7575]">won / lost</span>
                                        <span className="">1236 / 245</span>

                                    </p>
                                    <p className="flex justify-between items-center ">
                                        <span className="text-[#7D7575]">Hands Played</span>
                                        <span className="">14240</span>

                                    </p>
                                    <p className="flex  justify-between items-center ">
                                        <span className="text-[#7D7575]">Tokens Won</span>
                                        <span className="flex gap-1">13425 <img src={coin} alt="" className="" /></span>

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div style={{
                            backgroundImage: `url(${card})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',



                        }} className="w-[300px] h-[300px] p-3 ">
                            <div className="mt-5">
                                <div className="flex justify-between px-2">
                                    <div className="">$<span className="text-5xl font-semibold">2</span></div>
                                    <div className="pt-5  "><img src={f1} alt="" className="" /></div>
                                </div>
                                <div className=''>@mahoganycrib</div>

                                <div className="flex flex-col py-2  gap-2">
                                    <p className="flex justify-between items-center ">
                                        <span className="text-[#7D7575]">won / lost</span>
                                        <span className="">1236 / 245</span>

                                    </p>
                                    <p className="flex justify-between items-center ">
                                        <span className="text-[#7D7575]">Hands Played</span>
                                        <span className="">14240</span>

                                    </p>
                                    <p className="flex  justify-between items-center ">
                                        <span className="text-[#7D7575]">Tokens Won</span>
                                        <span className="flex gap-1">13425 <img src={coin} alt="" className="" /></span>

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div style={{
                            backgroundImage: `url(${card})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',



                        }} className="w-[300px] h-[300px] p-3 ">
                            <div className="">
                                <div className="flex justify-between items-center pb-2 px-2">
                                    <div className="flex items-end gap-1 ">$<span className="text-5xl font-semibold">3</span> <span className=""><img src={aro} alt="" className="w-[8px]" /></span> <span className="text-green-600 font-semibold">2</span></div>
                                    <div className="pt-5  "><img src={f1} alt="" className="" /></div>
                                </div>
                                <div className=''>@mahoganycrib</div>

                                <div className="flex flex-col py-2  gap-2">
                                    <p className="flex justify-between items-center ">
                                        <span className="text-[#7D7575]">won / lost</span>
                                        <span className="">1236 / 245</span>

                                    </p>
                                    <p className="flex justify-between items-center ">
                                        <span className="text-[#7D7575]">Hands Played</span>
                                        <span className="">14240</span>

                                    </p>
                                    <p className="flex  justify-between items-center ">
                                        <span className="text-[#7D7575]">Tokens Won</span>
                                        <span className="flex gap-1">13425 <img src={coin} alt="" className="" /></span>

                                    </p>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div style={{
                        backgroundImage: `url(${card})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',



                    }} className="lg:w-[400px] lg:h-[400px] h-[300px] w-[300px] px-3 lg:p-3 ">

                        <div className="flex justify-between    ">
                            <div className="flex items-end    gap-1 ">$<span className="text-4xl lg:text-7xl font-semibold">36</span> <span className=""><img src={aro} alt="" className="w-[8px]" /></span> <span className="text-green-600 font-semibold">1</span>  </div>
                            <div className="pt-5  "><img src={p6} alt="" className="w-[50px]  lg:w-[70px]" /></div>
                        </div>
                        <div className=''>@mahoganycrib</div>
                        <div className='text-[#8F8C8C] '>registered since: october 2024</div>
                        <div className="flex gap-4 mt-5">
                            <div className="flex flex-col gap-3 flex-start">
                                <img src={eth} alt="" className="w-[30px] lg:w-[40px]" />
                                <div className="text-[#8F8C8C] text-[12px] lg:text-[15px] ">won / lost</div>
                                <div className="lg:text-[18px] text-[15px] font-bold ">1236 / 245</div>

                            </div>
                            <div className="flex flex-col gap-3 flex-start">
                                <img src={eth} alt="" className="w-[30px] lg:w-[40px]" />
                                <div className="text-[#8F8C8C] text-[12px] lg:text-[15px] ">hands played</div>
                                <div className="lg:text-[18px] text-[15px] font-bold">14240</div>

                            </div>
                            <div className="flex flex-col gap-3 flex-start">
                                <img src={eth} alt="" className="w-[30px] lg:w-[40px]" />
                                <div className="text-[#8F8C8C] text-[12px] lg:text-[15px] ">tokens won</div>
                                <div className="lg:text-[18px] text-[15px] font-bold">13425</div>

                            </div>
                        </div>






                    </div>

                </div>

                <div className="lg:w-[900px] h-[1.5px] mx-5 bg-[#FFE37E]"></div>

                <div className="overflow-x-auto lg:pb-40">

                    <div className="lg:w-[1000px] max-w-[1000px]">
                        <div className="text-[#8F8C8C] flex ">
                            <div className="py-2  text-start  min-w-[200px]  font-normal">Rank</div>
                            <div className="py-2  text-start  min-w-[200px]  font-normal">Player</div>
                            <div className="py-2  text-start  min-w-[200px]  font-normal">Won/Lost</div>
                            <div className="py-2  text-start   min-w-[200px]  font-normal">Hands Played</div>
                            <div className="py-2  text-start  min-w-[100px]  font-normal">Tokens Won</div>
                        </div>
                        {leaderboardData.map((player, index) => (
                            <div key={index} className="flex items-center lg:hover:border group  pr-0 text-white box rounded-lg border-[#FFE37E] mb-2 py-2" id='leader'>
                                <div className=" text-start  flex items-center min-w-[200px] lg:h-[15px] ">#{player.rank}</div>
                                <div className="text-start    items-center min-w-[200px]  lg:h-[15px] flex gap-1">
                                    <img src={player.img} alt="" className="w-6 h-6" />
                                    {player.player}
                                </div>
                                <div className=" min-w-[200px] flex items-center  lg:h-[15px] text-start z-10">
                                    <span className="group-hover:text-[#2D9161]">{player.won}</span>/
                                    <span className="group-hover:text-[#FF426B]">{player.lost}</span>
                                </div>
                                <div className=" min-w-[200px]  flex items-center lg:h-[15px] text-start">{player.handsPlayed}</div>
                                <div className=" min-w-[100px]   flex items-center lg:h-[15px] text-start">
                                    {player.tokensWon} <span className="text-[#8F8C8C]">{player.currency}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leaderboard