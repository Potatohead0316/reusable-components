import './style.css';

const Intro = () => {
    return (
        <div className='body-content'>
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
    );
};

export default Intro;
