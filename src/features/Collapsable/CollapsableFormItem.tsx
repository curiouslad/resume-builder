import { Box, Collapse, Typography } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setCollapsableId } from "./CollapsableSlice";
import { useState } from "react";
import { MenuLayout } from "./MenuLayout";
import { CollapsableActions } from "./CollapsableActions";

interface CollapsableFormItemProps {
    header: string;
    subHeader: string;
    id: string;
    children: JSX.Element;
    onMenuDelete: (id: string) => void;
    index: number;
    // type: FormItem;
}


export const CollapsableFormItem = (
    { header, subHeader, children, id, onMenuDelete, index }: CollapsableFormItemProps
) => {
    const dispatch = useAppDispatch();
    const collapsableId = useAppSelector(state => state.collapsable.id);
    const isOpen = collapsableId === id;
    const handleClick = () => {
        isOpen ? dispatch(setCollapsableId("")) : dispatch(setCollapsableId(id))
    };

    // FOR MENU
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchorEl);
    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = (e: Event | React.SyntheticEvent) => {
        setAnchorEl(null);
        e.stopPropagation();
    };
    const handleMenuDelete = () => {
        onMenuDelete(id);
        setAnchorEl(null);
    }
    const handleMenuEdit = () => {
        dispatch(setCollapsableId(id));
        setAnchorEl(null);
    }
    // FOR MENU END

    return (
        <Box
            sx={{
                border: 1,
                borderColor: theme => theme.palette.grey[400],
                borderRadius: theme => `${theme.shape.borderRadius}px`,
                padding: '15px 20px',
                margin: '5px 0',
                paddingBottom: 0,
                cursor: 'pointer',
                textAlign: "start",
                '&:hover': {
                    borderColor: theme => !isOpen ? theme.palette.text.primary : "",
                },
                ...isOpen && {
                    border: 2,
                    borderColor: theme => theme.palette.primary.main,
                }
            }}
            onClick={handleClick}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: '15px'
                }}
            >
                <div>
                    <Typography>{header || "Unspecified"}</Typography>
                    <Typography
                        sx={{
                            color: theme => theme.palette.text.secondary,
                            padding: 0
                        }}
                        variant="body2"
                    >{subHeader}
                    </Typography>
                </div>
                <CollapsableActions
                    isOpen={isOpen}
                    handleMenuOpen={handleMenuOpen}
                />
            </Box>
            <Collapse
                sx={{
                    ...isOpen && {
                        paddingBottom: '15px'
                    }
                }}
                onClick={(e) => e.stopPropagation()}
                in={isOpen}
            >
                {children}
            </Collapse>
            <MenuLayout
                isOpen={isMenuOpen}
                anchor={anchorEl}
                onDelete={handleMenuDelete}
                onEdit={handleMenuEdit}
                onClose={handleMenuClose}
            />
        </Box>
    );
}
