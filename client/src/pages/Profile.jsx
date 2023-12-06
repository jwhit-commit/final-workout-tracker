import React from 'react'
import ExerciseSearchForm from '../components/ExerciseSearchForm'
import AddWorkout from '../components/AddWorkout';

function Profile() {
  return (
    <div>
      <h1 className="text-center text-3xl">Welcome to Profile</h1>
      <AddWorkout />
    </div>
  )
}

export default Profile;