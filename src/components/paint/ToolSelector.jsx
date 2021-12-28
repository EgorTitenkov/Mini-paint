import React, { PropTypes } from "react";
import { BRUSH, STAMP, ERASER } from "../../constants/Tools";


function ToolSelector(props) {
    const { action, tool } = props;
    return (
        <div className="tool-container">
            <div className="toolButton">
                <input type="radio" name="tool" id="brush-select"
                       value={BRUSH}
                       checked={tool === BRUSH}
                       onChange={ (e) => { action(e.target.value) } } />
                <label htmlFor="brush-select">BRUSH</label>
            </div>

            <div className="toolButton">
                <input type="radio" name="tool" id="stamp-select"
                       value={STAMP}
                       checked={tool === STAMP}
                       onChange={ (e) => { action(e.target.value) } } />
                <label htmlFor="stamp-select">Stamp</label>
            </div>

            <div className="toolButton">
                <input type="radio" name="tool" id="eraser-select"
                       value={ERASER}
                       checked={tool === ERASER}
                       onChange={ (e) => { action(e.target.value) } } />
                <label htmlFor="eraser-select">Eraser
                </label>
            </div>
        </div>
    );
}

ToolSelector.propTypes = {
    tool: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
};

export default ToolSelector
