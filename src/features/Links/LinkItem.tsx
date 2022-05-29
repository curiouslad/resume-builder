import { Box, Grid, TextField } from '@mui/material';
import { useFormik } from 'formik'
import React from 'react'
import { LinkField } from './LinksSlice';


interface LinkItemProps {
    field: LinkField;
    onChange: (id: string, values: Partial<LinkField>) => void;
}
export const LinkItem = ({ field, onChange }: LinkItemProps) => {
    const formik = useFormik({
        initialValues: {
            name: field.name,
            link: field.link
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
                            label="Label"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            name="name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Link"
                            value={formik.values.link}
                            onChange={formik.handleChange}
                            name="link"
                        />
                    </Grid>
                </Grid>

            </Box>
        </>
    )
}
