import '../../styles/FrontPage.css';
import frontImage from '../../utils/images/foto_perfil.jpeg';
import { Button } from 'antd';

const FrontPage = () => {
    return (
        <div className="title-section">
            <div className='image-section'>
                <img className='image' src={frontImage} alt="frontImg" />
            </div>
            <div className='content-section'>
                <h1>Juan Tellez</h1>
                <h2>Software Engineer</h2>
                <div>
                    <p>I am a experienced software developer specialized in Front end with react, lit-element and
                        nodejs. I'm becoming in a Full stack Engineer with MERN stack and AWS. Currently working
                        on Sngular as a Front end developer. I have performed with all kind of teams and I am able to
                        adapt to any situation.</p>
                </div>
                <Button type='primary' className='button' size='large'>Contact Me</Button>
            </div>
        </div>
    );
}

export default FrontPage;