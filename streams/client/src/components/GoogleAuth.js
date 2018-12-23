import React from 'react';

class GoogleAuth extends React.Component {
    state = {
        isSignedIn: null
    };
    // google restricts gapi because of the amount of people using it, because of it was must load it through componentDidMount to load it manually and using window for scope.
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '11648960831-ng4iufb7l7ga8ommnllmv8pej51a8q57.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get() });
            })
        });
    };

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div>I don't know if we are signed in</div>
        } else if (this.state.isSignedIn) {
            return <div>I am signed in</div>
        } else {
            return <div>I am not signed in.</div>
        }
    }

    render() {
        console.log(this.isSignedIn);
        return (
            <div className="item">{this.renderAuthButton()}</div>
        )
    };
}

export default GoogleAuth;