import React from 'react'
import ExerciseSearchForm from '../components/ExerciseSearchForm'
import AddWorkout from '../components/AddWorkout';
import UserWorkouts from '../components/UserWorkouts';

function Profile() {
  return (
    <div>
      <h1 className="text-center text-3xl">Welcome to Profile</h1>
      <AddWorkout />
      {/* <UserWorkouts /> */}
    </div>
  )
}

export default Profile;