import { Descendant } from 'slate';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface EmploymentField {
    id: string;
    jobTitle: string;
    employer: string;
    startDate: string | null;
    endDate: string | null;
    city: string;
    description: Descendant[]
};
export interface EmploymentState {
    fields: EmploymentField[];
};

const initialState: EmploymentState = {
    fields: []
};




const employmentSlice = createSlice({
    name: "employment",
    initialState,
    reducers: {
        addEmploymentItem(state: EmploymentState, action: PayloadAction<EmploymentField>) {
            state.fields.push(action.payload);
        },
        updateEmploymentItem(
            state: EmploymentState,
            action: PayloadAction<{ id: string, data: Partial<EmploymentField> }>
        ) {
            const index = state.fields.findIndex(field => field.id === action.payload.id);
            state.fields[index] = { ...state.fields[index], ...action.payload.data };
        },
        removeEmploymentItemById(state: EmploymentState, action: PayloadAction<string>) {
            const index = state.fields.findIndex(field => field.id === action.payload);
            state.fields.splice(index, 1);
        }
    },

})

export const selectEmploymentFields = (state: EmploymentState) => state.fields;
export const {
    addEmploymentItem,
    updateEmploymentItem,
    removeEmploymentItemById
} = employmentSlice.actions;
export default employmentSlice.reducer;

