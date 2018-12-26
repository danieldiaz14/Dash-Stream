import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from '../actions/types';

export default (state = {}, {type, payload}) => {
    switch (type) {
        case FETCH_STREAM:
            return {...state, [payload.id]:payload};
        case CREATE_STREAM:
            return {...state, [payload.id]:payload};
        case EDIT_STREAM:
            return {...state, [payload.id]:payload};
        default:
            return state;
    }
};