import {
  Image,
  FileText,
  Type,
  Code2,
  Calculator,
  GraduationCap,
  Palette,
  FolderArchive,
} from "lucide-react";

export const categories = [
  {
    name: "Image Tools",
    slug: "image",
    description: "Compress, resize and convert images.",
    icon: Image,
  },
  {
    name: "PDF Tools",
    slug: "pdf",
    description: "Work with PDF files quickly.",
    icon: FileText,
  },
  {
    name: "Text Tools",
    slug: "text",
    description: "Useful tools for working with text.",
    icon: Type,
  },
  {
    name: "Developer Tools",
    slug: "developer",
    description: "Utilities for developers and programmers.",
    icon: Code2,
  },
  {
    name: "Calculator Tools",
    slug: "calculator",
    description: "Fast and accurate everyday calculations.",
    icon: Calculator,
  },
  {
    name: "Student Tools",
    slug: "student",
    description: "Tools designed for students and education.",
    icon: GraduationCap,
  },
  {
    name: "Creator Tools",
    slug: "creator",
    description: "Useful tools for content creators.",
    icon: Palette,
  },
  {
    name: "File Tools",
    slug: "file",
    description: "Manage and optimize your files.",
    icon: FolderArchive,
  },
];