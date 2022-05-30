import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { EmploymentField } from "../../../../types/FormFields/EmploymentField";
import { CollapsableFormItem } from "../../../Collapsable/CollapsableFormItem";
import { removeFormItem, updateFormItem } from "../../EditorFormSlice";
import { EmploymentFormItem } from "./EmploymentFormItem";



export const EmploymentDetailsForm = () => {
    const employmentFields = useAppSelector(state => state.editorForm.employment.fields);
    const dispatch = useAppDispatch();
    const listEmployment = employmentFields.map((field: EmploymentField) => {
        return (
            <CollapsableFormItem
                key={field.id}
                header={field.jobTitle}
                subHeader={field.employer}
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
        );
    })
    return (
        <>
            {listEmployment}
        </>
    )
}
