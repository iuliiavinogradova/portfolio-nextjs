import React from 'react';
import Project from './Project';
// import Img1 from '../public/assets/projects/portfolio.png';
import { ProjectData } from './ProjectData';



const Projects = () => {


    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[royalblue]'>Projects</p>
                <h2 className='py-4'>My main Projects</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    {ProjectData.map((project, index) => {
                        return (
                            <Project
                                projectImg={project.image} projectLink={project.projectLink} projectName={project.projectName} projectStack={project.projectStack}

                            />
                        )
                    })};
                    {/* 
                    <Project projectImg={Img1} projectCode={''} projectLink={'/info'} projectName={'React App'} projectStack={'ReactJS'} />
                    <Project projectImg={Img1} projectCode={''} projectLink={'/info'} projectName={'React App'} projectStack={'ReactJS'} />
                    <Project projectImg={Img1} projectCode={''} projectLink={'/info'} projectName={'React App'} projectStack={'ReactJS'} />
                    <Project projectImg={Img1} projectCode={''} projectLink={'/info'} projectName={'React App'} projectStack={'ReactJS'} />
                    <Project projectImg={Img1} projectCode={''} projectLink={'/info'} projectName={'React App'} projectStack={'ReactJS'} />
                    <Project projectImg={Img1} projectCode={''} projectLink={'/info'} projectName={'React App'} projectStack={'ReactJS'} /> */}
                </div>

            </div>
        </div>
    );
}

export default Projects;
