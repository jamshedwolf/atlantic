import React from 'react';
import poolsbg from "../assets/poolscrd.svg";
import baloon from "../assets/baloon.svg";
import k10 from "../assets/10k.svg";
import k3 from "../assets/3k.svg";
import k100 from "../assets/k100.svg";
import k200 from "../assets/k200.svg";

import pools1 from "../assets/pools1.svg";
import lk from "../assets/lk.svg";
import tick from "../assets/tick.svg";
import "../App.css";


const ticketData = [
    { img: k10, participantLimit: 100, ticketPrice: 100 },
    { img: baloon, participantLimit: 100, ticketPrice: 250 },
    { img: baloon, participantLimit: 100, ticketPrice: 500 },
    { img: k3, participantLimit: 100, ticketPrice: 1000 },
    { img: k100, participantLimit: 100, ticketPrice: "2.5k" },
    { img: k200, participantLimit: 100, ticketPrice: "5k" },

];


function Tickets() {
    return (
        <div id='tickets' className='flex  flex-col h-auto py-10 bg-[#111219] items-center justify-center'>
            <div className="text-center max-w-[1400px] mx-auto py-10 flex flex-col text-white">
                <div className="lg:text-6xl  items-center justify-center gap-2 flex font-bold">
                    <img src={pools1}  className='w-[300px] lg:w-[400px]' alt="tick" />
                 
                </div>
                <div className="text-[#AAAAAA] mt-5">Purchase a ticket to win big money</div>
            </div>
            <div className="max-w-[1400px] pl-4 md:pl-0 lg:w-[1200px] flex-wrap clash gap-5 mx-auto flex flex-col lg:flex-row items-center justify-center">
                {ticketData.map((ticket, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundImage: `url(${poolsbg})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat'
                        }}
                        className="w-[300px] h-[450px] flex text-white items-center justify-center flex-col gap-5"
                    >
                        <img src={ticket.img} alt={`ticket-${index}`} className="w-[150px]" />
                        <div className="flex items-center justify-center flex-col gap-3">
                            <p className="flex justify-between w-[200px] items-center gap-10">
                                <div>Participant Limit</div>
                                <div>{ticket.participantLimit}</div>
                            </p>
                            <p className="flex justify-between w-[200px] items-center gap-10">
                                <div>Ticket Price</div>
                                <div>${ticket.ticketPrice}</div>
                            </p>
                            <p className="flex justify-between w-[200px] items-center gap-10">
                                <div>Tickets</div>
                                <div>+ 1 -</div>
                            </p>
                        </div>
                        <button className='px-3 py-2 connect rounded-lg b font-bold text-[#111219]'>Buy Now</button>
                    </div>
                ))}
            </div>









        </div>
    );
}

export default Tickets;
