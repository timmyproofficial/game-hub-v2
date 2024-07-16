import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import APIClient from '../services/api-client';
import genres from '../data/genres';
import { FetchResponse } from '../services/api-client';
import { Genre } from '../entities/Genre';

const apiClient = new APIClient<Genre>('/genres');

// const useGenres = () => useData<Genre>('/genres');
const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    // staleTime: 24 * 60 * 60 * 1000, // 24hrs
    staleTime: ms('24h'),
    initialData: genres,
  });
};

export default useGenres;
