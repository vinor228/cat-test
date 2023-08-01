import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


 const getCatsByBreed  = createAsyncThunk( 'cat/getCats',
    async (_, thunkApi) => {
        try {
            const { data } = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=20&has_breeds=true`, {headers: {
                    'x-api-key' : process.env.REACT_APP_CAT_API_URL}});
            console.log(data);
            return data;
        } catch (error) {
             thunkApi.rejectWithValue(error);
        }
    })

export default {
    getCatsByBreed
}