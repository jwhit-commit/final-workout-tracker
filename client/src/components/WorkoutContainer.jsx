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