import { useState } from 'react'
import styled from 'styled-components'


const Card = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1em;
    padding: 1em;
    border: 3px solid #570475;
    border-radius: 1em;
    min-width: 55%;
    text-align: center;
    background-color: lavender;
    cursor: pointer;
`

const CardImg = styled.img`
    flex: 1;
    border: 1px solid #570475;
    border-radius: 50%;
    margin-left: 1em;
    height: 6rem;
`

const CardDetails = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1em;
`

const Row = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const CardTitle = styled.h2`
    margin: 0.25em 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ToggleIndicator = styled.h1`
    margin: 0.25em 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Text = styled.p`
    font-size: 80%;
    margin: 0.1em;
`

const TagInput = styled.input`
`

const Student = ({ firstName, lastName, email, company, skill, average, pic, grades, tags, updateStudents }) => {
    const [extended, toggleExtended] = useState(false)
    const [tagInput, setTagInput] = useState("")

    const addTag = (e) => {
        e.preventDefault()
        const newTags = [...tags, tagInput]
        setTagInput("")
        if (tags.includes(tagInput)) return

        updateStudents((students) => {
            return students.map((student) => (
                student.email !== email ?
                student :
                { firstName, lastName, email, company, skill, average, pic, grades, tags: newTags }
            ))
        })
    }

    return (
        <Card>
            <Row onClick={() => toggleExtended(state => !state)}>
                <CardImg src={pic} alt={`${firstName} ${lastName}'s profile`} />
                <CardDetails>
                    <Row>
                        <CardTitle>{`${firstName} ${lastName}`}</CardTitle>
                        <ToggleIndicator>{extended ? "-" : "+"}</ToggleIndicator>
                    </Row>
                    <Text>{`Email: ${email}`}</Text>
                    <Text>{`Company: ${company}`}</Text>
                    <Text>{`Skill: ${skill}`}</Text>
                    <Text>{`Average: ${average.toFixed(2)}`}</Text>
                </CardDetails>
            </Row>

            {
                extended &&
                <ul style={{ listStyleType: "none", width: "30%", margin: "1em auto 0.25em", padding: "0 1em" }}>
                    <h3>Grades</h3>
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
                </ul>
            }

            {
                tags.length > 0 &&
                <ul>
                    {
                        tags.map(tag => <li key={tag}>{tag}</li>)
                    }
                </ul>
            }
            <form onSubmit={addTag}>
                <TagInput type="text" onChange={e => setTagInput(e.target.value)} value={tagInput} />
            </form>
        </Card>
    )
}

export default Student
