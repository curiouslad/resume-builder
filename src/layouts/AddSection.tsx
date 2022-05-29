import { Button, Grid } from "@mui/material"
import TranslateIcon from '@mui/icons-material/Translate';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SettingsInputSvideoIcon from '@mui/icons-material/SettingsInputSvideo';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
export const AddSection = () => {
    const additionSections = [
        { name: "Custom Section", icon: <SettingsInputSvideoIcon /> },
        // { name: "Extra Activities" },
        { name: "Hobbies", icon: <SportsEsportsIcon /> },
        { name: "References", icon: <RecordVoiceOverIcon /> },
        { name: "Courses", icon: <SchoolIcon /> },
        { name: "Interships", icon: <WorkIcon /> },
        { name: "Languages", icon: <TranslateIcon /> },
    ];

    const additionalSectionsList = additionSections.map(section => {
        return (
            <Grid
                key={section.name}
                xs={12} sm={6}
                item
            >
                <Button startIcon={section.icon}>{section.name}</Button>
            </Grid>
        );
    })

    return (
        <Grid container>
            {additionalSectionsList}
        </Grid>
    )
}
