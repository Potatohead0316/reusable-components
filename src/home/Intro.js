import './style.css';

const Intro = () => {
    return (
        <div>
            <div className='intro-content'>
                <div className='text-content'>
                    <div className='line1'>Hi, I'm Angelo </div>
                    <div className='line2'>Front-End Developer </div>
                    <div className='line3'>Crafting Beautiful and Functional Designs. Welcome to my Portfolio. </div>
                    <button className='checkout-button'>CONTACT ME</button>
                    <button className='contact-button'>DOWNLOAD CV</button>
                </div>
                <div className='image-content'>
                    <img src="images/images.png" alt="sample" />
                </div>
            </div>
            <div className='about-me'>
                <div className='webdev-container'>
                    <img src="images/webdev.jpg" alt="sample" />
                </div>
                <div>
                    <div className='about-me-text'>
                        Professionally connected with the web development industry.
                        Problem solver, well-organised person, loyal employee with high attention to detail.
                        Fan of Boxing, outdoor activities, video games, and coding of course.
                        Interested in the entire frontend spectrum and working on ambitious projects with interesting people.
                    </div>
                    <div className='about-icons'>
                        <img src="images/react.png" alt="sample" />
                        <img src="images/html.png" alt="sample" />
                        <img src="images/javascript.png" alt="sample" />
                        <img src="images/azure.png" alt="sample" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
