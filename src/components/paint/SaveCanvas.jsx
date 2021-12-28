import React, {Component} from "react";
import PropTypes from 'prop-types';
import { savingCanvas } from '../../actions/drawActions';

class SaveCanvas extends Component {
    constructor(props, context) {
        super(props, context);
        this.saveCanvas = this.saveCanvas.bind(this);
    }
    saveCanvas(event) {
        event.preventDefault();
        const canvas = document.querySelector('canvas');
        const dataURL = canvas.toDataURL('image/png');
        let downloadWindow = window.open('about:blank','canvas image');
        downloadWindow.document.write("<img src='"+  dataURL +"' alt='from canvas'/>");
    }
    render(){
        return (
            <div className="save-container">
                <button
                    id="save-select"
                    value={savingCanvas}
                    checked={savingCanvas === true}
                    onClick={this.saveCanvas}>SAVE</button>
            </div>
        );
    }
}

SaveCanvas.propTypes = {
    saveCanvas: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
};

export default SaveCanvas
