import { Table, Column, Model, BelongsToMany } from 'sequelize-typescript';
import { Student } from './student.model';
import { StudentCourse } from './student-course.model';

@Table
export class Course extends Model<Course> {
  @Column
  name: string;

  @BelongsToMany(() => Student, () => StudentCourse)
  students: Student[];
}