import Student from './Student'


const StudentsList = ({ loading, filteredStudents, updateStudents }) => {
    if (loading) {
        return <h1>Loading...</h1>
    }

    if (filteredStudents.length === 0) {
        return <h1>There are no results to display!</h1>
    }

    return (
        <>
            {filteredStudents.map(student => <Student key={student.email} updateStudents={updateStudents} {...student} />)}
        </>
    )
}

export default StudentsList
