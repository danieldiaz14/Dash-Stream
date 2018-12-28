import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions/index';

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onDistroy = () => {
        this.props.deleteStream(this.props.match.params.id);
    }
    render() {
        const {stream} = this.props;
        if (!stream) {
            return <div>Loading..</div>
        }
        return (
            <div>
                <h3>Delete Stream: {stream.title}</h3>
                <button className="ui button negative" onClick={this.onDistroy}>Delete</button>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    };
};

export default connect(mapStateToProps,{fetchStream,deleteStream})(StreamDelete)