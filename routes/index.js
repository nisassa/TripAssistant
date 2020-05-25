import LoginNav from './loginNav';
import AppMainNav from './appNav';
import React from 'react';
import { connect } from 'react-redux';

function AppRouter(props) {
    if (props.authToken !== undefined && props.authToken !== false) {
        return (
            <AppMainNav />
        )
    }
    return (
        <LoginNav />
    ) 
}

function mapStateToProps (state, props) {
    return {
        authToken: state.authToken,
    }
}
  
function mapDispatchToProps(dispatch) {
    return {}  
}
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  ) (AppRouter)

