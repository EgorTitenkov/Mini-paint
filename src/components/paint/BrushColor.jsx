import React from "react";
import PropTypes from 'prop-types';

function BrushColor(props) {
    const { action, brush_color } = props;

    return (
        <div className="brush-size-container">
            <input
                id="color"
                type="color"
                className="color-input"
                defaultValue={brush_color}
                onChange={ (e) => {
                    action(e.target.value)
                }}
            />
        </div>
    );
}

BrushColor.propTypes = {
    brush_color: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
};

export default BrushColor
