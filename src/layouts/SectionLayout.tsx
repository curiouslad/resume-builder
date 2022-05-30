import { Button, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

interface SectionLayoutProps {
    title: string;
    description: string;
    children?: JSX.Element | JSX.Element[];
    actionIcon?: JSX.Element | JSX.Element[];
    actionText?: string;
    onActionClick?: () => void;
}

export const SectionLayout = (
    {
        title, description, children, actionIcon, actionText, onActionClick
    }: SectionLayoutProps) => {
    return (
        <Grid
            container
            // alignItems="baseline"
            justifyContent="start"
        >
            <Grid
                item
                justifySelf="start"
                alignSelf="start"
                xs={1}
                sx={{
                    // marginRight: '-15px'
                }}
            >
                <Tooltip title="Reorder">
                    <IconButton
                        aria-label="Reorder by dragging"
                    >
                        <DragIndicatorIcon />
                    </IconButton>
                </Tooltip>
            </Grid>
            <Grid item xs={11}>
                <Typography variant="h4">{title}</Typography>
                <Typography variant="body2">{description}</Typography>
                {children}
                {actionText &&
                    <Button
                        onClick={onActionClick}
                        startIcon={actionIcon}
                    >{actionText}
                    </Button>
                }
            </Grid>
        </Grid>
    )
}
