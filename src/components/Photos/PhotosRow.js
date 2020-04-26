import React from 'react'
import PhotoItem from './PhotoItem'
import Loading from '../Loading/Loading'
import { connect } from 'react-redux'

const PhotosRow = (props) => {

    if(props.new_loading) {
        return <Loading />
    }

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

const mapStateToProps = (state) => {
    return {
        new_loading: state.loading.loading
    }
}


export default connect(mapStateToProps)(PhotosRow)