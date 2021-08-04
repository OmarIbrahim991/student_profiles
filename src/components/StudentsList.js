import styled from 'styled-components'
import Student from './Student'


const CardsList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto;
	padding: 1em;
	max-width: 800px;
	color: #570475;
	background-color: #eef;
`

const StudentsList = ({ loading, filteredStudents, updateStudents }) => {
    if (loading) {
        return <h1>Loading...</h1>
    }

    if (filteredStudents.length === 0) {
        return <h1>There are no results to display!</h1>
    }

    return (
        <CardsList>
            {filteredStudents.map(student => <Student key={student.email} updateStudents={updateStudents} {...student} />)}
        </CardsList>
    )
}

export default StudentsList
