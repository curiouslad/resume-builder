import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { LinkField } from "../../../../types/FormFields/LinkField";
import { CollapsableFormItem } from "../../../Collapsable/CollapsableFormItem";
import { removeFormItem, updateFormItem } from "../../EditorFormSlice";
import { LinkItem } from "./LinkItem";

export const LinksForm = () => {
    const links = useAppSelector(state => state.editorForm.links.fields);
    const dispatch = useAppDispatch();
    const linksList = links.map((link, index) => {
        return (
            <CollapsableFormItem
                key={link.id}
                id={link.id}
                header={link.name}
                index={index}
                subHeader={link.link}
                onMenuDelete={(id: string) => {
                    dispatch(removeFormItem({
                        id,
                        type: "links"
                    }))
                }}
            >
                <LinkItem
                    field={link}
                    onChange={(id: string, data: Partial<LinkField>) => {
                        dispatch(updateFormItem({
                            id,
                            data,
                            type: "links"
                        }))
                    }}
                />
            </CollapsableFormItem>
        );
    })
    return (
        <>
            {linksList}
        </>
    )
}
