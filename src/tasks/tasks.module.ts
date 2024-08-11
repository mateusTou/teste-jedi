import { MongooseModule } from '@nestjs/mongoose';
import { TasksController } from './tasks.controller';
import { Module } from '@nestjs/common';
import { TaskSchema } from './schemas/task.schema';
import { TaskService } from './task.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }])],
  controllers: [TasksController],
  providers: [TaskService],
})
export class TasksModule {}
