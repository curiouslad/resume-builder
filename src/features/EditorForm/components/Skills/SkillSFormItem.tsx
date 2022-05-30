import { Box, Grid, MenuItem, TextField } from "@mui/material";
import { useFormik } from "formik";
import { SkillField } from "../../../../types/FormFields/SkillField";


interface SkillSFormItemProps {
    field: SkillField;
    onChange: (id: string, data: Partial<SkillField>) => void;
}
export const SkillSFormItem = ({ field, onChange }: SkillSFormItemProps) => {
    const formik = useFormik({
        initialValues: {
            name: field.name,
            level: field.level
        },
        onSubmit(values) {
            onChange(field.id, values);
        }
    });

    const skillLevels = [
        { value: "Novice" },
        { value: "Beginner", },
        { value: "Skillfull", },
        { value: "Experienced", },
        { value: "Expert" },
    ]

    return (
        <>
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
                            label="Skill"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            name="name"
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
                                <em>Select level</em>
                            </MenuItem>
                            {skillLevels.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.value}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>

            </Box>
        </>
    )
}
