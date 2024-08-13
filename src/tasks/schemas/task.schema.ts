import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Task } from '../tasks';

export type TaskDocument = mongoose.HydratedDocument<Task>;

@Schema()
export class TaskNest {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  id: mongoose.Types.ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop({ required: false })
  description: string;
  @Prop({ type: Date, required: true, default: Date.now })
  createdAt: Date;
  @Prop({ type: Date, required: true, default: Date.now })
  updatedAt: Date;
  @Prop({ type: Date, required: false })
  dueDate: string;
  @Prop({ type: Boolean, default: false })
  isCompleted: Boolean;
}

export const TaskSchema = SchemaFactory.createForClass(TaskNest);
