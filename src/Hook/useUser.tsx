import { useQuery } from "@tanstack/react-query";
import { getUser } from '../api/auth';

export const useUser = () => {
    return useQuery({
        queryKey: ['getUsers'],
        queryFn: getUser
    });
};
