import { Document } from 'mongoose';

export class Task extends Document {
  title: string;
  description?: string;
  dueDate?: string;
  isCompleted: boolean;
  createdAt: string;
  updatedAt: string;
}
