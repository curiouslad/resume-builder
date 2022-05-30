import { Avatar, Button, Grid, TextField, Typography } from "@mui/material"
import { useFormik } from "formik";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppSelector } from "../../../../app/hooks";

const content = {
    title: "Personal Details",
}
export const PersonalDetails = () => {
    const persoanlFields = useAppSelector(state => state.editorForm.personalDetails.fields);
    const formik = useFormik({
        initialValues: {},
        onSubmit(values) {
            console.log(values);
            // Dispatch data to redux 
        }
    });
    const fieldsList = persoanlFields.map(field => {
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
                        flexDirection="column"
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
                        >
                            <Button startIcon={<EditIcon />}>Edit photo</Button>
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
