import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './tasks';

@Injectable()
export class TaskService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  async getAll(): Promise<Task[]> {
    return await this.taskModel.find().exec();
  }

  async getById(id: string): Promise<Task | null> {
    return await this.taskModel.findById(id).exec();
  }

  async create(task: Task): Promise<Task> {
    const createdTask = new this.taskModel(task);
    return await createdTask.save();
  }

  async update(id: string, task: Partial<Task>): Promise<Task | null> {
    await this.taskModel.updateOne({ _id: id }, task).exec();
    return this.getById(id);
  }

  async deleteTask(id: string): Promise<{ deletedCount?: number }> {
    return await this.taskModel.deleteOne({ _id: id }).exec();
  }
}
