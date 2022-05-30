import { Grid } from "@mui/material"
import { Form } from "../layouts/Form"
import { PreviewLayout } from "../layouts/PreviewLayout"

export const Editor = () => {
    return (
        <>
            <Grid
                container
                spacing={5}
            // justifyContent="center"
            >
                <Grid
                    // alignSelf="center"
                    item
                    md={6}
                    xs={12}
                >
                    <Form></Form>
                </Grid>
                <Grid item md={6}>
                    <PreviewLayout />
                </Grid>
            </Grid>
        </>
    )
}
