import { configureStore, createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import CollapsableReducer, { setCollapsableId } from "../features/Collapsable/CollapsableSlice";
import EditorFormReducer, { addFormItem } from "../features/EditorForm/EditorFormSlice";


const collapsableMiddleware = createListenerMiddleware();
collapsableMiddleware.startListening({
    matcher: isAnyOf(addFormItem),
    effect(action, listenerApi) {
        // Opens collapsable item when new one is created and closes others
        listenerApi.dispatch(setCollapsableId(action.payload.data.id));
    }
});

export const store = configureStore({
    reducer: {
        collapsable: CollapsableReducer,
        editorForm: EditorFormReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(collapsableMiddleware.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;