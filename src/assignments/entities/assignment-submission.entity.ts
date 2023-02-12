import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AssignmentSubmission } from "../interfaces/assignment.interface";

@Entity({name: "assignment_submissions"})
export class AssignmentSubmissionEntity implements AssignmentSubmission{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "int", name: "assignment_id"})
    assignmentId: number;

    @Column()
    score: number;

    @Column({type: "boolean", default: false})
    completion: boolean;

    @Column({ name: "created_at"})
    createdAt: Date;

    @Column({type: "int", name: "student_id"})
    studentId: number;
}