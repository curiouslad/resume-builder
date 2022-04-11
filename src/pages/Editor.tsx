import { FilledInput, FormControl, Input, InputLabel, OutlinedInput, TextareaAutosize, TextField, Typography } from "@mui/material";
import ExpandableBlock from "../components/ExpandableBlock";
import RichTextBox from "../components/RichTextBox";

const name = "filename-cv";// get name from account if have

enum ElementTypes {
    INPUT,
    TEXTAREA,
    BLOCK

}

interface IElement {
    label: string,
    placeholder?: string,
    id?: string,
    type?: string,
    elementType: ElementTypes,
    value?: string
}
interface ISection {
    name: string,
    description?: string
    form: IElement[]
}

const sections: ISection[] = [
    {
        name: "Personal Details",
        form: [
            {
                label: "Wanted Job Title",
                placeholder: "e.g Teacher",
                id: "jobTitle",
                elementType: ElementTypes.INPUT
            },
            { label: "First Name", placeholder: "John", id: "firstName", elementType: ElementTypes.INPUT },
            { label: "Last Name", placeholder: "Doe", id: "lastName", elementType: ElementTypes.INPUT },
            { label: "Email", placeholder: "example@example.com", id: "email", elementType: ElementTypes.INPUT, type: "email" },
        ]
    },
    {
        name: "Professional Summary",
        description: "Write short summary about yourself",
        form: [
            { elementType: ElementTypes.TEXTAREA, placeholder: "asd", id: "summary", label: "summary" }
        ]
    },
    {
        name: "Websites & Social Links",
        description: "You can add...",
        form: [
            { elementType: ElementTypes.BLOCK, label: "Github", value: "https://github.com/LaMbA3" }
        ]
    }
];


function Editor() {
    return (
        <div>

            <TextField
                variant="standard"
                placeholder={name}
                label="Enter filename"
            ></TextField>

            {sections.map(section => {
                return (
                    <section key={section.name}>
                        <Typography variant="h6">{section.name}</Typography>
                        <Typography>{section.description}</Typography>
                        <form action="">
                            {section.form.map(formElement => {
                                return (
                                    getElementByType(formElement)
                                );
                            })}
                        </form>
                    </section>
                );
            })}
        </div>
    );
}



function getElementByType(formElement: IElement) {
    const { elementType }: { elementType: ElementTypes } = formElement;
    switch (elementType) {
        case ElementTypes.INPUT:

            return (
                <FormControl key={formElement.label} variant="filled">
                    <InputLabel >
                        {formElement.label}
                    </InputLabel>
                    <FilledInput
                        type={formElement.type}
                        id={formElement.id}
                        placeholder={formElement.placeholder}
                    />
                </FormControl>
            );
        case ElementTypes.TEXTAREA:
            return (
                <RichTextBox rows={10} />
            );

        case ElementTypes.BLOCK:
            return (
                <ExpandableBlock />
            );
    }
}






export default Editor;