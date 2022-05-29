import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';



export interface SkillsField {
    id: string;
    name: string;
    level: string;
};
interface SkillsState {
    fields: SkillsField[];
};

const initialState: SkillsState = {
    fields: []
};

const skillsSlice = createSlice({
    name: "skills",
    initialState,
    reducers: {
        addSkill(state: SkillsState, action: PayloadAction<SkillsField>) {
            state.fields.push(action.payload);
        },
        updateSkill(
            state: SkillsState,
            action: PayloadAction<{ id: string, data: Partial<SkillsField> }>
        ) {
            const index = state.fields.findIndex(field => field.id === action.payload.id);
            state.fields[index] = { ...state.fields[index], ...action.payload.data };
        },
        removeSkill(state: SkillsState, action: PayloadAction<string>) {
            const index = state.fields.findIndex(field => field.id === action.payload);
            state.fields.splice(index, 1);
        }
    }
});


export const { addSkill, updateSkill, removeSkill } = skillsSlice.actions;
export default skillsSlice.reducer;