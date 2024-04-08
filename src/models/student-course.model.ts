import { Table, Model, ForeignKey } from 'sequelize-typescript';
import { Student } from './student.model';
import { Course } from './course.model';

@Table
export class StudentCourse extends Model<StudentCourse> {
  @ForeignKey(() => Student)
  studentId: number;

  @ForeignKey(() => Course)
  courseId: number;
}