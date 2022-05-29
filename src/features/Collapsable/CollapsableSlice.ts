import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';



export interface CollapsableState {
    id: string;
}
const initialState: CollapsableState = {
    id: ""
};
const collapsableSlice = createSlice({
    name: "collapsable",
    initialState,
    reducers: {
        setCollapsableId(state: CollapsableState, action: PayloadAction<string>) {
            state.id = action.payload
        }
    }
});

// export const selectCollapsableId = 
export const { setCollapsableId } = collapsableSlice.actions;
export default collapsableSlice.reducer;