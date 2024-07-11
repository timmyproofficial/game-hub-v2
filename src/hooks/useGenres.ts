import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import genres from '../data/genres';
import { FetchResponse } from '../services/api-client';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>('/genres');
const useGenres = () => {
  const fetchGenres = () =>
    apiClient.get<FetchResponse<Genre>>('/genres').then((res) => res.data);

  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: fetchGenres,
    staleTime: 24 * 60 * 60 * 1000, // 24hrs
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;
