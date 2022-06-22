import { Box, IconButton } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


interface CollapsableActionsProps {
    isOpen: boolean;
    handleMenuOpen: (e: React.MouseEvent<HTMLElement>) => void;
}
export const CollapsableActions = (
    { isOpen, handleMenuOpen }: CollapsableActionsProps
) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <IconButton
                // sx={{
                //     display: theme=>theme.breakpoints.
                // }}
                onClick={(e) => {
                    handleMenuOpen(e);
                    e.stopPropagation();
                }}
            >
                <MoreHorizIcon />
            </IconButton>
            <IconButton onClick={(e) => {
                // handleClick();
                // e.stopPropagation();
            }}>
                <ExpandMoreIcon
                    sx={{
                        transition: 'transform .4s',
                        ...isOpen && {
                            transform: 'rotate(180deg)'
                        }
                    }}
                />
            </IconButton>
        </Box>
    );
}