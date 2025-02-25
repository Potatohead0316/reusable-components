import { useEffect, useState } from 'react'
import './style.css'
import { userDetails } from '../../services/userDetailsService'

const Home = () => {
    const storedUserId = localStorage.getItem('userId')
    const [userData, setUserData] = useState('')

    useEffect(() => {
        const fetchUserDetails = async () => {
            if (storedUserId) {
                const result = await userDetails(storedUserId)
                console.log('result', result)

                if (!result?.success) {
                    return alert('An error occured while retrieving user data.')
                }

                setUserData(result)
            } 
        }

        fetchUserDetails()
    }, [storedUserId])

    console.log(userData)

    return (
        <div className='home-container'>
            <div className='header'></div>
            <div className='body'>
                <div className='left-nav'></div>
                <div className='main-content'></div>
                <div className='right-nav'></div>
            </div>
            <div className='footer'></div>
        </div>
    )
}

export default Home
