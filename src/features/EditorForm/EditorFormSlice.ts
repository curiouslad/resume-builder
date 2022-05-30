import { SummaryField } from './../../types/FormFields/SummaryField';
import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { PersonalDetailsField } from '../../types/FormFields/PersonalDetailsField';
import { EmploymentField } from '../../types/FormFields/EmploymentField';
import { EducationField } from '../../types/FormFields/EducationField';
import { SkillField } from '../../types/FormFields/SkillField';
import { LinkField } from '../../types/FormFields/LinkField';
import { LanguageField } from '../../types/FormFields/LanguageField';





interface EditorFormState {
    personalDetails: {
        fields: PersonalDetailsField[]
    },
    summary: {
        fields: SummaryField[]
    },
    employment: {
        fields: EmploymentField[]
    },
    education: {
        fields: EducationField[]
    },
    skills: {
        fields: SkillField[]
    },
    links: {
        fields: LinkField[]
    },
    languages: {
        fields: LanguageField[]
    }
};

const initialState: EditorFormState = {
    personalDetails: {
        fields: [
            {
                id: nanoid(),
                name: "wantedJobTitle",
                label: "Wanted Job Title",
                value: ""
            },
            {
                id: nanoid(),
                name: "firstName",
                label: "First Name",
                value: ""
            },
            {
                id: nanoid(),
                name: "lastName",
                label: "Last Name",
                value: ""
            },
            {
                id: nanoid(),
                name: "email",
                label: "Email",
                value: ""
            },
            {
                id: nanoid(),
                name: "phone",
                label: "Phone",
                value: ""
            },
            {
                id: nanoid(),
                name: "country",
                label: "Country",
                value: ""
            }
        ]
    },
    summary: {
        fields: [{ value: [], id: "summary-input" }]
    },
    employment: {
        fields: []
    },
    education: {
        fields: []
    },
    skills: {
        fields: []
    },
    links: {
        fields: []
    },
    languages: {
        fields: []
    }
};

type EditorFormItemType = "employment" | "education" | "skills" | "links" | "languages" | "summary";
interface BaseEditorForm {
    type: EditorFormItemType;
}
interface EditorFormData extends BaseEditorForm {
    data: EmploymentField | EducationField | SkillField | LinkField | LanguageField;
}

const editorFormSlice = createSlice({
    name: "editorForm",
    initialState,
    reducers: {
        addFormItem(state: EditorFormState, action: PayloadAction<EditorFormData>) {
            // @ts-ignore
            state[action.payload.type].fields.push(action.payload.data);
        },
        updateFormItem(
            state: EditorFormState,
            action: PayloadAction<{ id: string, data: Partial<EditorFormData["data"]>, type: EditorFormItemType }>
        ) {
            const index = state[action.payload.type].fields
                .findIndex(field => field.id === action.payload.id);
            state[action.payload.type].fields[index] = {
                ...state[action.payload.type].fields[index],
                ...action.payload.data
            };
        },
        removeFormItem(
            state: EditorFormState,
            action: PayloadAction<{ id: string, type: EditorFormItemType }>
        ) {
            const index = state[action.payload.type].fields
                .findIndex(field => field.id === action.payload.id);
            state[action.payload.type].fields.splice(index, 1);
        }
    }
});

//TODO: create selectors here
// export {
//     selectEmploymentFields
// }
export const { addFormItem, updateFormItem, removeFormItem } = editorFormSlice.actions;
export default editorFormSlice.reducer;