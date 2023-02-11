export enum UserType {
  Admin = 'administrator',
  Student = 'student',
  Tutor = 'facilitator',
}

export enum Gender {
  Male = 'male',
  Female = 'female',
  PreferNotToSay = 'prefer-not-to-say',
}

export interface User {
  id: number;
  fullName: string;
  phoneNumber: string;
  email: string;
  password: string;
  gender: Gender;
  userType: UserType;
  title: string;
}
