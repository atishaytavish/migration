import { Table, Column, Model, HasOne, BelongsToMany } from 'sequelize-typescript';
import { Address } from './address.model';
import { Course } from './course.model';
import { StudentCourse } from './student-course.model';

@Table
export class Student extends Model<Student> {
  @Column
  name: string;

  @HasOne(() => Address)
  address: Address;

  @BelongsToMany(() => Course, () => StudentCourse)
  courses: Course[];
}