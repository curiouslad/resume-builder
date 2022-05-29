import { Button, Grid, Typography } from "@mui/material";
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
        <Grid>
            <Grid item>

                <Grid
                    alignItems="center"
                    justifyContent="start"
                    container
                >
                    <Grid item>
                        <DragIndicatorIcon />
                    </Grid>
                    <Grid item>
                        <Typography variant="h4">{title}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Typography variant="body2" paddingLeft="25px">{description}</Typography>
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
