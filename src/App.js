import { useEffect, useState } from "react"

const App = () => {
	const [students, updateStudents] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		fetch("https://api.hatchways.io/assessment/students")
		.then(resp => resp.json())
		.then(({ students }) => {
			updateStudents(students)
			setLoading(false)
		})
	}, [])

	return (
		<div>
			{
				loading ?
				<h1>Loading...</h1> :
				students.map(({ firstName, lastName, email, company, skill, grades, pic }) => (
					<div key={email} className="student-info">
						<img src={pic} alt={`${firstName} ${lastName}'s profile`} />
						<h2>{firstName + " " + lastName}</h2>
						<p>{`Email: ${email}`}</p>
						<p>{`Company: ${company}`}</p>
						<p>{`Skill: ${skill}`}</p>
						<p>
							{`Average: ${(grades.reduce((a,b) => parseInt(a) + parseInt(b), 0) / grades.length).toFixed(2)}`}
						</p>
					</div>
				))
			}
		</div>
	)
}

export default App
