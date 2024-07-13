import React from 'react'
import invite from "../assets/invite.svg"
import s1 from "../assets/s1.svg"
import s2 from "../assets/s2.svg"
import s3 from "../assets/s3.svg"
import s4 from "../assets/s4.svg"

function Refer() {
    return (
        <div className='py-10 clash p-3 pb-20 '>
            <div className="max-w-[1400px] flex flex-col gap-5 mx-auto mt-10">
                <div className="flex flex-col gap-2  items-center  ">
                    <img src={invite} alt="" className="w-[350px]" />
                    <p className="text-[#FFE37E] lg:text-2xl text-center">Invite your friends to get rewards and bonuses</p>
                </div>
                <div className="flex flex-col items-center gap-10">
                <div className="max-w-[900px]  mx-auto w-[280px] lg:w-[900px] text-[white]">
                    <p className="py-2">Invite Friends Through Email</p>
                    <div className="bg-black flex  max-w-[900px] w-[280px]  mx-auto lg:w-[900px] py-2">
                        <input type="email" className="bg-black text-white outline-none px-5 w-[90%]" placeholder='Add Email Address' />
                        <button className="px-5 py-2  button rounded-lg connect">Send</button>

                    </div>
                </div>
                <div className="text-[#FFE37E] max-w-[900px] w-[280px] font-bold text-2xl  mx-auto lg:w-[900px]  flex justify-center">Or</div>
                <div className="max-w-[900px]  mx-auto lg:w-[900px] w-[280px] text-[white]">
                    <p className="py-2">Generated  Link</p>
                    <div className="bg-black max-w-[900px] flex  w-[280px] mx-auto lg:w-[900px] py-2">
                        <input type="email" className="bg-black outline-none text-white px-5 w-[90%]" placeholder='richpeoplegame.cpm/5363273672367236' />
                        <button className="px-2 py-2  button rounded-lg  connect">Generate</button>

                    </div>
                  

                </div>
                <div className="">
                   <button className="w-[300px] py-2  button rounded-lg  connect">Copy</button>
                   </div>

<div className="flex gap-5 ">
<a href="" className=""><img src={s1} alt="" className="transition-all duration-200 hover:scale-110" /></a>
<a href="" className=""><img src={s2} alt="" className="transition-all duration-200 hover:scale-110" /></a>
<a href="" className=""><img src={s3} alt="" className="transition-all duration-200 hover:scale-110" /></a>
<a href="" className=""><img src={s4} alt="" className="transition-all duration-200 hover:scale-110" /></a>




</div>
                </div>

            </div>





        </div>
    )
}

export default Refer