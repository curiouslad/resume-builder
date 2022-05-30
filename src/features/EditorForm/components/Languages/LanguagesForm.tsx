import { Grid } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
import { CollapsableFormItem } from "../../../Collapsable/CollapsableFormItem";
import { removeFormItem, updateFormItem } from "../../EditorFormSlice";
import { LanguagesItem } from "./LanguagesItem";


export const LanguagesForm = () => {
    const languages = useAppSelector(state => state.editorForm.languages.fields);
    const dispatch = useAppDispatch();
    const languagesList = languages.map(language => {
        return (
            <Grid
                item
                key={language.id}
                xs={12}
            >
                <CollapsableFormItem
                    header={language.language}
                    subHeader={language.level}
                    id={language.id}
                    onMenuDelete={(id: string) => {
                        dispatch(removeFormItem({
                            id,
                            type: "languages"
                        }))
                    }}
                >
                    <LanguagesItem
                        field={language}
                        onChange={(id, data) => {
                            dispatch(updateFormItem({
                                id,
                                data,
                                type: "languages"
                            }));
                        }}
                    />
                </CollapsableFormItem>
            </Grid>
        );
    })
    return (
        <Grid
            container
        >
            {languagesList}
        </Grid>
    )
}
