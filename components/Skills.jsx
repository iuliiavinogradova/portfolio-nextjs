import React from 'react';
import Skill from './Skill';

const Skills = () => {
    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-[royalblue] uppercase text-xl tracking-widest'>Skills</p>
                <h2 className='py-4'>My main skillset</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <Skill skillName={'Python'} iconName='python' />
                    <Skill skillName={'React'} iconName='react' />
                    <Skill skillName={'Tailwind'} iconName='tailwind' />
                    <Skill skillName={'HTML'} iconName='html' />
                    <Skill skillName={'CSS'} iconName='css' />
                    <Skill skillName={'JavaScript'} iconName='javascript' />
                    <Skill skillName={'GitHub'} iconName='github' />
                    <Skill skillName={'SQL'} iconName='sql' />
                </div>
            </div>
        </div>
    );
}

export default Skills;
