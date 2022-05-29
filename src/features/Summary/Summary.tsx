import { Descendant } from "slate"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { RichTextBox } from "../RichTextEditor/RichTextBox"
import { updateSummary } from "./SummarySlice";


export const Summary = () => {
    const summary = useAppSelector(state => state.summary);
    const dispatch = useAppDispatch();
    const handleChange = (value: Descendant[]) => {
        dispatch(updateSummary(value));
    }
    return (
        <>
            <RichTextBox
                value={summary.value}
                onChange={handleChange}
            ></RichTextBox>
        </>
    )
}
