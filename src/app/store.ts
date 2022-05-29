import { configureStore, createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import EmploymentReducer, { addEmploymentItem } from "../features/Employment/EmploymentSlice";
import EducationReducer, { addEducationItem } from "../features/Education/EducationSlice";
import CollapsableReducer, { setCollapsableId } from "../features/Collapsable/CollapsableSlice";
import SkillsReducer from "../features/Skills/SkillsSlice";
import SummaryReducer from "../features/Summary/SummarySlice";
import LinksReducer from "../features/Links/LinksSlice";
import LanguagesReducer from "../features/Languages/LanguagesSlice";



const collapsableMiddleware = createListenerMiddleware();
collapsableMiddleware.startListening({
    matcher: isAnyOf(addEducationItem, addEmploymentItem),
    effect(action, listenerApi) {
        // Opens collapsable item when new one is created and closes others
        listenerApi.dispatch(setCollapsableId(action.payload.id));
    }
});

export const store = configureStore({
    reducer: {
        employment: EmploymentReducer,
        education: EducationReducer,
        collapsable: CollapsableReducer,
        skills: SkillsReducer,
        summary: SummaryReducer,
        links: LinksReducer,
        languages: LanguagesReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(collapsableMiddleware.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;