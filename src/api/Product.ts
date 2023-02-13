import request from 'utils/request';
export const getProducts = async (keyword: number | string) => {
    const res = await request.get(`/list-product`, { params: keyword });
    return res?.data;
};
export const getProductsCateGories = async (limit: number | string) => {
    const res = await request.get(`/list-categories?per_page=${limit}`); // <== Here we use await keywords to get the result of the Promise, check internet if it's blurry for you
    return res?.data; // Maybe do some work on res.data to get the expected format
};
export const productsDetail = async (id: number) => {
    const bearer_token = `Bearer ${localStorage.getItem('token')}`;
    try {
        const config = {
            headers: {
                Authorization: bearer_token
            }
        };
        const res = await request.get(`/product-detail/${id}`, config); // <== Here we use await keywords to get the result of the Promise, check internet if it's blurry for you
        return res?.data; // Maybe do some work on res.data to get the expected format
    } catch (err: any) {
        // here display a message to the user or something else
        console.error(err.message);
    }
};
