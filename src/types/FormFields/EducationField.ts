import { Descendant } from "slate";

export interface EducationField {
    id: string;
    school: string;
    degree: string;
    startDate: string | null;
    endDate: string | null;
    city: string;
    description: Descendant[]
};