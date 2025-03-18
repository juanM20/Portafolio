import '../../styles/FrontPage.css';
import { Button } from 'antd';

const frontImage = '/images/foto_perfil2.jpeg';

const FrontPage = () => {
    return (
        <div className='frontPage'>
            <div className="title-section">
                <div className='title-h'>
                    <h1>Juan Tellez</h1>
                </div>
                <div className='image-section'>
                    <img className='image' src={frontImage} alt="frontImg" />
                </div>
                <div className='content-section'>

                    <h2>Software Engineer</h2>
                    <div>
                        <p>I am an experienced software developer specialized in Front end with react, lit-element and
                            nodejs. I'm becoming a Full stack Engineer with MERN stack and AWS. Currently working
                            on Sngular as a Front end developer. I have performed with all kind of teams and I am able to
                            adapt to any situation.</p>
                    </div>
                    <Button type='primary' className='button' size='large'>Contact Me</Button>
                </div>
            </div>
        </div>
        
    );
}

export default FrontPage;