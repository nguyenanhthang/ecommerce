import { useQuery } from '@tanstack/react-query';
import { getProducts } from 'api/Product';
import { productsDetail } from '../api/Product';

export const useProduct = () => {
    return useQuery({
        queryKey: ['getProducts'],
        queryFn: () => getProducts()
    });
};
export const useDetail = (id: number | string) => {
    return useQuery({
        queryKey: ['getProductsDetail', id],
        queryFn: () => productsDetail(id as number)
    });
}