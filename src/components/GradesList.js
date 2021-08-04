import styled from 'styled-components'


const Text = styled.p`
    font-size: 80%;
    margin: 0.1em;
`

const Title = styled.p`
    font-size: 120%;
    font-weight: bold;
    margin: 0.2em;
`
const Row = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const StyledGrades = styled.ul`
    list-style-type: none;
    width: 30%;
    margin: 0.25em auto 0.4em;
    padding: 0 1em;
`

const GradesList = ({ grades }) => (
    <StyledGrades>
        <Title>Grades</Title>
            {
                grades.map((grade, i) => (
                    <li key={i}>
                        <Row>
                            <Text>{`Test ${i}:`}</Text>
                            <Text>{`${grade}%`}</Text>
                        </Row>

                    </li>
                ))
            }
    </StyledGrades>
)

export default GradesList
