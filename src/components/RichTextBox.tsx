import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { ButtonGroup, IconButton } from '@mui/material';

interface IRichTextBoxProps {
    rows: number
}


function RichTextBox(props: IRichTextBoxProps) {
    return (
        <>
            <div className="rich-text-box input-background">
                <div className="row items-center">
                    <ButtonGroup>
                        <IconButton aria-label="bold">
                            <FormatBoldIcon />
                        </IconButton>
                        <IconButton aria-label="italic">
                            <FormatItalicIcon />
                        </IconButton>
                        <IconButton aria-label="underline">
                            <FormatUnderlinedIcon />
                        </IconButton>
                    </ButtonGroup>
                </div>
                <div className="textarea-control">
                    <textarea rows={props.rows}></textarea>
                </div>
            </div>
        </>
    );
}

export default RichTextBox;