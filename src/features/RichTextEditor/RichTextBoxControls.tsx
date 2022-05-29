import {
    FormatAlignCenter, FormatAlignLeft, FormatAlignRight, FormatBold, FormatItalic,
    // FormatListBulleted, FormatListNumbered, 
    FormatUnderlined
} from "@mui/icons-material"
import { Box, Divider, IconButton, Tooltip } from "@mui/material"
import { MouseEvent } from "react"
import { ReactEditor, useSlate } from "slate-react"


interface RichTextBoxControlsProps {
    // editor: ReactEditor;
    // handleControlsChange: (type: string) => void;
    toggleMark: (editor: ReactEditor, format: string) => void;
    toggleBlock: (editor: ReactEditor, format: string) => void;
    isMarkActive: (editor: ReactEditor, format: string) => boolean;
    isBlockActive: (editor: ReactEditor, format: string, type?: string) => boolean;
}
export const RichTextBoxControls = (
    { toggleMark, isMarkActive, toggleBlock, isBlockActive }: RichTextBoxControlsProps
) => {
    const editor = useSlate()
    const handleEvent = (event: MouseEvent<HTMLButtonElement>, format: string): void => {
        event.preventDefault();
        toggleMark(editor, format);
    };
    const handleBlockEvent = (event: MouseEvent<HTMLButtonElement>, format: string): void => {
        event.preventDefault();
        toggleBlock(editor, format);
    };
    return (
        <>
            <Box
                sx={{
                    display: 'flex'
                }}
            >
                <Tooltip title="Make text bold">
                    <IconButton color={isMarkActive(editor, "bold") ? "inherit" : "default"} onMouseDown={event => handleEvent(event, "bold")} aria-label="Make text bold">
                        <FormatBold />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Make text underlined">
                    <IconButton color={isMarkActive(editor, "underline") ? "inherit" : "default"} onMouseDown={event => handleEvent(event, "underline")} aria-label="Make text underlined">
                        <FormatUnderlined />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Make text italic">
                    <IconButton color={isMarkActive(editor, "italic") ? "inherit" : "default"} onMouseDown={event => handleEvent(event, "italic")} aria-label="Make text italic">
                        <FormatItalic />
                    </IconButton>
                </Tooltip>

                <Divider orientation="vertical" variant="middle" flexItem />

                <Tooltip title="Align text left">
                    <IconButton
                        color={isBlockActive(editor, "start", "align") ? "inherit" : "default"}
                        onMouseDown={event => handleBlockEvent(event, "start")}
                        aria-label="Make text italic"
                    >
                        <FormatAlignLeft />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Center text">
                    <IconButton
                        color={isBlockActive(editor, "center", "align") ? "inherit" : "default"}
                        onMouseDown={event => handleBlockEvent(event, "center")}
                        aria-label="center text"
                    >
                        <FormatAlignCenter />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Align text right">
                    <IconButton
                        color={isBlockActive(editor, "end", "align") ? "inherit" : "default"}
                        onMouseDown={event => handleBlockEvent(event, "end")}
                        aria-label="Align text right"
                    >
                        <FormatAlignRight />
                    </IconButton>
                </Tooltip>

                <Divider orientation="vertical" variant="middle" flexItem />

                {/* <Tooltip title="bullet list">
                    <IconButton
                        onMouseDown={event => handleBlockEvent(event, "bulleted-list")}
                        color={isBlockActive(editor, "bulleted-list", "type") ? "inherit" : "default"}
                        aria-label="insert bullet list"
                    >
                        <FormatListBulleted />
                    </IconButton>
                </Tooltip>
                <Tooltip title="number list">
                    <IconButton
                        onMouseDown={event => handleBlockEvent(event, "numbered-list")}
                        color={isBlockActive(editor, "numbered-list", "type") ? "inherit" : "default"}
                        aria-label="insert number list"
                    >
                        <FormatListNumbered />
                    </IconButton>
                </Tooltip> */}
            </Box>
        </>
    )
}
