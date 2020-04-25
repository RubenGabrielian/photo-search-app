import React from 'react'
import styled from 'styled-components'
import { PhotosStyled } from './Photos'

export const  PhotoItemStyles = styled.div `
    flex: 0 0 25%;
    max-width: 25%;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    img {
        width: 100%;
        margin: 15px 0;
        height: 240px;
        object-fit: cover;
    }
`

const PhotoItem = ({photo}) => {
    return (
        <PhotoItemStyles>
            <img src={photo.webformatURL }  />
        </PhotoItemStyles>
    )
}

export default PhotoItem