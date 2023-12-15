import React from "react";
import "./header.css";
import "../resources/styles.css";
import logo from "../resources/images/logo.png";

const Header = () => {
    return (
        <div className="header">
            <img className="header-logo" src={logo} alt="#" />
            <div className="header-btns-panel">
                <div className="styles-btn" style={{ justifyItems: "self-end" }}>Регистрация</div>
                <div className="header-btn">Вход</div>
            </div>
        </div>
    );
}

export default Header;