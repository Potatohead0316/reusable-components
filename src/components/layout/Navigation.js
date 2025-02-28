import { useDispatch, useSelector } from "react-redux";
import { setNavItem } from "../../redux/features/navSlice";

const Navigation = () => {
    const navItems = ['Book Management', 'User Management', 'Order Management', 'Settings'];
    const dispatch = useDispatch();
    const activeNavItem = useSelector((state) => state.nav.activeNavItem);

    const handleNavItem = (index) => {
        dispatch(setNavItem(navItems[index]));
    };

    return (
        <div className="navigation">
            {navItems.map((item, index) => (
                <div 
                    key={index} 
                    className={`nav-item ${activeNavItem === item ? 'active' : ''}`} 
                    onClick={() => handleNavItem(index)}
                >
                    {item}
                </div>
            ))}
        </div>
    );
};

export default Navigation;
