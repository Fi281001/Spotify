import React, { useContext } from "react";
import { Songs } from "../Context";
export default function DetailSong(){
    const {Song} = useContext(Songs)
    return(
        <div className="col-span-1 p-3">
             <h2 className='text-cyan-500 font-bold'>Now playing</h2>
             <h2 className='text-neutral-400 text-2xl'>{Song.name}</h2>
             <div className='w-[240px] m-auto mt-10'>
                <img className='w-full' src={Song.links.images[0].url} alt="avatar"/>
             </div>
             <div className='flex justify-evenly items-center mt-10'>
                <img className='w-[50px] rounded-full' src={Song.links.images[0].url} alt="avatar"/>
                <span className="text-xl text-white pr-5">{Song.author}</span>
             </div>
        </div>
    )
}