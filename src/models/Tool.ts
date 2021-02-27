import {uuid} from 'uuidv4'
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'
@Entity('tools')
class Tool {
  @PrimaryGeneratedColumn('uuid')
  @Column()
  uuid: string;
  @Column()
  title: string;
  @Column()
  link: string;
  @Column()
  description: string;
  @Column('jsonb')
  tags: string[]
  @Column('timestamp with date time')
  created_at: Date
}

export default Tool;