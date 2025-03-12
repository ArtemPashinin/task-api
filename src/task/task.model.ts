import { Column, DataType, Model, Table } from 'sequelize-typescript';

import { CreateTaskDto } from './dto/create-task.dto';
import { TaskCategory } from './enum/task-category.enum';

@Table({ tableName: 'task', timestamps: true })
export class TaskModel extends Model<TaskModel, CreateTaskDto> {
  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @Column({
    type: DataType.ENUM(...Object.values(TaskCategory)),
    allowNull: false,
  })
  category: TaskCategory;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  fulfilled: boolean;
}
