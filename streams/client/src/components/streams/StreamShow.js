import React from 'react';
import { connect } from 'react-redux';
import {fetchStream} from '../../actions';

class StreamShow extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    };

    renderContent = () => {

    };
    render() {
        console.log(this.props)
        return (
            <div>StreamShow</div>
        )
    }
}

const mapStateToProps = (state,OwnProps) => {
    return {
        stream: state.streams[OwnProps.match.params.id]
    }
}
export default connect(mapStateToProps, { fetchStream })(StreamShow);