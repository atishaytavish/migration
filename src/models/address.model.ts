import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Student } from './student.model';

@Table
export class Address extends Model<Address> {
  @Column
  street: string;

  @Column
  city: string;

  @Column
  state: string;

  @Column
  zip: string;

  @ForeignKey(() => Student)
  studentId: number;
}