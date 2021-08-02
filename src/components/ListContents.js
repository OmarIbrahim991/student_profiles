import Student from './Student'


const ListContents = ({ loading, filteredStudents }) => {
    if (loading) {
        return <h1>Loading...</h1>
    }

    if (filteredStudents.length === 0) {
        return <h1>There are no results to display!</h1>
    }

    return (
        <>
            {filteredStudents.map(student => <Student key={student.email} {...student} />)}
        </>
    )
}

export default ListContents
