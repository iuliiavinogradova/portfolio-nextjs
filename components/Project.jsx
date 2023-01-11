import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Project = ({ projectImg, projectName, projectStack }) => {
    return (
        <div className='relative fl items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[royalblue] to-[royalblue]'>
            <Image className='rounded-xl group-hover:opacity-10' src={projectImg} alt='/' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>{projectName}</h3>
                <p className='pb-4 pt-2 text-white text-center'>{projectStack}</p>
                <div className='flex justify-center gap-8'>
                    <Link href={`/[projectId]`} as={`/${projectName}`}>
                        <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Read More</p>
                    </Link>
                </div>


            </div>
        </div>
    );
}

export default Project;

