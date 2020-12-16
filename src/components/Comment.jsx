import React from 'react'
import Card from '@material-ui/core/Card'
import PropTypes from 'prop-types'

import Profile from './Profile'

import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`

const StyledCard = styled(Card)`
    max-width: 700px;
    min-width: 600px;
    margin: 10px;
    padding: 10px;
`

const Comment = ({ text, date, user }) => {
    return (
        <StyledCard>
            <Container>
                <Profile 
                    name={user}
                />
                <span>{date}</span>
            </Container>
            <div>
                <p>{text}</p>
            </div>
        </StyledCard>
    )
}

Comment.propTypes = {
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
}

export default Comment;