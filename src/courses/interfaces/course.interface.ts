export interface Course {
  id: number;
  adminId: number;
  tutorId: number;
  courseName: string;
  coursePrice: number;
  isAvailable: boolean;
}

export interface CourseContent {
  id: number;
  courseId: number;
  content: string;
  courseRequirements: string;
  courseDescription: string;
  videoUrl: string;
}
