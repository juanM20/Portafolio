import '../../styles/Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <div className="footer">
            <h1>Social Media</h1>

            <div className='icons-section'>
                <a href="https://github.com" target='_blank' rel="noreferrer"><GitHubIcon fontSize='large'>  </GitHubIcon> </a>
                <a href="https://linkedin.com/feed/" target='_blank' rel="noreferrer"> <LinkedInIcon fontSize='large'> </LinkedInIcon> </a>
                <a href="https://instagram.com" target='_blank' rel="noreferrer"> <InstagramIcon fontSize='large' >    </InstagramIcon> </a>
            </div>
            <div className='copyright-section'>
                © {new Date().getFullYear} Copyright {' '}
                <a href="#App-header"> JuanTellez.com </a>
            </div>
        </div>
    )
}

export default Footer;