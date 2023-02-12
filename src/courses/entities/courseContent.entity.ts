import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CourseContent } from "../interfaces/course.interface";
import { CourseEntity } from "./course.entity";


@Entity({name: "course_contents"})
export class ContentEntity implements CourseContent {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @Column({name: "course_requirements"})
    courseRequirements: string;

    @Column({name: "course_description"})
    courseDescription: string;

    @Column({name: "video_url"})
    videoUrl: string;

    @ManyToOne(() => CourseEntity, (courseId) => courseId.contentId)
    courseId: number;
}