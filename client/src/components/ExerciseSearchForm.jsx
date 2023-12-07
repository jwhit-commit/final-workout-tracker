// export default WorkoutContainer;
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { fetchExercisesByBodyPart } from '../utils/workoutUtils';


const ExerciseSearchForm = () => {
  const [selectedBodyPart, setSelectedBodyPart] = useState('back');
  const [resultData, setResultData] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [sets, setSets] = useState([{ reps: '', weight: '', duration: '' }]);
  // const [addExerciseMutation] = useMutation(ADD_EXERCISE);

  const formatBodyPartOption = (value) => {
    return value.replace(/%20/g, ' '); // Replace all occurrences of %20 with a space
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const exerciseData = {
      exercise: selectedExercise,
      sets,
    };

    // try {
    //   const { data: { addExercise: addedExercise } } = await addExerciseMutation({
    //     variables: exerciseData,
    //   });

    //   addExercise(addedExercise);

    //   setSelectedExercise(null);
    //   setSets([{ reps: '', weight: '', duration: '' }]);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <div className="card bg-white card-rounded w-50">
      <label htmlFor="bodyPartSelect">Select Body Part:</label>
      <select
        id="bodyPartSelect"
        value={selectedBodyPart}
        onChange={(e) => setSelectedBodyPart(e.target.value)}
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
      <button id="fetchDataButton" onClick={handleButtonClick}>
        Add Exercise
      </button>
      <div id="resultContainer">
        {resultData && (
          <div>
            <h2>Exercises for {selectedBodyPart}:</h2>
            <ul>
              {resultData.map((exercise) => (
                <li key={exercise.id}>
                  {exercise.name}{' '}
                  <button
                    onClick={() => handleExerciseButtonClick(exercise)}
                  >
                    View Details
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {selectedExercise && (
          <div>
            <h3>Selected Exercise: {selectedExercise.name}</h3>
            <p>Muscle Group: {selectedExercise.target}</p>
            <p>Equipment Needed: {selectedExercise.equipment}</p>
            <form onSubmit={handleSubmit}>
              {sets.map((set, index) => (
                <div key={index}>
                  <label htmlFor={`repsInput-${index}`}>Reps:</label>
                  <input
                    type="number"
                    id={`repsInput-${index}`}
                    value={set.reps}
                    onChange={(e) =>
                      handleSetChange(index, 'reps', e.target.value)
                    }
                    required
                  />
                  <label htmlFor={`weightInput-${index}`}>Weight (lbs):</label>
                  <input
                    type="number"
                    id={`weightInput-${index}`}
                    value={set.weight}
                    onChange={(e) =>
                      handleSetChange(index, 'weight', e.target.value)
                    }
                    required
                  />
                  <label htmlFor={`durationInput-${index}`}>
                    Duration (minutes):
                  </label>
                  <input
                    type="number"
                    id={`durationInput-${index}`}
                    value={set.duration}
                    onChange={(e) =>
                      handleSetChange(index, 'duration', e.target.value)
                    }
                      required
                      />
                      <button type="button" onClick={() => handleRemoveSet(index)}>
                        Remove Set
                      </button>
                    </div>
                  ))}
                  <button type="button" onClick={handleAddSet}>
                    Add Set
                  </button>
                  <button type="submit" onClick={handleAddExercise}>Submit</button>
                </form>
              </div>
            )}
          </div>
        </div>
      );
    };
      // export default ExerciseSearchForm;

    const WorkoutContainer = () => {
      const [workoutData, setWorkoutData] = useState([]);
      const [addWorkoutMutation] = useMutation(ADD_WORKOUT);
    
      const handleAddExercise = async (exercise) => {
        try {
          // Extract the necessary exercise information from the GraphQL mutation response
          const { data: { addExercise: addedExercise } } = await addExerciseMutation({
            variables: { exercise: exercise._id }, // Adjust the variables as needed
          });
      
          setWorkoutData([...workoutData, addedExercise]);
        } catch (error) {
          console.error(error);
        }
      };
    
      const handleRemoveExercise = (index) => {
        const newWorkoutData = [...workoutData];
        newWorkoutData.splice(index, 1);
        setWorkoutData(newWorkoutData);
      };
    
      const handleSaveWorkout = async () => {
        try {
          const workoutDataInput = {
            exercises: workoutData.map(exercise => exercise._id),
          };
    
          const { data: { addWorkout: addedWorkout } } = await addWorkoutMutation({
            variables: workoutDataInput,
          });
    
          console.log('Added Workout:', addedWorkout);
    
          setWorkoutData([]);
        } catch (error) {
          console.error(error);
        }
      };
    
      return (
        <div>
          <ExerciseSearchForm addExercise={handleAddExercise} />
          <div>
            <h2>Your Workout:</h2>
            <ul>
              {workoutData.map((exerciseData, index) => (
                <li key={index}>
                  <h3>{exerciseData.exercise.name}</h3>
                  <p>Muscle Group: {exerciseData.exercise.target}</p>
                  <p>Equipment Needed: {exerciseData.exercise.equipment}</p>
                  <ul>
                    {exerciseData.sets.map((set, setIndex) => (
                      <li key={setIndex}>
                        Set {setIndex + 1}: Reps - {set.reps}, Weight - {set.weight} lbs, Duration - {set.duration} minutes
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => handleRemoveExercise(index)}>
                    Remove Exercise
                  </button>
                </li>
              ))}
            </ul>
            <button onClick={handleSaveWorkout}>
              Save Workout
            </button>
          </div>
        </div>
      );
    };
    
    export default WorkoutContainer;