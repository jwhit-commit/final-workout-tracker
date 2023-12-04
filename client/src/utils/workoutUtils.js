import axios from 'axios';

export const fetchExercisesByBodyPart = async (bodyPart) => {
  const options = {
    method: 'GET',
    url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '2e845e8009mshc295949c74088fcp167a1djsn8494e03546dc', 
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch exercises by body part');
  }
};