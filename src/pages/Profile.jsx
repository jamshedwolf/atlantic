import React from 'react'
import avatar from "../assets/avatar.svg"
import pro from "../assets/pro.webp"

function Profile() {
    return (
        <div className='  h-auto lg:h-screen clash text-white'>
            <div className="max-w-[1400px] flex flex-col p-4  lg:p-10 gap-10 mx-auto">


                <p className="text-5xl    clash font-extrabold">My Profile</p>

                <div className="flex gap-4">
                    <img src={avatar} className="lg:w-[130px] w-[100px]" />
                    <div className=" flex flex-col items-start justify-center">
                        <p className="lg:text-2xl text-xl">rabbitsfootvanilla</p>
                        <p className="text-[#FFE37E]">Change Avatar?</p>
                    </div>

                </div>
                <div className="h-[.7px] mx-4 bg-[#FFE37E]"></div>
<div className="flex flex-col items-center justify-center lg:flex-row gap-4">
<div 
  style={{
    backgroundImage: `url(${pro})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
}}
className="h-[150px] w-[300px] flex  items-start justify-start p-5 flex-col gap-4">
<p className="text-[#ffffffd3] text-[13px]">MY RANK</p>
<p className="text-2xl font-extrabold pl-3">#5</p>


</div>
<div 
  style={{
    backgroundImage: `url(${pro})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
}}
className="h-[150px] w-[300px] flex items-start justify-start p-5 flex-col gap-4">
<p className="text-[#ffffffd3] text-[13px]">WON/LOST</p>
<p className="text-2xl font-extrabold pl-3"><span className="text-[#2D9161]">56,3%</span>/<span className="text-[#FF426B]">33,5%</span>

</p>


</div>
<div 
  style={{
    backgroundImage: `url(${pro})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
}}
className="h-[150px] w-[300px] flex items-start justify-start p-5 flex-col gap-4">
<p className="text-[#ffffffd3] text-[13px] uppercase">Hands played</p>
<p className="text-2xl font-extrabold pl-3">3919</p>


</div>
<div 
  style={{
    backgroundImage: `url(${pro})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
}}
className="h-[150px] w-[300px] flex items-start justify-start p-5 flex-col gap-4">
<p className="text-[#ffffffd3] uppercase text-[13px]">Tokens won</p>
<p className="text-2xl font-extrabold pl-3">3919  ETH</p>


</div>



</div>




            </div>





        </div>
    )
}

export default Profile