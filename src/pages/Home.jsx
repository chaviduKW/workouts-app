import { useEffect, useState } from "react"
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
    const [workouts, setWorkouts] = useState(null)
    useEffect(() => {
        const fetchWorkouts = async () => {
            console.log("something")
            // const response = await fetch('/api/workouts/');
            const response = await fetch('http://localhost:4000/api/workouts/');
            console.log(response)
            const json = await response.json()

            if (response.ok) {
                console.log(json)
                setWorkouts(json)
            }
        }

        fetchWorkouts()
    }, [])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm/>
        </div>
    )
}

export default Home