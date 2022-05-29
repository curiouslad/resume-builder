import { Grid, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { PersonalDetails } from "../features/PersonalDetails/PersonalDetails"
import { Summary } from "../features/Summary/Summary"
import { LinksForm } from "../features/Links/LinksForm"
import { SectionLayout } from "./SectionLayout"
import { EmploymentDetailsForm } from "../features/Employment/EmploymentDetailsForm"
import { EducationForm } from "../features/Education/EducationForm";
import { SkillsForm } from "../features/Skills/SkillsForm";
import { useAppDispatch } from "../app/hooks";
import { addEmploymentItem } from "../features/Employment/EmploymentSlice";
import { nanoid } from "@reduxjs/toolkit";
import { addEducationItem } from "../features/Education/EducationSlice";
import { addSkill } from "../features/Skills/SkillsSlice";
import { addLink } from "../features/Links/LinksSlice";
import { LanguagesForm } from "../features/Languages/LanguagesForm";
import { addLanguage } from "../features/Languages/LanguagesSlice";
import { AddSection } from "./AddSection";




export const Form = () => {
    const dispatch = useAppDispatch();
    const sections = [
        {
            title: "Personal Details",
            description: "",
            component: PersonalDetails
        },
        {
            title: "Professional Summary",
            description: "Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skills.",
            component: Summary
        },
        {
            title: "Employment History",
            description: "Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z).",
            component: EmploymentDetailsForm,
            actionText: "Add",
            actionIcon: <AddIcon />,
            onActionClick() {
                dispatch(addEmploymentItem({
                    id: nanoid(),
                    jobTitle: "",
                    employer: "",
                    startDate: null,
                    endDate: null,
                    city: "",
                    description: []
                }));
            }
        },
        {
            title: "Education History",
            description: "A varied education on your resume sums up the value that your learnings and background will bring to job.",
            component: EducationForm,
            actionText: "Add",
            actionIcon: <AddIcon />,
            onActionClick() {
                dispatch(addEducationItem({
                    id: nanoid(),
                    school: "",
                    degree: "",
                    startDate: null,
                    endDate: null,
                    city: "",
                    description: []
                }))
            }
        },
        {
            title: "Skills",
            description: "Choose 5 of the most important skills to show your talents! Make sure they match the keywords of the job listing if applying via an online system.",
            component: SkillsForm,
            actionText: "Add",
            actionIcon: <AddIcon />,
            onActionClick() {
                dispatch(addSkill({
                    id: nanoid(),
                    name: "",
                    level: ""
                }))
            }
        },
        {
            title: "Websites & Social Links",
            description: "You can add links to websites you want hiring managers to see! Perhaps It will be  a link to your portfolio, LinkedIn profile, or personal website",
            component: LinksForm,
            actionText: "Add",
            actionIcon: <AddIcon />,
            onActionClick() {
                dispatch(addLink({
                    id: nanoid(),
                    name: "",
                    link: ""
                }));
            }
        },
        {
            title: "Languages",
            description: "",
            component: LanguagesForm,
            actionText: "Add",
            actionIcon: <AddIcon />,
            onActionClick() {
                dispatch(addLanguage({
                    id: nanoid(),
                    language: "",
                    level: ""
                }));
            }
        },
        {
            title: "Add Section",
            description: "",
            component: AddSection
        }
    ]
    const sectionList = sections.map(section => {
        return (
            <Grid
                key={section.title}
                item
                sx={{
                    width: '100%'
                }}
            >

                <SectionLayout
                    title={section.title}
                    description={section.description}
                    actionIcon={section.actionIcon}
                    actionText={section.actionText}
                    onActionClick={section.onActionClick}
                >
                    <section.component />
                </SectionLayout>
            </Grid>
        );
    });
    return (
        <>
            <Grid container spacing={2}>
                {sectionList}
            </Grid>
        </>
    )
}
