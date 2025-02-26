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
            <div className='content-container'></div>
        </div>
    )
}

export default Home
