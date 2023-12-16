import React, { useState } from "react";
import "./navbar.css";
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (index, path) => {
        setActiveButton(index);
        navigate(path);
    };

    const getButtonClass = (index, path) => {
        return location.pathname === path || index === activeButton
            ? 'navbar-btn'
            : 'styles-btn';
    };

    return (
        <div className="navbar">
            <div className={`styles-btn ${getButtonClass(1, '')}`} onClick={() => handleButtonClick(1, '*')}>О нас</div>
            <div className={`styles-btn ${getButtonClass(2, '/courses')}`} onClick={() => handleButtonClick(2, '/courses')}>Курсы</div>
            <div className={`styles-btn ${getButtonClass(3, '/gallery')}`} onClick={() => handleButtonClick(3, '/gallery')}>Галерея</div>
            <div className={`styles-btn ${getButtonClass(4, '/enroll')}`} onClick={() => handleButtonClick(4, '/enroll')}>Записаться</div>
            <div className={`styles-btn ${getButtonClass(5, '/reviews')}`} onClick={() => handleButtonClick(5, '/reviews')}>Отзывы</div>
        </div>
    );
}

export default Navbar;