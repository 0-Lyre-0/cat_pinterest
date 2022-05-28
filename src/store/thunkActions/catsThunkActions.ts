import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import {CATS_IMG_URL} from "../../constants/apiUrls";
import {ICat} from "../../models/ICat";

export const fetchCats = createAsyncThunk(
  'cats/fetchCats',
  async (page: number) => {
    const response = await axiosApi.get<ICat[]>(CATS_IMG_URL + "?limit=24&page=" + page)
    const res = response.data
    res.map(item => {
        item.ui_id = Math.random();
        return item
    })
    return res
  }
)