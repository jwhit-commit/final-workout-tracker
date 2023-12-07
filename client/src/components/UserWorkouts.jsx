import React from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_WORKOUTS } from '../utils/queries';
import Auth from '../utils/auth';
export default function UserWorkouts() {

console.log(Auth.loggedIn());
const {loading, error, data} = useQuery(QUERY_WORKOUTS);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error! {error.message}</div>;
    const UserWorkouts = data.workouts;
  return (
    <div>
        <h1 className="text-center text-3xl">Welcome to UserWorkouts</h1>
        {UserWorkouts.map((workout) => (
            <div key={workout._id}>
                <h2>{workout.name}</h2>
          </div>
        ))}
    </div>
  )
}
