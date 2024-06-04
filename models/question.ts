import { Option } from "./option";

export interface Question {
    id: string;
    content: string;
    module_id: string;
    question_order: number;
    created_at: Date;
    updated_at: Date;
    options: Array<Option>;
    answer: string;
}