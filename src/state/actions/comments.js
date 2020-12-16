import {
    ADD_COMMENT
} from '../ActionTypes'

export const addCommentsToList = comment => ({
    type: ADD_COMMENT,
    payload: comment,
})