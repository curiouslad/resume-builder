import { Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { EducationField } from "../../../../types/FormFields/EducationField";
import { CollapsableFormItem } from "../../../Collapsable/CollapsableFormItem";
import { removeFormItem, updateFormItem } from "../../EditorFormSlice";
import { EducationFormItem } from "./EducationFormItem";

export const EducationForm = () => {
    const employmentFields = useAppSelector(state => state.editorForm.education.fields);
    const dispatch = useAppDispatch();
    const listEmployment = employmentFields.map(field => {
        return (
            <Grid
                item
                key={field.id}
            >
                <CollapsableFormItem
                    header={field.school}
                    subHeader={field.degree}
                    id={field.id}
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
            </Grid>
        );
    })
    return (
        <>
            <Grid
                container
            >
                {listEmployment}
            </Grid>
        </>
    )
}
