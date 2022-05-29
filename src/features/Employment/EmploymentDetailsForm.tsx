import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { CollapsableFormItem } from "../Collapsable/CollapsableFormItem";
import { EmploymentFormItem } from "./EmploymentFormItem";
import { EmploymentField, removeEmploymentItemById, updateEmploymentItem } from "./EmploymentSlice";


export const EmploymentDetailsForm = () => {
    const employmentFields = useAppSelector(state => state.employment.fields);
    const dispatch = useAppDispatch();
    const handleMenuDelete = (id: string) => {
        dispatch(removeEmploymentItemById(id));
    }
    const handleChange = (id: string, data: Partial<EmploymentField>) => {
        dispatch(updateEmploymentItem({ id, data }));
    }
    const listEmployment = employmentFields.map((field: EmploymentField) => {
        return (
            <CollapsableFormItem
                key={field.id}
                header={field.jobTitle}
                subHeader={field.employer}
                id={field.id}
                onMenuDelete={handleMenuDelete}
            >
                <EmploymentFormItem
                    field={field}
                    onChange={handleChange}
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
