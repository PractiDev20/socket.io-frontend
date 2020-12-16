import React, { useContext, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import styled from 'styled-components'

import { WebSocketContext }  from '../WebSocket'

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    width: 450px;
`;

const CommentForm = () => {
    
    const [formData, setFormData] = useState({
        user: '',
        text: '',
    })

    const handleChange = (key, value) => {
        setFormData({
            ...formData,
            [key]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        ws.createNewComment(formData)
    }

    const ws = useContext(WebSocketContext)

    return (
            <StyledForm onSubmit={handleSubmit}>
                <TextField
                    placeholder="Usuario"
                    style={{ margin: '5px 0' }}
                    value={formData.user}
                    onChange={ e => handleChange('user', e.target.value) }
                />
                <TextField
                    placeholder="Comentario"
                    multiline
                    style={{ margin: '5px 0' }}
                    value={formData.text}
                    onChange={ e => handleChange('text', e.target.value) }
                />
                <Button type="submit" variant="contained" color="primary">
                    Comentar
                </Button>
            </StyledForm>
    )
}

export default CommentForm

