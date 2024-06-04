export interface Transaction {
  id: string;
  user_id: string;
  tryout_id: string;
  amount: string;
  created_at: Date;
}

export interface TransactionIntent {
  user_id: string | null;
  tryout_id: string;
  tryout_name: string;
  amount: string;
  bank: string;
  account_number: string;
}