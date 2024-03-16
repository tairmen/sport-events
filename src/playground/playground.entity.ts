import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Playground {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    description: string;
}