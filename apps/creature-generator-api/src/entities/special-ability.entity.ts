import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Creature } from './creature.entity';

@Entity()
export class SpecialAbility {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @ManyToOne(() => Creature, (creature) => creature.specialAbilities)
  creature: Creature;
}
