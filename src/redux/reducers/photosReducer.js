const initState = {
    photos: [

    ]
}

const initPhotos = (state, payload) => {
    const { photos } = state
    return ({
        photos: payload
    })
}

const photosReducer = (state = initState, action) => {
    switch (action.type) {
        case 'INIT_PHOTOS':
            return initPhotos(state, action.payload)
        default:
            return state
    }
}

export default photosReducer
