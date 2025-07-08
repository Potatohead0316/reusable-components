import { useSelector } from 'react-redux'
import Header from '../../components/layout/Header'
import MainContent from '../../components/layout/MainContent'
import './style.css'

const Home = () => {
    const { user } = useSelector((state) => state.user)
    const token = localStorage.getItem('token')

    console.log({ user, token })

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
