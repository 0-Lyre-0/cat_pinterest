import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import {CATS_IMG_URL} from "../../constants/apiUrls";

export const fetchCats = createAsyncThunk(
  'cats/fetchCats',
  async () => {
    const response = await axiosApi.get(CATS_IMG_URL + "?limit=30")
    return response.data
  }
)