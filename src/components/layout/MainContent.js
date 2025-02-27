import { useSelector } from "react-redux";
import Book from "../content/book-management";
import User from "../content/user-management";
import Order from "../content/order-management";
import Settings from "../content/settings";
import Footer from "./Footer";
import '../../components/layout/styles.css'

const MainContent = () => {
    const activeNavItem = useSelector((state) => state.nav.activeNavItem);

    const renderContent = () => {
        switch (activeNavItem) {
            case "Book Management":
                return <Book />;
            case "User Management":
                return <User />;
            case "Order Management":
                return <Order />;
            case "Settings":
                return <Settings />;
            default:
                return <Book />;
        }
    };

    return (
        <div className="main-content">
            <div className="center-container">
                {renderContent()}
            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </div>
    )
};

export default MainContent;
