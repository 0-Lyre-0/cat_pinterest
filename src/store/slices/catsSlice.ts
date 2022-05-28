import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CatsState {
  value: number
}

const initialState: CatsState = {
  value: 0,
}

const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, { payload }: PayloadAction<number>) => {
      state.value += payload
    },
  },
})

export const { increment, decrement, incrementByAmount } =
  catsSlice.actions

export default catsSlice
