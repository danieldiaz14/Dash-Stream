import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions/index'
import StreamForm from './StreamForm';
import _ from 'lodash';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    };

    onSubmit = (formValues) => {
        console.log(formValues);
    };
    render() {
        const {stream} = this.props;
        if (!stream) {
            return <div>Loading..</div>
        }
        return (
            <div>
                <h3>Edit Stream {stream.title}</h3>
                <StreamForm 
                    initialValues={_.pick(stream, 'title', 'description')}
                    onSubmit={this.onSubmit} 
                />
            </div>
        )
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    };
};

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);