// faculty.model.ts
import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Faculty extends Model<Faculty> {
  @Column
  name: string;
}
