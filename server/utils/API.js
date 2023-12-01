import axios from 'axios';

const getBodyPartList = () => {
  return axios.get('https://exercisedb.p.rapidapi.com/exercises/bodyPartList');
};

const getMuscleList = () => {
    return axios.get('https://exercisedb.p.rapidapi.com/exercises/targetList');
};

const getEquipList = () => {
    return axios.get('https://exercisedb.p.rapidapi.com/exercises/equipmentList');
};

const getExercises = () => {
    return axios.get('https://exercisedb.p.rapidapi.com/exercises');
};

const getExercisebyId = (id) => {
    return axios.get('https://exercisedb.p.rapidapi.com/exercises/exercise/' + id);
};

// Text search of exercise names
const getExercisesbyName = (query) => {
    return axios.get('https://exercisedb.p.rapidapi.com/exercises/name/' + query);
};

const getExercisesbyBodyPart = (bodypart) => {
    return axios.get('https://exercisedb.p.rapidapi.com/exercises/bodyPart/' + bodypart); 
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


const getExercisesbyMuscle = (muscle) => {
    return axios.get('https://exercisedb.p.rapidapi.com/exercises/target/' + muscle); 
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


const getExercisesbyEquip = (equip) => {
    return axios.get('https://exercisedb.p.rapidapi.com/exercises/equipment/' + equip); 
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