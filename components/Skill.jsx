import { AiFillHtml5, AiFillGithub, AiOutlineConsoleSql } from 'react-icons/ai';
import { DiCss3, DiJavascript1, DiPython, DiReact } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';

const Skill = ({ skillName, iconName }) => {
    let Icon;
    switch (iconName) {
        case 'html':
            Icon = <AiFillHtml5 size={50} />
            break;
        case 'css':
            Icon = <DiCss3 size={50} />
            break;
        case 'javascript':
            Icon = <DiJavascript1 size={50} />
            break;
        case 'sql':
            Icon = <AiOutlineConsoleSql size={50} />
            break;
        case 'python':
            Icon = <DiPython size={50} />
            break;
        case 'react':
            Icon = <DiReact size={50} />
            break;
        case 'tailwind':
            Icon = <SiTailwindcss size={50} />
            break;
        case 'github':
            Icon = <AiFillGithub size={50} />
            break;
        default:
            Icon = null;
    }

    return (
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-50'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                    {Icon}
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <h3>{skillName}</h3>
                </div>
            </div>
        </div>
    );
}

export default Skill;
