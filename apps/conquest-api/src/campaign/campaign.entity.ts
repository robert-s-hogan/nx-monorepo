import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Campaign {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  name: string;

  @Column({ nullable: true, type: 'text' })
  notes: string;

  @Column({ nullable: true })
  playerCount: number;

  @Column({ nullable: true })
  playerStartingExperience: number;

  @Column({ nullable: true })
  encounterAdjustedExperience: number;

  @Column({ nullable: true })
  encounterExperience: number;

  @Column({ nullable: true, type: 'text' })
  intro: string;

  @Column({ nullable: true })
  mapTerrainType: string;

  @Column({ nullable: true })
  mapDimensions: string;

  @Column({ nullable: true })
  hasWeather: boolean;

  @Column({ nullable: true })
  timeOfDay: string;

  @Column({ nullable: true, type: 'text' })
  objective: string;

  @Column({ nullable: true })
  adventuringDayXpLimit: number;

  @Column({ nullable: true })
  xpThresholdsByCharacterLevelEasy: number;

  @Column({ nullable: true })
  xpThresholdsByCharacterLevelMedium: number;

  @Column({ nullable: true })
  xpThresholdsByCharacterLevelHard: number;

  @Column({ nullable: true })
  xpThresholdsByCharacterLevelDeadly: number;

  @Column({ nullable: true })
  adventuringDayXpStart: number;

  @Column({ nullable: true, type: 'text' })
  encounterDifficultyOptions: string;

  @Column({ nullable: true })
  adventuringDayXpFinish: number;

  @Column({ nullable: true })
  playerExperienceEarnedFromEncounter: number;

  @Column({ nullable: true })
  playerExperienceFinish: number;

  @Column({ nullable: true })
  levelOfPlayersCharactersFinish: number;

  @Column({ nullable: true })
  percentageOfAdventuringDayXpRemaining: number;

  @Column({ nullable: true })
  shortRestNeededFirstOne: boolean;

  @Column({ nullable: true })
  shortRestNeededSecondOne: boolean;

  @Column({ nullable: true })
  shortRestCounter: number;

  @Column({ nullable: true })
  longRestNeeded: boolean;
}
