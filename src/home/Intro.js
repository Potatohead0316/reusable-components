import './style.css';

const Intro = () => {
    return (
        <div className='body-content'>
            <div className='text-content'>
                <div className='line1'>Hi, I'm Angelo </div>
                <div className='line2'>A UI designer & React Developer </div>
                <div className='line3'>Crafting Beautiful and Functional Designs. Welcome to my Portfolio. </div>
                <button className='checkout-button'>CONTACT ME</button>
                <button className='contact-button'>CHECK OUT MY WORK</button>
            </div>
            <div className='image-content'>
                <img src="images/images.png" alt="sample" />
            </div>
        </div>
    );
};

export default Intro;
