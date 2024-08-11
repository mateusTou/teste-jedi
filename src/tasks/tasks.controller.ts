import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './tasks';

@Controller('tasks')
export class TasksController {
  constructor(private taskservice: TaskService) {}

  @Get()
  async getAll(): Promise<Task[]> {
    return this.taskservice.getAll();
  }
  @Get(':id')
  async getById(@Param('id') id: string): Promise<Task> {
    return this.taskservice.getById(id);
  }
  @Post()
  async createTask(@Body() task: Task): Promise<Task> {
    return this.taskservice.create(task);
  }
  @Put(':id')
  async updateTask(@Param('id') id: string, @Body() task: Task): Promise<Task> {
    return this.taskservice.update(id, task);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    this.taskservice.deleteTask(id);
    return 'Task deletada com sucesso';
  }

  @Patch('/:id/complete')
  async completeTask(
    @Param('id') id: string,
    @Body() task: Task,
  ): Promise<Task> {
    return this.taskservice.update(id, { isCompleted: true });
  }

  @Patch('/:id/incomplete')
  async incompleteTask(
    @Param('id') id: string,
    @Body() task: Task,
  ): Promise<Task> {
    return this.taskservice.update(id, { isCompleted: false });
  }
}
