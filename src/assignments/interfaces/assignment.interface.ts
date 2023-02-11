export interface Assignment {
  id: number;
  courseId: number;
  createdAt: Date;
  dueDate: Date;
}

export interface AssignmentSubmission {
  id: number;
  assignmentId: number;
  score: number;
  completion: boolean;
  createdAt: Date;
  studentId: number;
}
