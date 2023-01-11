import React from 'react';
import Image from 'next/image';

const Skill = ({ skillImg, skillName }) => {
    return (
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-50'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    <Image src={skillImg} alt='/' width='64' height='64' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>{skillName}</h3>
                </div>
            </div>
        </div>
    );
}

export default Skill;
