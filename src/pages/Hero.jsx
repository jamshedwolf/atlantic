import React from 'react'
import homebg from "../assets/a.svg"
import leader from "../assets/leaderb.svg"
import watch from "../assets/watch.svg"
import logo from "../assets/logo.svg"
import herotop from "../assets/al.png"
import "../App.css"
import aro from "../assets/aro0.svg"


function Hero() {
    return (
        <div className=' clash text-white'>
            <div

                style={{
                    backgroundImage: `url(${homebg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',

                }}
                className="w-full  p-5 lg:p-0     a ">



                <div className="mx-auto flex max-w-[1400px]  items-center justify-between h-auto   lg:h-screen xl:h-auto xl:py-40 ">

                    <div className="lg:flex-[.5] flex flex-col gap-4 ">

                        <p className="  "><img src={herotop} alt="" className="w-80 lg:w-[600px]" /></p>
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit<br />
                            Ut et massa mi. Aliquam in hendrerit urna. Pellentesque <br />
                            sit amet sapien fringilla, mattis ligula consectetur, ultrices<br />
                            mauris. Maecenas vitae mattis tellus. Nullam quis<br />
                            imperdiet augue.</p>
                        <div className="flex gap-2 text-center lg:gap-6"><button className="b px-4 py-1 text-black rounded-[7px] font-bold items-center justify-center text-[10px] lg:text-[15px] flex gap-1">Leaderboard <img src={leader} alt="" className="" /></button>
                            <button className="border-[#FBD26F] border flex px-4 py-1 items-center justify-center rounded-[7px] text-[10px] lg:text-[15px] gap-1">Watch Video <img src={watch} alt="" className="" /></button>
                        </div>


                    </div>


                    <div className="hidden lg:flex items-center justify-center  lg:flex-[.5]"><img src={logo} alt="" className="lg:mb-60 " /></div>
                </div>
            </div>



<div className=" items-center justify-center hidden lg:flex"><img src={aro} alt="" className="" /></div>



        </div>
    )
}

export default Hero