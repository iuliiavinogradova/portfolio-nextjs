import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[royalblue]'>About</p>
                    <h2 className='py-4'>Let me introduce myself</h2>
                    <p className='py-2 text-gray-300'>Technical consultant with 1+ years of experience as Python and Web developer. Monash IT Graduate with strong interpersonal skills and an ability to adapt in Agile team environments. Ongoing teaching engagement demonstrates a focus on community, while work in technical consultancy / software development demonstrates reliability, honesty and ability to collaborate.</p>
                    <p className='py-2 text-gray-300 underline cursor-pointer'><a href='#projects'>My favourite projects</a></p>
                    <p className='py-2 text-gray-300 underline cursor-pointer'><a href='https://github.com/iuliiavinogradova'>More projects on my GitHub</a></p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-between p-4 hover:scale-105 ease-in duration-300'>
                    <Image className='rounded-xl' src='https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80' alt='Iuliia' width={500} height={500} />
                </div>
            </div>
        </div>
    );
}

export default About;
