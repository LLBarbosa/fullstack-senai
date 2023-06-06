import React from "react";
import PropTypes from "prop-types";
import '../styles/Button.css';

function Button (props) {
    return (
        <React.Fragment>
            <button type="submit" className="Btn">{props.value}</button>
        </React.Fragment>
    );
}

Button.propTypes = {
    value: PropTypes.string.isRequired
};

export default Button;