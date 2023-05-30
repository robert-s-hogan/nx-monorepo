import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Creature } from './creature.entity';

@Entity()
export class Action {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  damage: string;

  @Column()
  reach: string;

  @ManyToOne(() => Creature, (creature) => creature.actions)
  creature: Creature;
}
