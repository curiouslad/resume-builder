import { Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { EducationField } from "../../../../types/FormFields/EducationField";
import { CollapsableFormItem } from "../../../Collapsable/CollapsableFormItem";
import { DraggableFormItem } from "../../../Collapsable/DraggableFormItem";
import { removeFormItem, updateFormItem } from "../../EditorFormSlice";
import { EducationFormItem } from "./EducationFormItem";

export const EducationForm = () => {
    const employmentFields = useAppSelector(state => state.editorForm.education.fields);
    const dispatch = useAppDispatch();
    const listEmployment = employmentFields.map((field, index) => {
        return (
            // <DraggableFormItem
            //     key={field.id}
            //     field={field}
            //     index={index}
            //     type="education"
            // >
            <CollapsableFormItem
                key={field.id}
                header={field.school}
                subHeader={field.degree}
                id={field.id}
                index={index}
                onMenuDelete={(id: string) => {
                    dispatch(removeFormItem({
                        id,
                        type: "education"
                    }))
                }}
            >
                <EducationFormItem
                    field={field}
                    onChange={(id: string, data: Partial<EducationField>) => {
                        dispatch(updateFormItem({
                            id,
                            data,
                            type: "education"
                        }));
                    }}
                />
            </CollapsableFormItem>
            // </DraggableFormItem>
        );
    });
    return (
        <>

            {listEmployment}
        </>
    )
}
