import React, { createContext, useEffect } from 'react'
import io from 'socket.io-client'

import { useDispatch } from 'react-redux'

import { addCommentsToList } from './state/actions/comments'

const WebSocketContext = createContext(null)

export { WebSocketContext }

const ADD_COMMENT_EVENT = 'add-comment'
const CREATE_COMMENT_EVENT = 'create-comment'

const WebSocketConfig = ({ children }) => {
    let socket = {}

    const dispatch = useDispatch();

    const createNewComment = (comment) => {
        socket.emit(CREATE_COMMENT_EVENT, comment)
    }

    const ws = {
        socket,
        createNewComment
    }

    useEffect(() => {
        socket = io.connect('ws://localhost:3001')

        socket.on(ADD_COMMENT_EVENT, comment => {
            dispatch(addCommentsToList(comment))
        })
    })

    return (
        <WebSocketContext.Provider value={ws}>
            {children}
        </WebSocketContext.Provider>
    )
}

export default WebSocketConfig