import About from './About';
import Contacts from './Contacts';
import Intro from './Intro';
import Projects from './Projects';
import Resume from './Resume';
import './style.css';
import React, {useState} from 'react'

const Home = () => {

    const [state, setState] = useState()
    const handleNav = (nav) => {
        setState(prevState => ({
            ...prevState,
            navType: nav
        }))
    }

    const content = (type) => {
        switch(type) {
            case 1:
                return <Intro/>;
            case 2:
                return <About/>;
            case 3:
                return <Projects/>;
            case 4:
                return <Resume/>;
            default:
                return <Contacts/>;
        }
    }
    
    console.log("state", state)
    return (
        <div className="form-container">
            <div className='header'>
                <div className='name-logo'>
                    <span>angelo</span>
                    <span className='last-name'>hagon</span>
                </div>
                <div className='navigation'>
                    <div onClick={()=>handleNav(1)}>Home</div>
                    <div onClick={()=>handleNav(2)}>About me</div>
                    <div onClick={()=>handleNav(3)}>Projects</div>
                    <div onClick={()=>handleNav(4)}>Resume</div>
                    <div onClick={()=>handleNav(5)}>Contacts</div>
                </div>
            </div>
           {content(state?.navType)}
        </div>
    );
};

export default Home;
