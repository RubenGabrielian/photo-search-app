
const initState = {
    loading: false
}


const change_loading = (state) => {
    const { loading } = state
    return ({
        loading: !loading
    })
}

const loadingReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CHANGE_LOADING':
            return change_loading(state)
        default:
            return state
    }

}

export default loadingReducer