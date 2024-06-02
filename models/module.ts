import { Question } from "./question";

export interface Module {
    id: string;
    title: string;
    tryout_id: string;
    module_order: number;
    created_at: Date;
    updated_at: Date;
    questions: Array<Question>;
}