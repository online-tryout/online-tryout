export interface TransactionData {
  user_id: string;
  tryout_name: string;
  tryout_id: string;
  id: string;
  amount: string;
  bank: string;
  account_number: string;
}

export interface TransactionIntent {
  user_id: string | null;
  tryout_id: string;
  tryout_name: string;
  amount: string;
  bank: string;
  account_number: string;
}