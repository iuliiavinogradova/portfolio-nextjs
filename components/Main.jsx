import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
    return (
        <div id='main' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div className='uppercase text-sm tracking-widest text-gray-400'>
                    <p>Let's make a digital world a more convenient place</p>
                    <h1 className='py-4 text-gray-100'>Hi, I am <span className='text-[royalblue]'>Iuliia</span></h1>
                    <h2 className='text-gray-300 py-2'>A Full-Stack Developer</h2>
                    <p className='py-4 text-gray-400 max-w-[70%] m-auto'>Monash IT Postgraduate with strong interpersonal skills and an ability to work in Agile team environments.</p>
                    <div className='flex justify-between items-center max-w-[330px] m-auto py-4'>
                        <a href='mailto:iuliia.tech@gmail.com'>
                            <div className='rounded-full shadow-lg shadow-gray-300 cursor-pointer p-6 hover:scale-105 ease-in duration-300'>
                                <AiOutlineMail />
                            </div>
                        </a>
                        <a href='https://www.linkedin.com/in/iuliiavinogradova'>
                            <div className='rounded-full shadow-lg shadow-gray-300 cursor-pointer p-6 hover:scale-105 ease-in duration-300'>
                                <FaLinkedinIn />
                            </div>
                        </a>
                        <a href='https://github.com/iuliiavinogradova'>
                            <div className='rounded-full shadow-lg shadow-gray-300 cursor-pointer p-6 hover:scale-105 ease-in duration-300'>
                                <FaGithub />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
