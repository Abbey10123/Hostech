import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Assignment } from "../interfaces/assignment.interface";


@Entity({name: "assignments"})
export class AssignmentEntity implements Assignment{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "int", name: "tutor_id"})
    tutorId: number;

    @Column({type:"int", name: "admin_id"})
    adminId: number;

    @Column({type:"int", name: "course_id"})
    courseId: number;

    @Column({type:"datetime" ,name: "created_at"})
    createdAt: Date;

    @Column({type:"datetime" ,name: "due_date"})
    dueDate: Date;
}
