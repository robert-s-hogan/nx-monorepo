import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

//entities
import { User } from '../user/user.entity';
import { Encounter } from '../encounter/encounter.entity';

@Entity()
export class Campaign {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Encounter, (encounter) => encounter.campaign)
  encounters: Encounter[];

  @ManyToOne(() => User)
  @JoinColumn({ name: 'account_id' })
  user: User;

  @Column()
  name: string;

  @Column({ nullable: true })
  player_experience_start: number;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @Column({ nullable: true, default: true })
  group_alive: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
