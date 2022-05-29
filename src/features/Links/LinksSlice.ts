import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';



export interface LinkField {
    id: string;
    name: string;
    link: string;
}

interface LinkState {
    fields: LinkField[]
};

const initialState: LinkState = {
    fields: []
};
const linksSlice = createSlice({
    name: "links",
    initialState,
    reducers: {
        addLink(state: LinkState, action: PayloadAction<LinkField>) {
            state.fields.push(action.payload);
        },
        updateLink(
            state: LinkState,
            action: PayloadAction<{ id: string, data: Partial<LinkField> }>
        ) {
            const index = state.fields.findIndex(field => field.id === action.payload.id);
            state.fields[index] = { ...state.fields[index], ...action.payload.data }
        },
        removeLink() { }
    }
});


export const { addLink, updateLink, removeLink } = linksSlice.actions;
export default linksSlice.reducer;