import { Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { SkillField } from "../../../../types/FormFields/SkillField";
import { CollapsableFormItem } from "../../../Collapsable/CollapsableFormItem";
import { removeFormItem, updateFormItem } from "../../EditorFormSlice";
import { SkillSFormItem } from "./SkillSFormItem";

export const SkillsForm = () => {
    const skills = useAppSelector(state => state.editorForm.skills.fields);
    const dispatch = useAppDispatch();
    const skillsList = skills.map((field, index) => {
        return (
            <Grid
                item
                key={field.id}
                xs={12}
            >
                <CollapsableFormItem
                    header={field.name}
                    subHeader={field.level.toString()}
                    id={field.id}
                    index={index}
                    onMenuDelete={(id: string) => {
                        dispatch(removeFormItem({
                            id,
                            type: "skills"
                        }))
                    }}
                >
                    <SkillSFormItem
                        field={field}
                        onChange={(id: string, data: Partial<SkillField>) => {
                            dispatch(updateFormItem({
                                id,
                                data,
                                type: "skills"
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
                {skillsList}
            </Grid>
        </>
    )
}
