import React from 'react';

class GoogleAuth extends React.Component {
    
    componentDidMount() {
        const id = '11648960831-ng4iufb7l7ga8ommnllmv8pej51a8q57.apps.googleusercontent.com';
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: id,
                scope: 'email'
            });
        });
    };

    render() {
        return (
            <div className="item">Google Auth</div>
        )
    };
}

export default GoogleAuth;