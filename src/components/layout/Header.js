import { useState, useEffect, useRef } from 'react';
import { logout } from '../../redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const userInitial = user?.username?.charAt(0).toUpperCase();
    const dropdownRef = useRef(null);

    const handleLogout = () => {
        dispatch(logout());
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="header">
            <div>Logo</div>
            <div className="user-container" ref={dropdownRef}>
                <div className="user" onClick={() => setIsOpen(!isOpen)}>
                    {userInitial}
                </div>
                {isOpen && (
                    <div className="dropdown">
                        <div className="dropdown-item" onClick={handleLogout}>
                            Logout
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
