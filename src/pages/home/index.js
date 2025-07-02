import { setLoading, setUser } from '../../redux/slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import { userDetails } from '../../services/userDetailsService'
import './style.css'
import Header from '../../components/layout/Header'

const Home = () => {
    const { user } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const hasFetched = useRef(false)

    console.log('user', user)

    useEffect(() => {
        const fetchUserDetails = async () => {
            if (user && user._id && !hasFetched.current) {
                hasFetched.current = true
                const result = await userDetails(user._id)
                if (result.success && result.data) {
                    dispatch(setUser({ ...user, ...result.data }))
                }
            }
            dispatch(setLoading(false))
        }

        fetchUserDetails()
    }, [user, dispatch])

    return (
        <div className='home-container'>
            <Header />
            <div className='content-container'>
                {/* <Navigation /> */}
                {/* <MainContent/> */}
            </div>
        </div>
    )
}

export default Home
