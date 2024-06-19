import { useState, useEffect } from 'react';
import './style.css';

const Intro = () => {
    const [displayedText, setDisplayedText] = useState('');
    const phrases = ["UI/UX Designer", "Front-End Developer"];
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (charIndex < phrases[phraseIndex]?.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + phrases[phraseIndex][charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setCharIndex(0);
                setDisplayedText('');
                setPhraseIndex((prev) => (prev + 1) % phrases.length);
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [charIndex, phraseIndex, phrases]);

    const getCaret = () => {
        return <span className="caret" style={{ color:'white', fontSize:'35px' }}>|</span>;
    };
    return (
        <div>
            <div className='intro-content'>
                <div className='text-content'>
                    <div className='line1'>Hi, I'm Angelo </div>
                    <div className='line2'>{displayedText}{getCaret()}</div>
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
