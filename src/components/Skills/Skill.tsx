import '../../styles/Skill.css'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

type skillType = {
    skill: string,
    logo: string,
    description: string,
    rate: number
}


const Skill = ({skill, logo, description, rate}: skillType) => {
    return (
        <div className='skill'>
            <h2>{skill}</h2>
            <img className='skill-image' src={logo} alt="logo skill" />
            <p>{description}</p>
            <Box sx={{ width: '100%'}}>
                <LinearProgress className="progress-bar" variant="determinate" value={rate} />
            </Box>
        </div>
    )
}

export default Skill;