export interface Course {
    id: number;
    adminId: number;
    tutorId: number;
    courseName : string;
    coursePrice : number;
    isAvailable: boolean;
}

export interface CourseContent {
    id: number;
    tutorId: number;
    courseId: number;
    courseContent: string;
    createdBy: string;
    courseRequirement: string;
    courseDescription: string;
    videoUrl: string;
}