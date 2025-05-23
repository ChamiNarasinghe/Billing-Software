import axios from "axios";

const BASE_URL = 'http://localhost:8080/api/v1.0/categories';

export const addCategory = async (category) => {
   return await axios.post(BASE_URL, category);
}

export const deleteCategory = async (categoryId) => {
   return await axios.delete(`${BASE_URL}/${categoryId}`);
}

export const fetchCategories = async () => {
   return await axios.get(BASE_URL);
}
