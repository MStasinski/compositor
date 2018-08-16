export type Course = {
  id: string;
  title: string;
  author: string;
  description: string;
  topic: string;
  url: string;
  voteCount: number;
}

export type Question = {
  id: string,
  section: string,
  theme: string,
  url: string
}

export type Query = {
  allCourses: Course[];
  questionById: Question
  questionBySectionAndTheme: Question[]
}
