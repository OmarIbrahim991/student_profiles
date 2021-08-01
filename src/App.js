import { useEffect, useState } from 'react'
import styled from 'styled-components'
import ListContents from './components/ListContents'
import SearchInput from './components/SearchInput'


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

const App = () => {
	const [students, updateStudents] = useState([])
	const [loading, setLoading] = useState(true)
	const [search, setSearch] = useState("")
	const filteredStudents = search.length === 0 ? students :
		students.filter(({ firstName, lastName }) => (
			(firstName+ " " +lastName).toLowerCase().includes(search))
		)

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
					}
				})
			)
			setLoading(false)
		})
	}, [])

	return (
		<>
			<SearchInput search={search} setSearch={setSearch} />
			<CardsList>
				<ListContents loading={loading} filteredStudents={filteredStudents} />
			</CardsList>
		</>
	)
}

export default App
