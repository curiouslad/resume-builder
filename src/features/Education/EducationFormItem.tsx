import {
    Box, Grid, TextField
} from "@mui/material"
import { useFormik } from "formik";
import { DatePicker } from '@mui/x-date-pickers';
import { RichTextBox } from "../RichTextEditor/RichTextBox";
import { EducationField } from "./EducationSlice";


interface EducationFormItemProps {
    field: EducationField;
    onChange: (id: string, values: Partial<EducationField>) => void;
};
export const EducationFormItem = ({ field, onChange }: EducationFormItemProps) => {
    const formik = useFormik({
        initialValues: {
            school: field.school,
            degree: field.degree,
            startDate: field.startDate,
            endDate: field.endDate,
            city: field.city,
            description: field.description
        },
        onSubmit(values) {
            onChange(field.id, values);
        }
    });
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
                            label="School"
                            placeholder="e.g. Software Developer"
                            value={formik.values.school}
                            onChange={formik.handleChange}
                            name="school"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Degree"
                            // placeholder="e.g. Software Developer"
                            value={formik.values.degree}
                            onChange={formik.handleChange}
                            name="degree"
                        />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <DatePicker
                            disableFuture
                            inputFormat="MM/yyyy"
                            label="Start Date"
                            openTo="year"
                            views={['year', 'month']}
                            value={formik.values.startDate}
                            onChange={value => {
                                const date = new Date(value!);

                                formik.setFieldValue('startDate', date.toISOString());
                            }}
                            renderInput={(params) =>
                                <TextField
                                    fullWidth
                                    name="startDate"
                                    {...params}
                                />
                            }
                        />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <DatePicker
                            inputFormat="MM/yyyy"
                            label="End Date"
                            openTo="year"
                            views={['year', 'month']}
                            value={formik.values.endDate}
                            onChange={value => {
                                const date = new Date(value!);
                                formik.setFieldValue('endDate', date.toISOString());
                            }}
                            renderInput={(params) => {
                                return (
                                    <TextField
                                        fullWidth
                                        name="endDate"
                                        // value={}
                                        {...params}
                                    />
                                );
                            }

                            }
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="City"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            name="city"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <RichTextBox
                            placeholder="Describe what you did and what were some challenges at this job"
                            onChange={value => formik.setFieldValue('description', value)}
                            value={formik.values.description}
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
