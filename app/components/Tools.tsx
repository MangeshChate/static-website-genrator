'use client';
import React from 'react'
import {useDrag} from 'react-dnd';

const Tool: React.FC<{ type: string }> = ({ type }) => {
    const [, drag] = useDrag({
        type:type,
        item:  {type} ,
    });

    return (
        <>
            <button ref={drag} className='bg-blue-600 p-3 text-white font-bold shadow-lg rounded-md text-2xl hover:bg-blue-900 duration-100 hover:shadow-2xl cursor-grab'>
                {type}
            </button>
        </>
    );
};

const Tools = () => {

    return (
        <div className='mt-[50px] flex justify-around w-full'>
            
            <Tool type={"Text"}/>
            <Tool type={"Image"}/>

        </div>
    )
}

export default Tools
