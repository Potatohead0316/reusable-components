import './style.css';

const Home = () => {
    return (
        <div className="form-container">
            <div className='header'>
                <div className='name-logo'>
                    <span>angelo</span>
                    <span className='last-name'>hagon</span>
                </div>
                <div className='navigation'>
                    <div href="/">Home</div>
                    <div href="/">Designs</div>
                    <div href="/">About me</div>
                    <div href="/">Resume</div>
                    <div href="/">Contacts</div>
                </div>
            </div>
            <div className='body-content'>
                <div className='text-content'>
                    <div className='line1'>Hi, I'm Angelo </div>
                    <div className='line2'>A UI designer & React Developer </div>
                    <div className='line3'>Crafting Beautiful and Functional Designs. Welcome to my Portfolio. </div>
                </div>
                <div className='image-content'>
                    <img src="images/images.png" alt="sample"/>
                </div>
            </div>
        </div>
    );
};

export default Home;
