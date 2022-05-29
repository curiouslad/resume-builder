import { createSlice, PayloadAction } from "@reduxjs/toolkit";



export interface LanguagesField {
    id: string;
    language: string;
    level: string;
};
interface MapSkillToText {
    [key: string]: string;
}

export const mapLanguageToText: MapSkillToText = {
    '1': "Novice",
    '2': "Beginner",
    '3': "Skillfull",
    '4': "Experienced",
    '5': "Expert",
    //     '1': "Novice",
    //     '2': "Beginner",
    //     '3': "Skillfull",
    //     '4': "Experienced",
    //     '5': "Expert",
}

interface LanguagesState {
    fields: LanguagesField[];
};
const initialState: LanguagesState = {
    fields: []
};
const languagesSlice = createSlice({
    name: "languages",
    initialState,
    reducers: {
        addLanguage(state: LanguagesState, action: PayloadAction<LanguagesField>) {
            state.fields.push(action.payload);
        },
        updateLanguage(
            state: LanguagesState,
            action: PayloadAction<{ id: string, data: Partial<LanguagesField> }>
        ) {
            const index = state.fields.findIndex(field => field.id === action.payload.id);
            state.fields[index] = { ...state.fields[index], ...action.payload.data };
        },
        removeLanguage(state: LanguagesState, action: PayloadAction<string>) {
            const index = state.fields.findIndex(field => field.id === action.payload);
            state.fields.splice(index, 1);
        }
    }
});




export const { addLanguage, updateLanguage, removeLanguage } = languagesSlice.actions;
export default languagesSlice.reducer;