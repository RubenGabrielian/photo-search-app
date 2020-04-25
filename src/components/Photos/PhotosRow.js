import React from 'react'
import PhotoItem from './PhotoItem'
import Loading from '../Loading/Loading'

const PhotosRow = (props) => {
    if(props.loading) {
        return <Loading />
    } else {
        return (
            <div className="row">
            { props.photos.map((photo,i) => {
                return (
                    <PhotoItem key={i} photo={photo} />
                )
            }) }
        </div>
        )
    }

}


export default PhotosRow