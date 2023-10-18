import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", number: 1, status: "waiting" },
];

export const coustomerSlice = createSlice({
  name: "coustmer",
  initialState,
  reducers: {
    newCustomer: (state) => {
      state.push({
        id: new Date().toJSON(),
        number: state.length + 1,
        status: "waiting",
      });
    },
    nextCustomer: (state, action) => {
      const updatedIndex = state.findIndex((el) => el.id === action.payload.id);
      state[updatedIndex] = {
        ...state[updatedIndex],
        status: action.payload.status
      }
  },
}});

export const { nextCustomer, newCustomer } = coustomerSlice.actions;
export default coustomerSlice.reducer;
