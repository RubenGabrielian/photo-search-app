import React from 'react'
import styled from 'styled-components'

export const SearchBarStyled = styled.div `
    input {
        margin: 25px auto;
        display: block;
        width: 500px;
        padding: 10px;
        border: 1px solid #ddd;
    }
`

const SearchBar = () => {
    return (
        <SearchBarStyled>
            <input 
                type="text"
                placeholder="Search Images..."
            />
        </SearchBarStyled>
    )
}

export default SearchBar