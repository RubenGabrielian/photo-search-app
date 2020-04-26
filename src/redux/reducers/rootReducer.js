import { combineReducers } from 'redux'
import photosReducer from './photosReducer'
import loadingReducer from './loadingReducer'

const rootReducer = combineReducers({
    photos: photosReducer,
    loading: loadingReducer
})

export default rootReducer