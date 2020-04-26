import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { init_photos } from '../../redux/actions/phtosActions'
import { change_loading } from '../../redux/actions/loadingActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


export const SearchBarStyled = styled.div `
    input {
        margin: 25px auto;
        display: block;
        width: 500px;
        padding: 10px;
        border: 1px solid #ddd;
    }
`


const SearchBar = (props) => {

    const [search, setSearch] = useState('')

    const handleChange = e => {
        props.change_loading()
        setSearch(e.target.value)
        axios.get(`https://pixabay.com/api/?key=8828319-b547bfac350a5cba5f6785026&q=${search}&image_type=photo&pretty=true`)
            .then((response) => {
                const data = response.data.hits
                props.init_photos(data)
            }).then(() => {
                props.change_loading()
            })
    }
    return (
        <SearchBarStyled>
            <input 
                type="text"
                placeholder="Search Images..."
                value={search}
                onChange={handleChange}
            />
        </SearchBarStyled>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading.loading
    }
}

const  mapDispatchToStore = (dispatch) => {
    return bindActionCreators({
        init_photos,
        change_loading
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToStore)(SearchBar)