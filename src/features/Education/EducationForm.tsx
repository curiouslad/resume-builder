import { Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { CollapsableFormItem } from "../Collapsable/CollapsableFormItem";
// import { CollapsableType } from "../Collapsable/CollapsableSlice";
import { EducationFormItem } from "./EducationFormItem";
import { EducationField, removeEducationItemById, updateEducationItem } from "./EducationSlice";

export const EducationForm = () => {
    const employmentFields = useAppSelector(state => state.education.fields);
    const dispatch = useAppDispatch();
    const handleChange = (id: string, data: Partial<EducationField>) => {
        dispatch(updateEducationItem({ id, data }));
    }
    const handleMenuDelete = (id: string) => {
        dispatch(removeEducationItemById(id));
    }
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
                    onMenuDelete={handleMenuDelete}
                >
                    <EducationFormItem
                        field={field}
                        onChange={handleChange}
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
