import {
    ADD_COMMENT,
} from '../ActionTypes'

const initialState = {
    comments: [],
}

export default function reducer (state = initialState, action) {
    switch(action.type) {
        case ADD_COMMENT:
            return { ...state, comments: [...state.comments, action.payload] };
        default:
            return state;
    }
}