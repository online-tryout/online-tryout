export interface Option {
    id: string;
    content: string;
    question_id: string;
    is_true: boolean;
    option_order: number;
    created_at: Date;
    updated_at: Date;
}