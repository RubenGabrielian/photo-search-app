
const initState = {
    photos: null,
    loading: false
}

const initPhotos = (state, payload) => {
    const { photos } = state
    return ({
        photos: payload
    })
}

// const change_loading = (state, payload) => {
//     const { photos, loading } = state
//     return ({
//         photos: payload,
//         loading: !loading
//     })
// }

const photosReducer = (state = initState, action) => {
    switch (action.type) {
        case 'INIT_PHOTOS':
            return initPhotos(state, action.payload)
        // case 'CHANGE_LOADING':
        //     return change_loading(state, action.payload)
        default:
            return state
    }
}

export default photosReducer
