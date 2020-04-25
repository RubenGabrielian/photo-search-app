import React from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import PhotosRow from './PhotosRow'

export const PhotosStyled = styled.div `
    h4 {
        text-align: center;
    }
`


const Photos = (props) => {

    console.log(props.photos)
    return (
        <div className="container mt-5">
            <PhotosStyled>
                <h4>Photos</h4>
                <SearchBar />
                <PhotosRow photos={props.photos} loading={props.loading} />
            </PhotosStyled>
        </div>
    )
}

export default Photos