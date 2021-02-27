import {uuid} from 'uuidv4'
import {PrimaryColumn,Column, Entity, PrimaryGeneratedColumn, CreateDateColumn} from 'typeorm'
@Entity('tools')
class Tool {
  @PrimaryGeneratedColumn('uuid')
  @PrimaryColumn()
  id: string;
  @Column()
  title: string;
  @Column()
  link: string;
  @Column()
  description: string;
  @Column('jsonb')
  tags: string[]
  @CreateDateColumn()
  created_at: Date
}

export default Tool;