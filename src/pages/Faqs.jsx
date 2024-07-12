import React, { useState } from 'react';

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "../App.css"
import faq from "../assets/faq.svg"

function Faqs() {
    const [openIndex, setOpenIndex] = useState(null);

    function toggleAccordion(index) {
        setOpenIndex(openIndex === index ? null : index);
    }

    const accordionData = [
        { title: "What are the NFTs?", content: "Urna vitae erat et lacus, consectetur ac nulla vestibulum lobortis $ Nulla dapibus urna volutpat venenatis, risus faucibus." },
        { title: "How do i get NFTs?", content: "Urna vitae erat et lacus, consectetur ac nulla vestibulum lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus." },
        { title: "How we can buy and invest NFT ?", content: "Urna vitae erat et lacus, consectetur ac nulla vestibulum lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus." },
        { title: "Where we can buy and sell NFts ?", content: "Urna vitae erat et lacus, consectetur ac nulla vestibulum lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus." },
        { title: "Where we can buy and sell NFts ?", content: "Urna vitae erat et lacus, consectetur ac nulla vestibulum lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus." },
        { title: "Where we can buy and sell NFts ?", content: "Urna vitae erat et lacus, consectetur ac nulla vestibulum lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus." },
        // Add more items here as needed
    ];

    return (
        <div id='faq'
            // style={{
            //     backgroundImage: `url(${accordinbg})`,
            //     backgroundSize: 'cover',
            //     backgroundPosition: 'center',
            // }}
            className=" clash bg-[#111219] lg:h-screen h-[130vh] exo xl:h-auto lg:pt-10  flex-col gap-4 text-[white] flex items-center justify-center"
        ><p className="h text-[#FFE37E] text-5xl"><img src={faq} alt="" className="" /></p>
        <p className="h text-[#FFE37E] ">Frequently Asked Questions</p>
            <div className="flex flex-col gap-4 max-w-[1400px] mx-auto xl:h-auto xl:py-20">
                {accordionData.map((item, index) => (
                    
                    <div key={index} className="border transition-all ease-linear duration-200 hover:scale-105 h-auto rounded-lg w-[300px] lg:w-[800px]">
                        <p
                            onClick={() => toggleAccordion(index)}
                            className={`text-[#FFE37E]   text-[12px] lg:text-[20px] mx-5 text-start p-3 relative cursor-pointer`}
                        >
                            {item.title}
                            {openIndex === index ? (
                                <IoIosArrowUp className='absolute text-white transition-all ease-linear duration-150 top-4 right-2 '  />
                            ) : (
                                <IoIosArrowDown className='absolute text-white transition-all ease-linear duration-150 top-4 right-2 ' />
                            )}
                        </p>
                        {openIndex === index && (
                            <div className="bg-[#111219] text-start p-8 clash text-[10px] lg:text-[15px] transition-all ease-linear duration-300 text-white">
                                {item.content}
                            </div>
                        )}
                    </div>

                ))}
            </div>
            
           
            
        </div>
    );
}

export default Faqs;
