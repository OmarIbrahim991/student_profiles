import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Student from './components/Student'


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
		<CardsList>
			{loading ? <h1>Loading...</h1> : students.map( student => <Student key={student.email} {...student} /> )}
		</CardsList>
	)
}

export default App
