import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
    isHealth: true,
    pageNumber: 1,
    questions: [],
    showInfoScreen: false,
    infoScreenMessage: "There was an error",
    typeInfo: "error",
    offSet: 10,
};

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
        addQuestions(state, action) {
            state.questions.push(...action.payload);
        },
        setInfoScreen(state, action) {
            state.typeInfo = action.payload[0];
            state.infoScreenMessage = action.payload[1];
        },
        showInfoScreen(state) {
            state.showInfoScreen = true;
        },
        hideInfoScreen(state) {
            state.showInfoScreen = false;
            state.typeInfo = "error";
            state.infoScreenMessage = "There was an error";
        },
        changeOffSet(state) {
            state.offSet = state.offSet + 10;
        },
    },
});

const store = configureStore({ reducer: storeSlice.reducer });

export const storeActions = storeSlice.actions;

export default store;
