import { Descendant } from 'slate';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface EducationField {
    id: string;
    school: string;
    degree: string;
    startDate: string | null;
    endDate: string | null;
    city: string;
    description: Descendant[]
};
export interface EducationState {
    fields: EducationField[];
};

const initialState: EducationState = {
    fields: []
};




const educationSlice = createSlice({
    name: "education",
    initialState,
    reducers: {
        addEducationItem(state: EducationState, action: PayloadAction<EducationField>) {
            state.fields.push(action.payload);
        },
        updateEducationItem(
            state: EducationState,
            action: PayloadAction<{ id: string, data: Partial<EducationField> }>
        ) {
            const index = state.fields.findIndex(field => field.id === action.payload.id);
            state.fields[index] = { ...state.fields[index], ...action.payload.data };
        },
        removeEducationItemById(state: EducationState, action: PayloadAction<string>) {
            const index = state.fields.findIndex(field => field.id === action.payload);
            state.fields.splice(index, 1);
        }
    }
})

export const selectEmploymentFields = (state: EducationState) => state.fields;
export const {
    addEducationItem,
    updateEducationItem,
    removeEducationItemById
} = educationSlice.actions;
export default educationSlice.reducer;

