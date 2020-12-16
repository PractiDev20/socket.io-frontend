import React from 'react'
import { useSelector } from 'react-redux'

import Comment from '../components/Comment'

const CommentList = () => {

    const comments = useSelector(store => store.comments.comments);

    const commentsList = comments.map(({ text, date, user  }) => 
        <Comment 
            text={text}
            date={date}
            user={user}
        />
    )

    return (
        <div>
            {commentsList}
        </div>
    )
}

export default CommentList

