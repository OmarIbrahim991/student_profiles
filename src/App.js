import { useEffect, useState } from 'react'
import StudentsList from './components/StudentsList'
import SearchInput from './components/SearchInput'


const App = () => {
	const [students, updateStudents] = useState([])
	const [filteredStudents, updateFilteredStudents] = useState([])
	const [loading, setLoading] = useState(true)
	const [searchNames, setSearchNames] = useState("")
	const [searchTags, setSearchTags] = useState("")

	useEffect(() => {
		fetch("https://api.hatchways.io/assessment/students")
		.then(resp => resp.json())
		.then((jsonResp) => {
			updateStudents(
				jsonResp.students.map((student) => {
					const { grades } = student
					return {
						...student,
						average: grades.reduce( (a,b) => parseInt(a)+parseInt(b) , 0 ) / grades.length,
						tags: []
					}
				})
			)
			setLoading(false)
		})
	}, [])

	useEffect(() => {
		if (searchNames.length === 0 && searchTags.length === 0) {
			updateFilteredStudents(students)
			return
		}

		let result = students
		if (searchNames.length > 0) {
			result = result.filter( ({ firstName, lastName }) => (firstName+ " " +lastName).toLowerCase().includes(searchNames) )
		}
		if (searchTags.length > 0) {
			result = result.filter( ({ tags }) => (tags.length > 0 && tags.some(tag => tag.includes(searchTags))) )
		}

		updateFilteredStudents(result)
	}, [students, searchNames, searchTags])

	return (
		<>
			<SearchInput search={searchNames} setSearch={setSearchNames} placeholderText="Search profiles by names" />
			<SearchInput search={searchTags} setSearch={setSearchTags} placeholderText="Search profiles by tags" />
			<StudentsList loading={loading} filteredStudents={filteredStudents} updateStudents={updateStudents} />
		</>
	)
}

export default App
