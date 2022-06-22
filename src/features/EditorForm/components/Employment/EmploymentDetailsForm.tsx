import { useDrop } from "react-dnd";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { EmploymentField } from "../../../../types/FormFields/EmploymentField";
import { CollapsableFormItem } from "../../../Collapsable/CollapsableFormItem";
import { DraggableFormItem } from "../../../Collapsable/DraggableFormItem";
import { EditorFormFieldType, removeFormItem, updateFormItem } from "../../EditorFormSlice";
import { EmploymentFormItem } from "./EmploymentFormItem";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export const EmploymentDetailsForm = () => {
    const employmentFields = useAppSelector(state => state.editorForm.employment.fields);
    const dispatch = useAppDispatch();

    // const [, drop] = useDrop(() => ({
    //     accept: "employment",
    //     hover(item: { data: EditorFormFieldType, index: number }, monitor) {
    //         const dragIndex = item.index;
    //         console.log(dragIndex, item, monitor.());

    //         // const hoverIndex = index;
    //         //     if (dragIndex === hoverIndex) {
    //         //         return
    //         //     }

    //         //     dispatch(reorderFormItems({
    //         //         type,
    //         //         dragIndex,
    //         //         hoverIndex
    //         //     }))
    //     }
    // }));


    const listEmployment = employmentFields.map((field: EmploymentField, index) => {
        return (
            // <DraggableFormItem
            //     key={field.id}
            //     field={field}
            //     index={index}
            //     type="employment"
            // >
            <CollapsableFormItem
                key={field.id}
                header={field.jobTitle}
                subHeader={field.employer}
                index={index}
                id={field.id}
                onMenuDelete={(id: string) => {
                    dispatch(removeFormItem({
                        id,
                        type: "employment"
                    }))
                }}
            >
                <EmploymentFormItem
                    field={field}
                    onChange={(id: string, data: Partial<EmploymentField>) => {
                        dispatch(updateFormItem({
                            id,
                            data,
                            type: "employment"
                        }));
                    }}
                />
            </CollapsableFormItem>
            // </DraggableFormItem>
        );
    })
    return (
        <>
            {/* <DragDropContext> */}
            {listEmployment}
            {/* </DragDropContext> */}

        </>
    )
}
