import React from "react";
import '../styles/Header.css';

function Header(props) {
    const nome = "Laércio";
    return (
        <div className="Header">
            <h1>Hello, World!!</h1>
            <h2>{nome}, seja bem-vindo!!</h2>
        </div>
    );
}

export default Header;