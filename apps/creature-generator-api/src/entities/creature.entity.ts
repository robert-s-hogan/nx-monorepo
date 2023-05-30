import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Action } from '../entities/action.entity';
import { SpecialAbility } from '../entities/special-ability.entity';

@Entity()
export class Creature {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text', { nullable: true })
  description: string;

  @Column('text', { nullable: true })
  imagePrompt: string;

  @Column('int')
  armorClass: number;

  @Column('int')
  hitPoints: number;

  @Column()
  speed: string;

  @Column('int')
  strength: number;

  @Column('int')
  dexterity: number;

  @Column('int')
  constitution: number;

  @Column('int')
  intelligence: number;

  @Column('int')
  wisdom: number;

  @Column('int')
  charisma: number;

  @OneToMany(() => Action, (action) => action.creature)
  actions: Action[];

  @OneToMany(() => SpecialAbility, (specialAbility) => specialAbility.creature)
  specialAbilities: SpecialAbility[];
}
