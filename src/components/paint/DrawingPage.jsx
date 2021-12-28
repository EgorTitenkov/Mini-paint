import React from "react";
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as TodoActions from "../../actions/drawActions";
import Canvas from "../paint/Canvas";
import Sidebar from "../paint/Sidebar";

const DrawingPage = ({tools, actions}) => (
    <div>
        <Canvas
            tools={tools}
        />
        <Sidebar
            tools={tools}
            actions={actions}
        />
    </div>
)

const mapStateToProps = state => ({
    tools: state.tools
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DrawingPage)
