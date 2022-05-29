import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { CollapsableFormItem } from "../Collapsable/CollapsableFormItem";
import { LinkItem } from "./LinkItem";
import { LinkField, updateLink } from "./LinksSlice";

export const LinksForm = () => {
    const links = useAppSelector(state => state.links.fields);
    const dispatch = useAppDispatch();
    const linksList = links.map(link => {
        return (
            <CollapsableFormItem
                key={link.id}
                id={link.id}
                header={link.name}
                subHeader={link.link}
                onMenuDelete={() => { }}
            >
                <LinkItem
                    field={link}
                    onChange={(id: string, data: Partial<LinkField>) => {
                        dispatch(updateLink({ id, data }));
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
