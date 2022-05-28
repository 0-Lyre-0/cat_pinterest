import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {fetchCats} from "../thunkActions/catsThunkActions";
import {ICat} from "../../models/ICat";

interface CatsState {
  cats: ICat[]
  fetchLoading: Boolean
}

const initialState: CatsState = {
  cats: [],
  fetchLoading: false,
}

const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    clearCatsArr : (state) => {
      state.cats = []
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCats.pending, (state) => {
      state.fetchLoading = true
    })
    builder.addCase(fetchCats.fulfilled, (state, action: PayloadAction<ICat[]>) => {
      state.fetchLoading = false
      state.cats = action.payload
    })
    builder.addCase(fetchCats.rejected, (state) => {
      state.fetchLoading = false
    })
  }
})

export const {clearCatsArr} = catsSlice.actions

export default catsSlice
