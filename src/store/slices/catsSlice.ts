import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {fetchCats} from "../thunkActions/catsThunkActions";
import {ICat} from "../../models/ICat";
import {$LocalStorage} from "../../utils/LocalStorage";

interface CatsState {
  cats: ICat[]
  favCats: ICat[]
  fetchLoading: Boolean
}

const initialState: CatsState = {
  cats: [],
  favCats: [],
  fetchLoading: false,
}

const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    clearCatsArr: (state) => {
      state.cats = []
    },
    restoreFavCat: (state) => {
      state.favCats = $LocalStorage.getFavCats();
    },
    toggleLikedCat: (state, action: PayloadAction<ICat>) => {
      let checkedCatsFavArr = state.favCats.filter(favCat => favCat.id !== action.payload.id);

      if (checkedCatsFavArr.length === state.favCats.length) {
        state.favCats.push(action.payload)
      } else {
        state.favCats = checkedCatsFavArr
      }
      $LocalStorage.saveFavCats(state.favCats)
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

export const {clearCatsArr, toggleLikedCat, restoreFavCat} = catsSlice.actions

export default catsSlice
