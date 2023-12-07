import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import {
  CREATE_WORKOUT_MUTATION,
  ADD_EXERCISE_TO_WORKOUT_MUTATION,
} from '../utils/mutations';
import { fetchExercisesByBodyPart } from '../utils/workoutUtils';

export default function AddWorkout() {
  const [workoutName, setWorkoutName] = useState('');
  const [resultData, setResultData] = useState(null);
  const [exerciseName, setExerciseName] = useState('');
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [selectedBodyPart, setSelectedBodyPart] = useState('');
  const [sets, setSets] = useState([{ reps: '', weight: '', duration: '' }]);
  const [createdWorkout, setCreatedWorkout] = useState(null);

  const [createWorkout] = useMutation(CREATE_WORKOUT_MUTATION);
  const [addExerciseToWorkout] = useMutation(ADD_EXERCISE_TO_WORKOUT_MUTATION);

  const formatBodyPartForDisplay = (bodyPart) => {
    return bodyPart.replace(/%20/g, ' '); // Replace %20 with a space
  };

  const handleCreateWorkout = async () => {
    try {
      const { data } = await createWorkout({
        variables: { name: workoutName },
      });
      setCreatedWorkout(data.createWorkout);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddExerciseToWorkout = async (e) => {
    e.preventDefault();
    try {
      if (!createdWorkout || !selectedExercise) {
        console.log('no workout created or no exercise selected');
        return;
      }
      const { data } = await addExerciseToWorkout({
        variables: {
          workoutId: createdWorkout._id,
          exercise: {
            name: selectedExercise.name,
            sets,
          },
        },
      });
      setCreatedWorkout(data.addExerciseToWorkout);
      console.log('added exercise to workout', data);
    } catch (error) {
      console.log('Error adding to workout' + error);
    }
  };

  const handleButtonClick = async () => {
    try {
      const exercises = await fetchExercisesByBodyPart(selectedBodyPart);
      setResultData(exercises);
    } catch (error) {
      console.error(error);
    }
  };

  const handleExerciseButtonClick = (exercise) => {
    setSelectedExercise(exercise);
  };

  const handleSetChange = (index, field, value) => {
    const newSets = [...sets];
    newSets[index][field] = parseInt(value);
    setSets(newSets);
  };

  const handleAddSet = () => {
    setSets([...sets, { reps: '', weight: '', duration: '' }]);
  };

  const handleRemoveSet = (index) => {
    const newSets = [...sets];
    newSets.splice(index, 1);
    setSets(newSets);
  };

  return (
    <div className='text-white'>
      {/* Create Workout Section */}
      <h1 className='px-3'>Create Workout </h1>
      <div className='px-3'>
        <label htmlFor='workoutNameInput'>Workout Name:</label>
        <input
          className='form-control'
          type='text'
          id='workoutNameInput'
          value={workoutName}
          onChange={(e) => setWorkoutName(e.target.value)}
        />
        <button onClick={handleCreateWorkout} className='btn btn-primary'>
          Create
        </button>
      </div>

      {/* Add Exercise Section */}
      {createdWorkout && (
        <div className='px-3'>
          <h2>Add Exercise to workout</h2>
          <label htmlFor='bodyPartSelect'>Select Body Part:</label>
          <select
            id='bodyPartSelect'
            value={selectedBodyPart}
            onChange={(e) => setSelectedBodyPart(e.target.value)}
            className='form-control mb-3'
          >
            <option value='back'>Back</option>
            <option value='cardio'>Cardio</option>
            <option value='chest'>Chest</option>
            <option value='lower%20arms'>Lower Arms</option>
            <option value='lower%20legs'>Lower Legs</option>
            <option value='neck'>Neck</option>
            <option value='shoulders'>Shoulders</option>
            <option value='upper%20arms'>Upper Arms</option>
            <option value='upper%20legs'>Upper Legs</option>
            <option value='waist'>Waist</option>
          </select>
          <button
            id='fetchDataButton'
            className='btn btn-primary'
            onClick={handleButtonClick}
          >
            Choose an Exercise
          </button>

          {resultData && (
            <div>
              <h2>Exercises for {formatBodyPartForDisplay(selectedBodyPart)}:</h2>
              <ul>
                {resultData.map((exercise) => (
                  <li key={exercise.id}>
                    {exercise.name}{' '}
                    <button
                      onClick={() => handleExerciseButtonClick(exercise)}
                      className='btn btn-sm'
                    >
                      View Details
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {selectedExercise && (
            <div className='px-3'>
              {/* Selected Exercise Information */}
              <h3>Selected Exercise: {selectedExercise.name}</h3>
              <p>Muscle Group: {selectedExercise.target}</p>
              <p>Equipment Needed: {selectedExercise.equipment}</p>

              {/* Sets Information */}
              <form onSubmit={handleAddExerciseToWorkout}>
                {sets.map((set, index) => (
                  <div key={index}>
                    <div>
                      <label htmlFor={`repsInput-${index}`}>Reps:</label>
                      <input
                        type='number'
                        id={`repsInput-${index}`}
                        value={set.reps}
                        onChange={(e) => handleSetChange(index, 'reps', e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor={`weightInput-${index}`}>Weight:</label>
                      <input
                        type='number'
                        id={`weightInput-${index}`}
                        value={set.weight}
                        onChange={(e) => handleSetChange(index, 'weight', e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor={`durationInput-${index}`}>Duration:</label>
                      <input
                        type='number'
                        id={`durationInput-${index}`}
                        value={set.duration}
                        onChange={(e) => handleSetChange(index, 'duration', e.target.value)}
                        required
                      />
                    </div>

                    <button type='button' onClick={() => handleRemoveSet(index)}>
                      Remove Set
                    </button>

                    <button type='button' onClick={handleAddSet}>
                      Add Set
                    </button>
                  </div>
                ))}

                {/* Submit Button for Adding Exercise to Workout */}
                <button type='submit'>Add Exercise to Workout</button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
=======
import React, { useState, useEffect } from 'react'
import { useMutation, useQuery} from '@apollo/client';
import { CREATE_WORKOUT_MUTATION, ADD_EXERCISE_TO_WORKOUT_MUTATION } from '../utils/mutations';
import { fetchExercisesByBodyPart } from '../utils/workoutUtils';



export default function AddWorkout() {
    const [workoutName, setWorkoutName] = useState('');
    const [resultData, setResultData] = useState(null);
    const [exerciseName, setExerciseName] = useState('');
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [selectedBodyPart, setSelectedBodyPart] = useState('');
    const [sets, setSets] = useState([{ reps: '', weight: '', duration: '' }]);
    const [createdWorkout, setCreatedWorkout] = useState(null);
    
    const [createWorkout] = useMutation(CREATE_WORKOUT_MUTATION);
    const [addExerciseToWorkout] = useMutation(ADD_EXERCISE_TO_WORKOUT_MUTATION);

    const handleCreateWorkout = async () => {
        try {
            const { data } = await createWorkout({
                variables: { name: workoutName }
            })
            setCreatedWorkout(data.createWorkout);
            console.log(data);
        } catch(error) {
            console.log(error);
        }
    }

    const handleAddExerciseToWorkout = async (e) => {
        try{
            if(!created || !selectedExercise){
                console.log('no workout created or no exercise selected');
                return;
            }
            const { data } = await addExerciseToWorkout({
                variables: {
                    workoutId: createdWorkout._id,
                    exercise: {
                        name: selectedExercise.name,
                        sets
                    }
                }
            });
            setCreatedWorkout(data.addExerciseToWorkout);
            console.log("added exercise to workout", data);
        } catch(error) {
            console.log("Error adding to workout" + error);
        }
    } 

    const handleButtonClick = async () => {
        try {
          const exercises = await fetchExercisesByBodyPart(selectedBodyPart);
          setResultData(exercises);
        } catch (error) {
          console.error(error);
        }
      };

      const handleExerciseButtonClick = (exercise) => {
        setSelectedExercise(exercise);
      };

      const handleSetChange = (index, field, value) => {
        const newSets = [...sets];
        newSets[index][field] = value;
        setSets(newSets);
      };
    
      const handleAddSet = () => {
        setSets([...sets, { reps: '', weight: '', duration: '' }]);
      };

      
    const handleRemoveSet = (index) => {
        const newSets = [...sets];
        newSets.splice(index, 1);
        setSets(newSets);
    };


    return (
        <div>
            {/* create workout section */}
            <h1 className='px-3'>Create Workout </h1>
            <div className='px-3'>
                <label htmlFor="workoutNameInput">Workout Name:</label>
                <input className='form-control' type="text" id='workoutNameInput' value={workoutName} onChange={(e) => setWorkoutName(e.target.value)}/>
                <button onClick={handleCreateWorkout} className='btn btn-primary'>Create</button>
            </div>
            {/* add exercise section */}
            { createdWorkout && (
                <div className='px-3'>
                    <h2>Add Exercise to workout</h2>
                    <label htmlFor="bodyPartSelect">Select Body Part:</label>
                    <select
                        id="bodyPartSelect"
                        value={selectedBodyPart}
                        onChange={(e) => setSelectedBodyPart(e.target.value)}
                        className='form-control mb-3'
                    >
                        <option value="back">Back</option>
                        <option value="cardio">Cardio</option>
                        <option value="chest">Chest</option>
                        <option value="lower%20arms">Lower Arms</option>
                        <option value="lower%20legs">Lower Legs</option>
                        <option value="neck">Neck</option>
                        <option value="shoulders">Shoulders</option>
                        <option value="upper%20arms">Upper Arms</option>
                        <option value="upper%20legs">Upper Legs</option>
                        <option value="waist">Waist</option>
                    </select>
                    <button id="fetchDataButton" className='btn btn-primary' onClick={handleButtonClick}>
                        Choose an Exercise
                    </button>
                    {resultData && (
                    <div>
                        <h2>Exercises for {selectedBodyPart}:</h2>
                        <ul>
                        {resultData.map((exercise) => (
                            <li key={exercise.id}>
                            {exercise.name}{' '}
                            <button
                                onClick={() => handleExerciseButtonClick(exercise)}
                                className='btn btn-sm'
                            >
                                View Details
                            </button>
                            </li>
                        ))}
                        </ul>
                    </div>
                    )}
                {selectedExercise && (
                    <div className='px-3'>
                    <h3>Selected Exercise: {selectedExercise.name}</h3>
                    <p>Muscle Group: {selectedExercise.target}</p>
                    <p>Equipment Needed: {selectedExercise.equipment}</p>
                    <form onSubmit={handleAddExerciseToWorkout}>
                        {sets.map((set, index) => (
                            <div key={index}>
                                <label htmlFor={`repsInput-${index}`}>Reps:</label>
                                <input type="number" id={`repsInput-${index}`} value={set.reps} onChange={(e) => handleSetChange(index, 'reps', e.target.value)} required/>
                                <label htmlFor={`weightInput-${index}`}>Weight:</label>
                                <input type="number" id={`weightInput-${index}`} value={set.weight} onChange={(e) => handleSetChange(index, 'weight', e.target.value)} required/>
                                <label htmlFor={`durationInput-${index}`}>Duration:</label>
                                <input type="number" id={`durationInput-${index}`} value={set.duration} onChange={(e) => handleSetChange(index, 'duration', e.target.value)} required/>
                                <button type='button' onClick={() => handleRemoveSet(index)}>
                                    Remove Set
                                </button>
                                <button type='button' onClick={handleAddSet}>
                                    Add Set
                                </button>
                                <button type='submit'>
                                    Add Exercise to Workout
                                </button>
                            </div>
                        ))}
                    </form>
                    
                    </div>
                )}
                </div>
            )}
        </div>
    )
}
