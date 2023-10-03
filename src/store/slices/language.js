import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    current_lang: "en",
    available_lang: ['en', 'ar', 'fr'],
    default_lang: 'ar'
}

const language = createSlice({
    name: "language",
    initialState: INITIAL_STATE,
    reducers: {
        changeCurrentLang: (state, action) => {
            state.current_lang = action.payload
        },
        addNewLang: (state, action) => {
            state.available_lang = [...state.available_lang, action.payload]
        }
    }
})

export const { changeCurrentLang, addNewLang  } = language.actions;

export default language.reducer;
