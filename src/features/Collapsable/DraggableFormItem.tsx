import { Box, IconButton } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { DragSourceMonitor, useDrag, useDrop } from 'react-dnd';
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { EditorFormFieldType, EditorFormItemType, reorderFormItems } from '../EditorForm/EditorFormSlice';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { setCollapsableId } from './CollapsableSlice';

interface DraggableFormItemProps {
    children: JSX.Element | JSX.Element[];
    index: number;
    type: EditorFormItemType;
    field: EditorFormFieldType;
}


export const DraggableFormItem = ({ children, index, field, type }: DraggableFormItemProps) => {
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector(state => state.collapsable.id) === field.id;
    const [isHovered, setHover] = useState(false);


    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type,
        item: { data: field, index },
        collect: (monitor: DragSourceMonitor) => {
            return {
                isDragging: !!monitor.isDragging()
            }
        }
    }));
    // const [, drop] = useDrop(() => ({
    //     accept: type,
    //     hover(item: { data: EditorFormFieldType, index: number }, monitor) {
    //         const dragIndex = item.index;
    //         const hoverIndex = index;
    //         if (dragIndex === hoverIndex) {
    //             return
    //         }

    //         dispatch(reorderFormItems({
    //             type,
    //             dragIndex,
    //             hoverIndex
    //         }))
    //     }
    // }));

    useEffect(() => {
        if (isDragging && isOpen) {
            dispatch(setCollapsableId(""));
        }

    }, [isDragging, dispatch])

    return (
        <Box
            sx={{
                position: 'relative'
            }}
            onMouseEnter={() => {
                setHover(true);
            }}
            onMouseLeave={() => {
                !isDragging && setHover(false);
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    left: '-40px',
                    top: '20px',
                    transition: 'opacity 200ms ease-in',
                    opacity: isHovered ? .5 : 0,
                    // display: theme=> theme.breakpoints.
                }}
            >
                <IconButton
                    className="grabbable"
                    aria-label="Reorder elements by dragging"
                    ref={drag}
                >
                    <DragHandleIcon />
                </IconButton>
            </Box>
            <Box
                component="div"
                ref={preview}
                sx={{
                    // visibility: isDragging ? "hidden" : "visible"
                }}
            // ref=
            >{children}</Box>
            <Box
                sx={{
                    position: 'absolute',
                    left: '100%',
                    top: '20px',
                    transition: 'opacity 200ms ease-in',
                    opacity: isHovered ? .5 : 0
                }}
            >
                <IconButton aria-label="Reorder elements by dragging">
                    <DragHandleIcon />
                </IconButton>
            </Box>
        </Box>
    )
}
