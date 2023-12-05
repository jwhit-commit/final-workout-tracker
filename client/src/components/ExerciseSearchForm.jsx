// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { fetchExercisesByBodyPart } from '../utils/workoutUtils';

// const ExerciseSearchForm = () => {
//   const [selectedBodyPart, setSelectedBodyPart] = useState('back');
//   const [resultData, setResultData] = useState(null);
//   const [selectedExercise, setSelectedExercise] = useState(null);
//   const [exerciseDetails, setExerciseDetails] = useState(null);
//   const [sets, setSets] = useState([{ reps: '', weight: '', duration: '' }]);
//   // const [reps, setReps] = useState('');
//   // const [weight, setWeight] = useState('');
//   // const [duration, setDuration] = useState('');
// };

//   const handleButtonClick = async () => {
//     try {
//       const exercises = await fetchExercisesByBodyPart(selectedBodyPart);
//       setResultData(exercises);
//     } catch (error) {
//       console.error(error);
//       // Handle error
//     }
//   };

//   useEffect(() => {
//     setExerciseDetails(null);
//   }, [selectedExercise]);

//   const handleExerciseButtonClick = (exercise) => {
//     setSelectedExercise(exercise);
//   };

//   const handleSetChange = (index, field, value) => {
//     const newSets = [...sets];
//     newSets[index][field] = value;
//     setSets(newSets);
//   };

//   const handleAddSet = () => {
//     setSets([...sets, { reps: '', weight: '', duration: '' }]);
//   };

//   const handleRemoveSet = (index) => {
//     const newSets = [...sets];
//     newSets.splice(index, 1);
//     setSets(newSets);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // No need for API call, use selectedExercise and sets directly
//     setExerciseDetails({
//       ...selectedExercise,
//       sets,
//     });
//   };

//   return (
//     <div className="card bg-white card-rounded w-50">
//       <label htmlFor="bodyPartSelect">Select Body Part:</label>
//       <select
//         id="bodyPartSelect"
//         value={selectedBodyPart}
//         onChange={(e) => setSelectedBodyPart(e.target.value)}
//       >
//         <option value="back">Back</option>
//         <option value="cardio">Cardio</option>
//         <option value="chest">Chest</option>
//         <option value="lower%20arms">Lower Arms</option>
//         <option value="lower%20legs">Lower Legs</option>
//         <option value="neck">Neck</option>
//         <option value="shoulders">Shoulders</option>
//         <option value="upper%20arms">Upper Arms</option>
//         <option value="upper%20legs">Upper Legs</option>
//         <option value="waist">Waist</option>
//       </select>
//       <button id="fetchDataButton" onClick={handleButtonClick}>
//         Fetch Data
//       </button>
//       <div id="resultContainer">
//         {resultData && (
//           <div>
//             <h2>Exercises for {selectedBodyPart}:</h2>
//             <ul>
//               {resultData.map((exercise) => (
//                 <li key={exercise.id}>
//                   {exercise.name}{' '}
//                   <button
//                     onClick={() => handleExerciseButtonClick(exercise)}
//                   >
//                     View Details
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//         {selectedExercise && (
//           <div>
//             <h3>Selected Exercise: {selectedExercise.name}</h3>
//             <p>Muscle Group: {selectedExercise.target}</p>
//             <p>Equipment Needed: {selectedExercise.equipment}</p>
//             <form onSubmit={handleSubmit}>
//               {sets.map((set, index) => (
//                 <div key={index}>
//                   <label htmlFor={`repsInput-${index}`}>Reps:</label>
//                   <input
//                     type="number"
//                     id={`repsInput-${index}`}
//                     value={set.reps}
//                     onChange={(e) =>
//                       handleSetChange(index, 'reps', e.target.value)
//                     }
//                     required
//                   />
//                   <label htmlFor={`weightInput-${index}`}>Weight (lbs):</label>
//                   <input
//                     type="number"
//                     id={`weightInput-${index}`}
//                     value={set.weight}
//                     onChange={(e) =>
//                       handleSetChange(index, 'weight', e.target.value)
//                     }
//                     required
//                   />
//                   <label htmlFor={`durationInput-${index}`}>
//                     Duration (minutes):
//                   </label>
//                   <input
//                     type="number"
//                     id={`durationInput-${index}`}
//                     value={set.duration}
//                     onChange={(e) =>
//                       handleSetChange(index, 'duration', e.target.value)
//                     }
//                     required
//                   />
//                   <button type="button" onClick={() => handleRemoveSet(index)}>
//                     Remove Set
//                   </button>
//                 </div>
//               ))}
//               <button type="button" onClick={handleAddSet}>
//                 Add Set
//               </button>
//               <button type="submit">Submit</button>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ExerciseSearchForm;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchExercisesByBodyPart } from '../utils/workoutUtils';

const ExerciseSearchForm = ({ addExercise }) => {
  const [selectedBodyPart, setSelectedBodyPart] = useState('back');
  const [resultData, setResultData] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [exerciseDetails, setExerciseDetails] = useState(null);
  const [sets, setSets] = useState([{ reps: '', weight: '', duration: '' }]);

  const handleButtonClick = async () => {
    try {
      const exercises = await fetchExercisesByBodyPart(selectedBodyPart);
      setResultData(exercises);
    } catch (error) {
      console.error(error);
      // Handle error
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // No need for API call, use selectedExercise and sets directly
    const exerciseData = {
      exercise: selectedExercise,
      sets,
    };

    // Call the addExercise prop with the exercise data
    addExercise(exerciseData);

    // Optionally, you can reset the form or clear state here
    setSelectedExercise(null);
    setSets([{ reps: '', weight: '', duration: '' }]);
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
        Fetch Data
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
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

const WorkoutContainer = () => {
  const [workoutData, setWorkoutData] = useState([]);

  const handleAddExercise = (exercise) => {
    setWorkoutData([...workoutData, exercise]);
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
          </li>
        ))}
      </ul>
    </div>
  </div>
);
};

export default WorkoutContainer;