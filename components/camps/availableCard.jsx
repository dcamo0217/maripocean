import React from "react";
import PropTypes from "prop-types";

const availableCard = ({ info }) => {
    return (
        <div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

availableCard.propTypes = {
    info: PropTypes.object.isRequired,
};

export default availableCard;
