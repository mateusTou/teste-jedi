import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './tasks';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name) private readonly taskModel: Model<Task>,
  ) {}

  async getAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async getById(id: string): Promise<Task | null> {
    return await this.taskModel.findById(id).exec();
  }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const createdTask = new this.taskModel(createTaskDto);
    return await createdTask.save();
  }

  async update(id: string, UpdateTaskDto: UpdateTaskDto): Promise<Task | null> {
    await this.taskModel.updateOne({ _id: id }, UpdateTaskDto).exec();
    return this.getById(id);
  }

  async deleteTask(id: string): Promise<{ deletedCount?: number }> {
    return await this.taskModel.deleteOne({ _id: id }).exec();
  }
}
