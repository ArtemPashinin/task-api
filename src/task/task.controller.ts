import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskModel } from './task.model';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  public async findAll(): Promise<TaskModel[]> {
    return await this.taskService.findAll();
  }

  @Get(':id')
  public async findOneById(@Param('id') id: number): Promise<TaskModel> {
    return await this.taskService.findOneById(id);
  }

  @Post()
  public async createOne(
    @Body() createTaskDto: CreateTaskDto,
  ): Promise<TaskModel> {
    return await this.taskService.createOne(createTaskDto);
  }

  @Delete(':id')
  public async deleteOneById(@Param('id') id: number): Promise<TaskModel> {
    return await this.taskService.deleteOneById(id);
  }
}
