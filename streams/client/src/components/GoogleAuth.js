import React from 'react';
import { connect } from 'react-redux';
import {signIn, signOut } from '../actions';
class GoogleAuth extends React.Component {
    // google restricts gapi because of the amount of people using it, because of it was must load it through componentDidMount to load it manually and using window for scope.
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '11648960831-ng4iufb7l7ga8ommnllmv8pej51a8q57.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    };

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn();
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon"/>
                    Sign out
                </button>
            )
        } else {
            return (
                <button onClick={this.onSignInClick}className="ui red google button">
                    <i className="google icon"/>
                    Sign in
                </button>
            )
        }
    }

    render() {
        return (
            <div className="item">{this.renderAuthButton()}</div>
        )
    };
}

const mapStateToProps = state => {
    return {isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);