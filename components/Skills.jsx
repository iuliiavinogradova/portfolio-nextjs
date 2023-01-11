import React from 'react';
import Skill from './Skill';
import Img1 from '../public/assets/skills/python.jpg';

const Skills = () => {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-[royalblue] uppercase text-xl tracking-widest'>Skills</p>
                <h2 className='py-4'>My main skillset</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <Skill skillName={'Python'} skillImg={Img1} />
                    <Skill skillName={'React'} skillImg={Img1} />
                    <Skill skillName={'Tailwind'} skillImg={Img1} />
                    <Skill skillName={'HTML'} skillImg={Img1} />
                    <Skill skillName={'CSS'} skillImg={Img1} />
                    <Skill skillName={'JavaScript'} skillImg={Img1} />
                    <Skill skillName={'GitHub'} skillImg={Img1} />
                    <Skill skillName={'SQL'} skillImg={Img1} />
                </div>
            </div>
        </div>
    );
}

export default Skills;
