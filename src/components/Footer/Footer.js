import '../../styles/Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { CONTACT_LINKS } from '../../utils/properties';


const github_link = CONTACT_LINKS['github-link'];
const linkedin_link = CONTACT_LINKS['linkedin-link'];
const insta_link = CONTACT_LINKS['instagram-link'];


const Footer = () => {
    return (
        <div className="footer">
            <h2 className='header-footer'>Social Media</h2>

            <div className='icons-section'>
                <a href={github_link} target='_blank' rel="noreferrer"><GitHubIcon fontSize='large'>  </GitHubIcon> </a>
                <a href={linkedin_link} target='_blank' rel="noreferrer"> <LinkedInIcon fontSize='large'> </LinkedInIcon> </a>
                <a href={insta_link} target='_blank' rel="noreferrer"> <InstagramIcon fontSize='large' >    </InstagramIcon> </a>
            </div>
            <div className='copyright-section'>
                © {new Date().getFullYear} Copyright {' '}
                <a href="#App-header"> JuanTellez.com </a>
            </div>
        </div>
    )
}

export default Footer;