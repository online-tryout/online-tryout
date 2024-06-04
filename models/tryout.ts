import Module from "module";

export interface Tryout {
  id: string;
  title: string;
  price: number;
  status: string;
  started_at: Date;
  endedAt: Date;
  created_at: Date;
  updated_at: Date;
  modules: Module[];
}
