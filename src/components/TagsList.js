import styled from 'styled-components'


const StyledTags = styled.ul`
    list-style-type: none;
`

const StyledTag = styled.li`
    margin: 0.1em 0.3em;
    background-color: #ccb;
    padding: 0.5em;
    font-size: 80%;
    border-radius: 5px;
`

const FlexibleRow = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    max-width: 400px;
    margin: auto;
`

const TagsList = ({ tags }) => (
    <StyledTags>
        <FlexibleRow>
            {tags.map(tag => <StyledTag key={tag}>{tag}</StyledTag>)}
        </FlexibleRow>
    </StyledTags>
)

export default TagsList
