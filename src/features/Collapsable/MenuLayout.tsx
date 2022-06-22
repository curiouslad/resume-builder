import { MenuItem, ListItemIcon, ListItemText, Menu } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface MenuLayoutProps {
    isOpen: boolean;
    anchor: HTMLElement | null;
    onClose: (e: Event | React.SyntheticEvent) => void;
    onDelete: () => void;
    onEdit: () => void;
};

const content = {
    editMenu: "Edit",
    deleteMenu: "Delete"
}

export const MenuLayout = ({ isOpen, anchor, onClose, onDelete, onEdit }: MenuLayoutProps) => {
    return (
        <Menu
            anchorEl={anchor}
            open={isOpen}
            onClose={onClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
        >
            <MenuItem onClick={onEdit}>
                <ListItemIcon>
                    <EditIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>{content.editMenu}</ListItemText>
            </MenuItem>
            <MenuItem
                onClick={onDelete}
            >
                <ListItemIcon>
                    <DeleteIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>{content.deleteMenu}</ListItemText>
            </MenuItem>
        </Menu>
    )
}
