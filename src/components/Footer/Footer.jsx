import '../../styles/Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { CONTACT_LINKS } from '../../utils/properties';

const github_link = CONTACT_LINKS['github-link'];
const linkedin_link = CONTACT_LINKS['linkedin-link'];

const Footer = () => {
    return (
        <div className="footer">
            <h2 className='header-footer'>Social</h2>

            <div className='icons-section'>
                <a href={github_link} target='_blank' rel="noreferrer"><GitHubIcon fontSize='large'>  </GitHubIcon> </a>
                <a href={linkedin_link} target='_blank' rel="noreferrer"> <LinkedInIcon fontSize='large'> </LinkedInIcon> </a>
            </div>
            <div className='copyright-section'>
                © {new Date().getFullYear} Copyright {' '}
                <a href="#App-header"> JuanTellez.com </a>
            </div>
        </div>
    )
}

export default Footer;