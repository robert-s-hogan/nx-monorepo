import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Campaign } from '../campaign/campaign.entity';

@Entity()
export class Encounter {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Campaign, (campaign) => campaign.encounters)
  campaign: Campaign;

  @Column()
  campaignId: number;

  @Column({ nullable: true })
  player_experience_start: number;

  @Column({ nullable: true })
  encounter_adjusted_experience: number;

  @Column({ nullable: true })
  encounter_experience: number;

  @Column({ nullable: true })
  player_count: number;

  @Column({ nullable: true })
  notes: string;

  @Column({ nullable: true })
  encounter_success: boolean;
}
