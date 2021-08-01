import styled from 'styled-components'


const Input = styled.input`
    min-width: 75%;
    padding: 0.5em;
    font-size: 120%;
    border: 5px solid #570475;
    border-radius: 0.5em;
    display: block;
    outline: none;
    margin: 0.25em auto 1em;
    &:focus {
        border-color: #0258ea;
    }
`

const SearchInput = ({ search, setSearch }) => {
    return (
        <Input
            type="search"
            onInput={e => setSearch(e.target.value)}
            value={search}
            placeholder="&#x1F50D; Search profiles by first & last names."
        />
    )
}

export default SearchInput
