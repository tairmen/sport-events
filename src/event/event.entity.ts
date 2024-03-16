import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Playground } from '../playground/playground.entity';
import { User } from '../user/user.entity';

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    startTime: Date;

    @Column()
    endTime: Date;

    @ManyToOne(() => Playground, playground => playground)
    playground: Playground;

    @ManyToMany(() => User)
    @JoinTable()
    participants: User[];
}