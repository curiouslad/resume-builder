import { Button, Grid, IconButton, Tooltip, Typography } from "@mui/material";
// import { DraggableFormItem } from "../features/Collapsable/DraggableFormItem";

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
        // <DraggableFormItem
        //     type="education"
        //     index={0}
        //     id={"Mladen"}
        // >
        <div>
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
        </div>
        // </DraggableFormItem>
    )
}
