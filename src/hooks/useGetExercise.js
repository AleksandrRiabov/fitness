import  { useEffect, useState } from 'react';
import { fetchExercises } from '../services/exercise';

const useGetExercise = (query) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ isError: false, message: "d" });
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    if (query) {
      getExercise(query);
    }
  }, [query]);

  async function getExercise(query) {
    try {
      setLoading(true);
      const data = await fetchExercises(query);
      setExercises(data);
      setLoading(false);
    } catch (err) {
      setError({ isError: true, message: err.message });
      console.log(err);
      setLoading(false);
    }
  }

  return { loading, error, exercises }
}

export default useGetExercise;