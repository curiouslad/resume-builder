import { Box, Grid, TextField, MenuItem } from "@mui/material"
import { useFormik } from "formik"
import { LanguageField } from "../../../../types/FormFields/LanguageField";



interface LanguagesItemProps {
    field: LanguageField;
    onChange: (id: string, values: Partial<LanguageField>) => void;
}
export const LanguagesItem = ({ field, onChange }: LanguagesItemProps) => {
    const formik = useFormik({
        initialValues: {
            language: field.language,
            level: field.level
        },
        onSubmit(values) {
            onChange(field.id, values);
        },
    });
    const languagesLevels = [
        { value: 0, label: "Native Speaker" },
        { value: 1, label: "Highly proficient" },
        { value: 2, label: "Very good command" },
        { value: 3, label: "Good working knowledge" },
        { value: 4, label: "Working knowledge" },
        { value: 5, label: "C2" },
        { value: 6, label: "C1" },
        { value: 7, label: "B2" },
        { value: 8, label: "B1" },
        { value: 9, label: "A2" },
        { value: 10, label: "A1" },
    ];
    return (
        <Box
            component="form"
            onBlur={formik.handleSubmit}
        >
            <Grid
                container
                spacing={2}
            >
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Language"
                        value={formik.values.language}
                        onChange={formik.handleChange}
                        name="language"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        // id="outlined-select-currency"
                        name="level"
                        select
                        label="Level"
                        value={formik.values.level}
                        onChange={formik.handleChange}
                    // helperText=""
                    >
                        <MenuItem disabled value="">
                            <em>Select language</em>
                        </MenuItem>
                        {languagesLevels.map((option) => (
                            <MenuItem key={option.label} value={option.label}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
            </Grid>

        </Box>
    )
}
