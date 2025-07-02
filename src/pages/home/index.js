import { setLoading, setUser } from '../../redux/slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import { userDetails } from '../../services/userDetailsService'
import './style.css'
import Header from '../../components/layout/Header'
import MainContent from '../../components/layout/MainContent'

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
        <div
            className="home-container"
            style={{
                backgroundImage: 'url("/images/trello-bg-image.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
            }}
        >
            <Header />
            <MainContent />
        </div>
    )
}

export default Home
