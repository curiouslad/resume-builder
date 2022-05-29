import { Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { CollapsableFormItem } from "../Collapsable/CollapsableFormItem";
// import { CollapsableType } from "../Collapsable/CollapsableSlice";
import { SkillSFormItem } from "./SkillSFormItem";
import { removeSkill } from "./SkillsSlice";

export const SkillsForm = () => {
    const skills = useAppSelector(state => state.skills.fields);
    const dispatch = useAppDispatch();
    const handleMenuDelete = (id: string) => {
        dispatch(removeSkill(id));
    }
    const skillsList = skills.map(field => {
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
                    onMenuDelete={handleMenuDelete}
                    skill={true}
                >
                    <SkillSFormItem field={field} />
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
