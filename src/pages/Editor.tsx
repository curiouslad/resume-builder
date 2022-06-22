import { Container, Grid } from "@mui/material"
import { DndProvider, useDragLayer } from "react-dnd"
import { TouchBackend } from "react-dnd-touch-backend"
import { Form } from "../layouts/Form"
import { PreviewLayout } from "../layouts/PreviewLayout"

export const Editor = () => {
    return (
        <>
            <Grid
                container
            >
                <Grid
                    sx={{
                        padding: '0 10px'
                    }}
                    item
                    xs={12}
                    lg={6}
                    xl={6}
                >
                    <Container
                    >
                        {/* <DndProvider backend={TouchBackend} options={{
                            enableMouseEvents: true,
                            preview: true
                        }}> */}

                        <Form></Form>

                        {/* <DragLayerComponent />
                        </DndProvider> */}
                    </Container>
                </Grid>
                <Grid
                    item
                    sx={(theme) => ({
                        [theme.breakpoints.down('lg')]: {
                            display: 'none'
                        }
                    })}
                    lg={6}
                    xl={6}
                >
                    <PreviewLayout />
                </Grid>
            </Grid>
        </>
    )
}



// eslint-disable-next-line @typescript-eslint/no-explicit-any
function DragLayerComponent(props: any) {
    console.log(props);

    const collectedProps = useDragLayer(
        monitor => monitor
    )
    console.log(collectedProps);

    return <div>...</div>
}