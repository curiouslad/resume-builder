import { Avatar, Button, Grid, TextField, Typography } from "@mui/material"
import { nanoid } from "@reduxjs/toolkit";
import { useFormik } from "formik";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const content = {
    title: "Personal Details",
    fields: [
        {
            id: nanoid(),
            name: "wantedJobTitle",
            label: "Wanted Job Title",
        },
        {
            id: nanoid(),
            name: "firstName",
            label: "First Name"
        },
        {
            id: nanoid(),
            name: "lastName",
            label: "Last Name"
        },
        {
            id: nanoid(),
            name: "email",
            label: "Email"
        },
        {
            id: nanoid(),
            name: "phone",
            label: "Phone"
        },
        {
            id: nanoid(),
            name: "country",
            label: "Country"
        }
    ]
}
export const PersonalDetails = () => {
    const formik = useFormik({
        initialValues: {},
        onSubmit(values) {
            console.log(values);
            // Dispatch data to redux 
        }
    });
    const fieldsList = content.fields.map(field => {
        return (
            <Grid key={field.id} item xs={12} sm={6} lg={4}>
                <TextField
                    fullWidth
                    id={field.id}
                    name={field.name}
                    label={field.label}
                    value={formik.values[field.name as keyof typeof formik.values] || String()}
                    onChange={formik.handleChange}
                ></TextField>
            </Grid>
        );
    });

    return (
        <form onBlur={formik.handleSubmit}>
            {/* TODO: Add photo input here */}
            <Grid container spacing={2}>
                <Grid
                    xs={12}
                    item
                >
                    <Grid
                        container
                        alignItems="center"
                        justifyContent="center"
                        spacing={2}
                    >
                        <Grid item>
                            <Avatar
                                src="https://via.placeholder.com/150"
                                sx={{
                                    height: 100,
                                    width: 100
                                }}
                            />
                        </Grid>
                        <Grid
                            item
                            direction='column'
                        >
                            <Button startIcon={<EditIcon />}>Edit photo</Button>
                            <br></br>
                            <Button startIcon={<DeleteIcon />} color="error">Delete photo</Button>
                        </Grid>
                    </Grid>
                </Grid>
                {fieldsList}
                {/* Add TextField here -> should this exist ? */}
            </Grid>
        </form>
    )
}
