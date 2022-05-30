import { Descendant } from "slate"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { RichTextBox } from "../../../RichTextEditor/RichTextBox"
import { updateFormItem } from "../../EditorFormSlice";


export const Summary = () => {
    const summary = useAppSelector(state => state.editorForm.summary.fields[0]);
    const dispatch = useAppDispatch();
    const handleChange = (value: Descendant[]) => {
        // dispatch(updateFormItem({
        //     type: "summary",
        //     id: "summary-input"
        // })
    };
    return (
        <>
            <RichTextBox
                value={summary.value}
                onChange={handleChange}
            ></RichTextBox>
        </>
    )
}
