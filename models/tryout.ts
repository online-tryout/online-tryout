import Module from "module";

export interface Tryout {
  id: string;
  title: string;
  price: number;
  status: string;
  startedAt: Date;
  endedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  modules: Module[];
}
