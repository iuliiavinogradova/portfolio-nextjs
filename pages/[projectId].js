import React from 'react';
import Info from '../components/Info';
import { ProjectData } from '../components/ProjectData';

const info = ({ project }) => {
    return (
        <div>
            <Info
                projectImg={project.image}
                projectName={project.projectName}
                projectStack={project.projectStack}
                projectLink={project.projectLink}
                overview={project.overview}
                projectCode={project.projectCode}
                tech={project.tech}
            />
        </div>
    );
};

export const getServerSideProps = async ({ params }) => {
    const project = ProjectData.find(p => p.projectName === params.projectId);
    return {
        props: { project }
    };
};

export default info;
