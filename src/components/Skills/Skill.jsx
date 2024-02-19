import '../../styles/Skill.css'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';


const Skill = ({skill, logo, description, rate}) => {
    return (
        <div>
            <h2>{skill}</h2>
            <img className='skill-image' src={logo} alt="logo skill" />
            <p>{description}</p>
            <Box sx={{ width: '100%' }}>
                <LinearProgress variant="determinate" value={rate} />
            </Box>
        </div>
    )
}

export default Skill;