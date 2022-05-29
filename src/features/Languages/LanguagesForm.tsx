import { Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { CollapsableFormItem } from "../Collapsable/CollapsableFormItem";
import { LanguagesItem } from "./LanguagesItem";
import { removeLanguage, updateLanguage } from "./LanguagesSlice";

export const LanguagesForm = () => {
    const languages = useAppSelector(state => state.languages.fields);
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
                        dispatch(removeLanguage(id));
                    }}
                >
                    <LanguagesItem
                        field={language}
                        onChange={(id, data) => {
                            dispatch(updateLanguage({ id, data }));
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
