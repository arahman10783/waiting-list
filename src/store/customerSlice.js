import { createSlice, createSelector } from "@reduxjs/toolkit";

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

const selectSelf = (state) => state.coustomerSlice
export const currentCustomer = createSelector(selectSelf, (state) => state.find(el => el.status === 'waiting'))
export const waitingCustomers = createSelector(selectSelf, (state) => state.filter(el => el.status === 'waiting'))
export const allCustomers = createSelector(selectSelf, (state) => state)
export const servedCustomers = createSelector(selectSelf, (state) => state.filter(el => el.status === 'served'))


export const { nextCustomer, newCustomer } = coustomerSlice.actions;
export default coustomerSlice.reducer;
