import { Box, Collapse, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setCollapsableId } from "./CollapsableSlice";
import { useState } from "react";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

interface CollapsableFormItemProps {
    header: string;
    subHeader: string;
    id: string;
    children: JSX.Element;
    onMenuDelete: (id: string) => void;
    skill?: boolean;
}
export const CollapsableFormItem = (
    { header, subHeader, children, id, onMenuDelete, skill }: CollapsableFormItemProps
) => {
    const dispatch = useAppDispatch();
    const collapsableId = useAppSelector(state => state.collapsable.id);
    const isOpen = collapsableId === id;
    const ExpandIcon = isOpen ? ExpandLessIcon : ExpandMoreIcon;
    const handleClick = () => {
        isOpen ? dispatch(setCollapsableId("")) : dispatch(setCollapsableId(id))
    };

    const handleMenuDelete = () => {
        onMenuDelete(id);
        handleMenuClose()
    }
    const handleMenuEdit = () => {
        dispatch(setCollapsableId(id));
        handleMenuClose();
    }

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchorEl);
    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box
            sx={{
                display: 'flex',
            }}
        >
            <DragIndicatorIcon />
            <Box
                // component="button"
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
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <IconButton
                            onClick={(e) => {
                                e.stopPropagation();
                                handleMenuOpen(e);
                            }}
                        >
                            <MoreHorizIcon />
                        </IconButton>
                        <ExpandIcon />
                    </Box>
                </Box>
                <Collapse
                    sx={{
                        paddingTop: '15px',
                        ...isOpen && {
                            paddingBottom: '15px'
                        }
                    }}
                    onClick={(e) => e.stopPropagation()}
                    in={isOpen}
                >
                    {children}
                </Collapse>
            </Box>

            <Menu
                anchorEl={anchorEl}
                open={isMenuOpen}
                onClose={handleMenuClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={handleMenuEdit}>
                    <ListItemIcon>
                        <EditIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Edit</ListItemText>
                </MenuItem>
                <MenuItem
                    onClick={handleMenuDelete}
                >
                    <ListItemIcon>
                        <DeleteIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Delete</ListItemText>
                </MenuItem>
            </Menu>
        </Box>
    )
}


// EmploymentFormItem.defaultProps