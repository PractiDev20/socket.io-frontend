import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`
const StyledImg = styled.img`
    width: 50px;
    height: 50px;
    margin: 5px;
`


const Profile = ({ name, imgSrc = 'https://via.placeholder.com/150x150' }) => {
    return (
        <Container>
            <StyledImg src={imgSrc} alt="Foto de perfil"/>
            <p>{name}</p>
        </Container>
    )
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
}

export default Profile