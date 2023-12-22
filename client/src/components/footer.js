import React from "react";
import "./footer.css";
import wk from "../resources/images/vk-icon.png";
import instagram from "../resources/images/instagram-icon.png";
import facebook from "../resources/images/facebook-icon.png";

const Footer = () => {
    return (
        <div className="footer">
            <p className="footer-heading">Контактная информация:</p>
            <p className="footer-text">Адрес: г. Кобрин, ул. Дружбы, 2 (здание «Эдельвейс»)</p>
            <p className="footer-text">МТС: +375 (33) 911-18-81</p>
            <p className="footer-text" style={{ marginBottom: "15px" }}>E-mail: smart_kids_adults@yahoo.com</p>
            <p className="footer-heading" style={{ marginBottom: "10px" }}>Центр SMART в соцсетях:</p>
            <div style={{ display: "block" }}>
                <img className="footer-icon" src={wk} alt="#" />
                    <img className="footer-icon" src={instagram} alt="#" />
                <img className="footer-icon" src={facebook} alt="#" />
            </div>
        </div>
    );
}

export default Footer;