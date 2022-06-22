// import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

import { Box, Grid } from "@mui/material"
import { PreviewDocument } from "./PreviewDocument";



// const styles = StyleSheet.create({
//     section: {
//         width: 200,
//         '@media max-width: 400': {
//             width: 300,
//         },
//         '@media orientation: landscape': {
//             width: 400,
//         },
//     },
//     page: {}
// });

export const PreviewLayout = () => {
    return (
        <>
            {/* <PDFViewer>
                <Document>
                    <Page size="A4" style={styles.page}>
                        <View style={styles.section}>
                            <Text>Section #1</Text>
                        </View>
                    </Page>
                </Document>
            </PDFViewer> */}
            <Box
                sx={{
                    backgroundColor: theme => theme.palette.grey[500],
                    height: '100%',
                    width: '50%',
                    position: 'fixed',
                    maxHeight: '100vh'
                }}
            >
                <Box
                    sx={{
                        // width: 'inherit'
                        // left: 0,
                        // top: 0,
                        // bottom: 0,
                        // right: 0
                    }}
                >
                    <PreviewToolbar />
                    <PreviewDocument />
                </Box>
            </Box>
        </>
    )
}


const PreviewToolbar = () => {
    return (
        <Grid
            container
            justifyContent="center"
        >
            <Grid
                item
            >1/2</Grid>
        </Grid>
    );
}