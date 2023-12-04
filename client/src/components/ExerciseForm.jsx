import React, { useState } from 'react';
import axios from 'axios';
import { fetchExercisesByBodyPart } from '../utils/workoutUtils';

const ExerciseForm = () => {
  const [selectedBodyPart, setSelectedBodyPart] = useState('back');
  const [resultData, setResultData] = useState(null);

  const handleButtonClick = async () => {
    try {
      // ... (same as previous code)
      const exercises = await fetchExercisesByBodyPart(selectedBodyPart);
      setResultData(exercises);
    } catch (error) {
      console.error(error);
      // Handle error
    }
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
            <div id="resultContainer"></div>
          </div>
        );
      };

export default ExerciseForm;