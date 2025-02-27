import { setLoading, setUser } from '../../redux/features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import { userDetails } from '../../services/userDetailsService'
import './style.css'
import Navigation from '../../components/layout/Navigation'
import Header from '../../components/layout/Header'
import MainContent from '../../components/layout/MainContent'

const Home = () => {
    const { user } = useSelector((state) => state.user)
    const activeNavItem = useSelector((state) => state.nav.activeNavItem);
    const dispatch = useDispatch()
    const hasFetched = useRef(false)

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

    console.log('activeNavItem', activeNavItem)

    return (
        <div className='home-container'>
            <Header />
            <div className='content-container'>
                <Navigation />
                <MainContent/>
            </div>
        </div>
    )
}

export default Home
