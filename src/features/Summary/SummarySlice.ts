import { nanoid } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { Descendant } from 'slate';
import { createSlice } from '@reduxjs/toolkit';




interface SummaryState {
    value: Descendant[];
};
const initialState: SummaryState = {
    value: []
};
const summarySlice = createSlice({
    name: "summary",
    initialState,
    reducers: {
        updateSummary(state: SummaryState, action: PayloadAction<Descendant[]>) {
            console.log(action);

            state.value = action.payload;
        }
    }
});

export const { updateSummary } = summarySlice.actions;
export default summarySlice.reducer;