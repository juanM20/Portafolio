import Skill from './Skill'
import { SKILLS } from '../../utils/properties';

const SkillsGallery = () => {
    return (
        <div>
            {SKILLS.map( (s, index) => {
                return (
                    <div key={index}>
                        <Skill 
                            skill={s.skill}
                            logo={s.logo}
                            description={s.description}
                            rate={s.rate}
                        ></Skill>
                    </div>
                )
            })}
        </div>
    )
}

export default SkillsGallery;