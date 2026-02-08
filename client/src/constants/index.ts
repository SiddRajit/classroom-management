import { Subject } from "@/types";

export const DEPARTMENTS = ["CS", "Math", "English"];

export const DEPARTMENTS_OPTIONS = DEPARTMENTS.map((dept) => ({
  value: dept,
  label: dept,
}));

export const MOCK_SUBEJCTS: Subject[] = [
  {
    id: 1,
    code: "CSCI-101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description:
      "Fundamental concepts of computing, problem solving, and programming using Python.",
    createdAt: "2025-08-01T10:00:00.000Z",
  },
  {
    id: 2,
    code: "MATH-201",
    name: "Linear Algebra",
    department: "Mathematics",
    description:
      "Matrices, vector spaces, linear transformations, and applications.",
    createdAt: "2025-08-02T09:30:00.000Z",
  },
  {
    id: 3,
    code: "PHYS-150",
    name: "Classical Mechanics",
    department: "Physics",
    description:
      "Newtonian mechanics, conservation laws, and oscillatory motion.",
    createdAt: "2025-08-03T08:15:00.000Z",
  },
];
