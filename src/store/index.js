import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { isHealth: true, pageNumber: 1 };

const storeSlice = createSlice({
    name: "storeSlice",
    initialState,
    reducers: {
        healthStatus(state, action) {
            state.isHealth = action.payload;
        },
        nextPage(state) {
            state.pageNumber++;
        },
        previousPage(state) {
            state.pageNumber--;
        },
    },
});

const store = configureStore({ reducer: storeSlice.reducer });

export const storeActions = storeSlice.actions;

export default store;
