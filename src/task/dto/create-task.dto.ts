import { IsBoolean, IsEnum, IsNotEmpty, IsString } from 'class-validator';

import { TaskCategory } from '../enum/task-category.enum';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsEnum(TaskCategory)
  category: TaskCategory;
}
