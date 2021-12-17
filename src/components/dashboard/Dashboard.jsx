import React from "react";
import AddPost from "../posts/AddPost";
import Posts from "../posts/Posts";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom"

const Dashboard = ({ uid }) => {
    if (!uid) return <Redirect to="/signin" />;
    return (
        <>
            <AddPost />
            <Posts />
        </>
    );
};

const mapStateToProps = (state) => {
    const uid = state.firebase.auth.uid;
    return {
        uid: uid,
    };
};

export default connect(mapStateToProps)(Dashboard);
