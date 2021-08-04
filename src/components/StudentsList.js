import styled from 'styled-components'
import Student from './Student'


const CardsList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 2em auto;
	padding: 1em;
	max-width: 800px;
	color: #570475;
	background-color: #eef;
    border-radius: 1em;
`

const StudentsList = ({ loading, filteredStudents, updateStudents }) => {
    if (loading) {
        return <CardsList><h1>Loading...</h1></CardsList>
    }

    if (filteredStudents.length === 0) {
        return <CardsList><h1>&#x1F50D; There are no results to display!</h1></CardsList>
    }

    return (
        <CardsList>
            {filteredStudents.map(student => <Student key={student.email} updateStudents={updateStudents} {...student} />)}
        </CardsList>
    )
}

export default StudentsList
