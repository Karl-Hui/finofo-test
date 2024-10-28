import useApi from './useApi';
import { Fruit } from '../models/Fruit';
import { FRUITS_ENDPOINT } from '../config';

const useFetchFruits = () => {
  const { data, loading, error } = useApi<Fruit[]>('/api');

  return {
    fruits: data || [],
    loading,
    error,
  };
};

export default useFetchFruits;
