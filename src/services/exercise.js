import axios from "axios";
const API_KEY = process.env.API_KEY;
console.log(API_KEY)

export const fetchExercises = async (query) => {
  const options = {
    method: 'GET',
    url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
    params: { name: query },
    headers: {
      'X-RapidAPI-Key': 'f6e85a3537msh16a1b454499b4afp16528ejsn68b2051e2547',
      'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
    }
  };

  return await axios.request(options).then(function (response) {
    console.log(response.data);
    return response.data
  }).catch(function (error) {
    throw new Error(error);
  });
}

// 'f6e85a3537msh16a1b454499b4afp16528ejsn68b2051e2547'