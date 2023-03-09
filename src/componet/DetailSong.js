import React from "react";

export default function DetailSong(){
    return(
        <div className="col-span-1 p-3">
             <h2 className='text-cyan-500 font-bold'>Now playing</h2>
             <h2 className='text-neutral-400 text-2xl'>Sing me to sleep</h2>
             <div className='w-[240px] m-auto mt-10'>
                <img className='w-full' src="https://cdnimg.vietnamplus.vn/uploaded/bokttj/2022_03_10/aldrin_apollo.jpg" alt="avatar"/>
             </div>
             <div className='flex justify-evenly items-center mt-10'>
                <img className='w-[50px] rounded-full' src="https://cdnimg.vietnamplus.vn/uploaded/bokttj/2022_03_10/aldrin_apollo.jpg" alt="avatar"/>
                <span className="text-xl text-white pr-5">Alan Walke</span>
             </div>
        </div>
    )
}