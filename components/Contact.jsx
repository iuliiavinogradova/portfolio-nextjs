import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Link from 'next/link';

const Contact = () => {
    return (
        <div id='contact' className='w-full lg: h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='text-xl uppercase text-[royalblue] tracking-widest'>Contact</p>
                <h2 className='py-4'>Get In Touch</h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    {/* <contact info>*/}
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full'>
                            <div>
                                <img className='rounded-xl hover:scale-105 ease-in duration-300' src='https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80' alt='/' />
                            </div>
                            <div>
                                <h2 className='py-2 '>
                                    Iuliia
                                </h2>
                                <p>
                                    I am a Full-Stack Developer.
                                </p>
                                <p className='py-4'>I am available for full-time positions. Contact me and let's talk.</p>
                            </div>
                            <div>
                                <p className='uppercase pt-8'>Connect With Me</p>
                                <div className='flex justify-between items-center max-w-[330px] m-auto py-4'>
                                    <a href='https://www.linkedin.com/in/iuliiavinogradova'>
                                        <div className='rounded-full shadow-lg shadow-gray-300 cursor-pointer p-6 hover:scale-105 ease-in duration-300'>
                                            <FaLinkedinIn />
                                        </div>
                                    </a>
                                    <a href="mailto:iuliia.tech@gmail.com">
                                        <div className='rounded-full shadow-lg shadow-gray-300 cursor-pointer p-6 hover:scale-105 ease-in duration-300'>
                                            <AiOutlineMail />
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
                    {/* <form>*/}
                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-800 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form action="https://getform.io/f/e7c6dff1-8b46-452d-bbbd-3f0eb33c73b7" method="POST">
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label htmlFor='name' className='uppercase text-sm py-2'>Name</label>
                                        <input className='border-2 rounded-lg flex border-gray-800 p-3 text-black' type='text' name='name' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label htmlFor='email' className='uppercase text-sm py-2'>Email</label>
                                        <input className='border-2 rounded-lg flex border-gray-800 p-3 text-black' type='email' name='email' />
                                    </div>

                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor='subject' className='uppercase text-sm py-2'>Subject</label>
                                    <input className='border-2 rounded-lg flex  border-gray-800 p-3 text-black' type='text' name='subject' />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor='message' className='uppercase text-sm py-2'>Message</label>
                                    <textarea className='border-2 rounded-lg  flex p-3 border-gray-800 text-black' rows={10} name='message' />
                                </div>
                                <button className='p-3 w-full mt-2 text-gray-100'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className=' flex rounded-full shadow-lg shadow-gray-300 border-2 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp size={30} className='text-[royalblue]' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Contact;
