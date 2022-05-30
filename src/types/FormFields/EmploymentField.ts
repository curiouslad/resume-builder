import { Descendant } from "slate";

export interface EmploymentField {
    id: string;
    jobTitle: string;
    employer: string;
    startDate: string | null;
    endDate: string | null;
    city: string;
    description: Descendant[]
};