import axios from 'axios';

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2e845e8009mshc295949c74088fcp167a1djsn8494e03546dc',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

const getBodyPartList = async () => {
    options.url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    };
};

const getMuscleList = async () => {
    options.url = 'https://exercisedb.p.rapidapi.com/exercises/targetList';

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    };
};

const getEquipList = async () => {
    options.url = 'https://exercisedb.p.rapidapi.com/exercises/equipmentList';

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    };
};

const getExercises = async () => {
    options.url = 'https://exercisedb.p.rapidapi.com/exercises';

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    };
};

const getExercisebyId = async (id) => {
    options.url = ('https://exercisedb.p.rapidapi.com/exercises/exercise/' + id);

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    };
};

// Text search of exercise names
const getExercisesbyName = async (query) => {
    options.url = ('https://exercisedb.p.rapidapi.com/exercises/name/' + query);

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    };
};

const getExercisesbyBodyPart = async (bodypart) => {
    options.url = ('https://exercisedb.p.rapidapi.com/exercises/bodyPart/' + bodypart);
    options.params = {limit: 20};
    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    };
};
// valid bodyparts: 
// // "back"
// // "cardio"
// // "chest"
// // "lower%20arms"
// // "lower%20legs"
// // "neck"
// // "shoulders"
// // "upper%20arms"
// // "upper%20legs"
// // "waist"


const getExercisesbyMuscle = async (muscle) => {
    options.url = ('https://exercisedb.p.rapidapi.com/exercises/target/' + muscle);

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    };
};
// valid muscles:
// // "abductors"
// // "abs"
// // "adductors"
// // "biceps"
// // "calves"
// // "cardiovascular%20system"
// // "delts"
// // "forearms"
// // "glutes"
// // "hamstrings"
// // "lats"
// // "levator%20scapulae"
// // "pectorals"
// // "quads"
// // "serratus%20anterior"
// // "spine"
// // "traps"
// // "triceps"
// // "upper%20back"


const getExercisesbyEquip = async (equip) => {
    options.url = ('https://exercisedb.p.rapidapi.com/exercises/equipment/' + equip);

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    };
};
// valid equipment:
// // "assisted"
// // "band"
// // "barbell"
// // "body%20weight"
// // "bosu%20ball"
// // "cable"
// // "dumbbell"
// // "elliptical%20machine"
// // "ez%20barbell"
// // "hammer"
// // "kettlebell"
// // "leverage%20machine"
// // "medicine%20ball"
// // "olympic%20barbell"
// // "resistance%20band"
// // "roller"
// // "rope"
// // "skierg%20machine"
// // "sled%20machine"
// // "smith%20machine"
// // "stability%20ball"
// // "stationary%20bike"
// // "stepmill%20machine"
// // "tire"
// // "trap%20bar"
// // "upper%20body%20ergometer"
// // "weighted"
// // "wheel%20roller"

export default {
    getBodyPartList,
    getMuscleList,
    getEquipList,
    getExercises,
    getExercisebyId,
    getExercisesbyName,
    getExercisesbyBodyPart,
    getExercisesbyMuscle,
    getExercisesbyEquip,
  };