import { Community } from "src/community/entities/community.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "../interfaces/course.interface";
import { UserType } from "src/community/interface/user.interface";
import { ContentEntity } from "./courseContent.entity";

@Entity({name: "courses"})
export class CourseEntity  {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "course_name"})
    courseName: string;

    @Column({name: "course_price"})
    coursePrice: number;

    @Column({default : true})
    isAvailable: boolean;

    @ManyToOne(() => Community, (UserType) => UserType.courses)
    UserType: Community;

    @OneToMany(() => ContentEntity, (contentId) => contentId.courseId)
    contentId: ContentEntity[];
}
