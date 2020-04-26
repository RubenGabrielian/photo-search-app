import React, { useState, useEffect} from 'react';
import Photos from './components/Photos/Photos'
import { bindActionCreators } from 'redux'
import { init_photos } from './redux/actions/phtosActions'
import { connect } from 'react-redux'
import axios from 'axios'
import Loading from './components/Loading/Loading'

function App (props) {

const [loading, setLoading] = useState(true)
useEffect(() => {
  axios.get('https://pixabay.com/api/?key=8828319-b547bfac350a5cba5f6785026&q=yellow+flowers&image_type=photo&pretty=true')
    .then((response) => {
        const data = response.data.hits
        props.init_photos(data)
    }).then(() => {
      setLoading(false)
    })
}, [])

  
    return (
      <div className="App">
          <Photos photos={props.photos} loading={loading}/>
      </div>
    );

}

const mapStateToProps = (state) => {
    return {
      photos: state.photos.photos,
      loading: state.loading.loading
    }
}

const mapDispatchToStore = (dispatch) => {
  return bindActionCreators({
      init_photos
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToStore)(App)
