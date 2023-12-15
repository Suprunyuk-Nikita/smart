import React from "react";
import "./navbar.css";

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="navbar-btn">О нас</div>
            <div className="styles-btn">Курсы</div>
            <div className="styles-btn">Галерея</div>
            <div className="styles-btn">Записаться</div>
            <div className="styles-btn">Отзывы</div>
        </div>
    );
}

export default Navbar;