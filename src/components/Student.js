import styled from 'styled-components'


const Card = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
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
    height: 7rem;
`

const CardDetails = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1em;
`

const CardTitle = styled.h2`
    margin: 0.25em;
`

const Text = styled.p`
    font-size: 80%;
    margin: 0.1em;
`

const Student = ({ firstName, lastName, email, company, skill, average, pic, grades }) => {
    return (
        <Card className="student-info">
            <CardImg src={pic} alt={`${firstName} ${lastName}'s profile`} />
            <CardDetails>
                <CardTitle>{`${firstName} ${lastName}`}</CardTitle>
                <Text>{`Email: ${email}`}</Text>
                <Text>{`Company: ${company}`}</Text>
                <Text>{`Skill: ${skill}`}</Text>
                <Text>{`Average: ${average.toFixed(2)}`}</Text>
            </CardDetails>

        </Card>
    )
}

export default Student
