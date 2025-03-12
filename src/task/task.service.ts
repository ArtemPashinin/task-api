import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskModel } from './task.model';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(TaskModel) private readonly taskModel: typeof TaskModel,
  ) {}

  public async findAll(): Promise<TaskModel[]> {
    return await this.taskModel.findAll();
  }

  public async findOneById(id: number): Promise<TaskModel> {
    const task = await this.taskModel.findByPk(id);
    if (!task)
      throw new HttpException(
        'There is no issue with this id',
        HttpStatus.NOT_FOUND,
      );
    return task;
  }

  public async deleteOneById(id: number): Promise<TaskModel> {
    const task = await this.findOneById(id);
    await this.taskModel.destroy({ where: { id: id } });
    return task;
  }

  public async createOne(createTaskDto: CreateTaskDto): Promise<TaskModel> {
    try {
      return await this.taskModel.create(createTaskDto);
    } catch (err) {
      throw new HttpException(
        'Issue creation error',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
  }
}
