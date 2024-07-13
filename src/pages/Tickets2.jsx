import React from 'react'

import poolsbg from "../assets/poolscrd.webp"
import pools2 from "../assets/pools2.svg"
import img1 from "../assets/m1.svg"
import img2 from "../assets/m2.svg"





const card= [
  
    { img:img1 , participantLimit: 100, ticketPrice: "10k" },
    { img:img2 , participantLimit:" unlimitted", ticketPrice: "10k" },

];


function Tickets2() {
  return (



    <div className=' py-10 clash bg-[#111219] '>
        <div className="text-center flex flex-col gap-5  items-center justify-center p-5">
            <img src={pools2} alt="" className="w-[300px] lg:w-[400px]" />
            <div className="text-[#FF0000] my-5">Purchase a ticket to win big money</div>
            </div>

<div className="flex items-center flex-col lg:flex-row  gap-3 justify-center max-w-[1400px] mx-auto lg:w-[900px]">


{card.map((items,index)=>(
    <div
                        key={index}
                        style={{
                            backgroundImage: `url(${poolsbg})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat'
                        }}
                        className="w-[300px] ml-4 lg:ml-0  h-[450px] flex text-white items-center justify-center flex-col gap-5"
                    >
                        <img src={items.img} alt={`ticket-${index}`} className="w-[150px]" />
                        <div className="flex items-center justify-center flex-col gap-3">
                            <p className="flex justify-between w-[250px] items-center gap-10">
                                <div>Participant Limit</div>
                                <div>{items.participantLimit}</div>
                            </p>
                            <p className="flex justify-between w-[250px] items-center ">
                                <div>Ticket Price</div>
                                <div className=''>${items.ticketPrice}</div>
                            </p>
                            <p className="flex justify-between w-[250px] items-center gap-10">
                                <div>Tickets</div>
                                <div>+ 1 -</div>
                            </p>
                        </div>
                        <button className='px-3 py-2 connect rounded-lg b font-bold text-[#111219]'>Buy Now</button>
                    </div>

)
)}
</div>








    </div>
  )
}

export default Tickets2