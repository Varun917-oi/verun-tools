import {
  Image,
  FileText,
  Code2,
  Calculator,
  QrCode,
  Type,
  FileArchive,
  Palette,
} from "lucide-react";

export type ToolCategory =
  | "image"
  | "pdf"
  | "text"
  | "developer"
  | "calculator"
  | "student"
  | "creator"
  | "file";

export interface Tool {
  name: string;
  slug: string;
  description: string;
  category: ToolCategory;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  popular?: boolean;
  status?: "live" | "coming-soon";
}

export const tools: Tool[] = [
  {
    name: "Image Compressor",
    slug: "image-compressor",
    description: "Compress JPG, PNG and WebP images while keeping great quality.",
    category: "image",
    icon: Image,
    popular: true,
    status: "live",
  },

  {
    name: "Image Resizer",
    slug: "image-resizer",
    description: "Resize images to any dimension quickly and easily.",
    category: "image",
    icon: Image,
    popular: true,
    status: "coming-soon",
  },

  {
    name: "JPG to PNG",
    slug: "jpg-to-png",
    description: "Convert JPG images to PNG format instantly.",
    category: "image",
    icon: Image,
    status: "coming-soon",
  },

  {
    name: "PDF Compressor",
    slug: "pdf-compressor",
    description: "Reduce PDF file size for easier sharing and storage.",
    category: "pdf",
    icon: FileText,
    popular: true,
    status: "coming-soon",
  },

  {
    name: "PDF Merger",
    slug: "pdf-merger",
    description: "Combine multiple PDF files into one document.",
    category: "pdf",
    icon: FileText,
    status: "coming-soon",
  },

  {
    name: "Word Counter",
    slug: "word-counter",
    description: "Count words, characters, sentences and paragraphs.",
    category: "text",
    icon: Type,
    popular: true,
    status: "coming-soon",
  },

  {
    name: "JSON Formatter",
    slug: "json-formatter",
    description: "Format, beautify and validate JSON data.",
    category: "developer",
    icon: Code2,
    popular: true,
    status: "coming-soon",
  },

  {
    name: "Base64 Encoder",
    slug: "base64-encoder",
    description: "Encode and decode Base64 text quickly.",
    category: "developer",
    icon: Code2,
    status: "coming-soon",
  },

  {
    name: "Percentage Calculator",
    slug: "percentage-calculator",
    description: "Calculate percentages quickly and accurately.",
    category: "calculator",
    icon: Calculator,
    popular: true,
    status: "coming-soon",
  },

  {
    name: "QR Code Generator",
    slug: "qr-code-generator",
    description: "Generate QR codes for text, URLs and more.",
    category: "creator",
    icon: QrCode,
    popular: true,
    status: "coming-soon",
  },

  {
    name: "Color Picker",
    slug: "color-picker",
    description: "Pick colors and get HEX, RGB and HSL values.",
    category: "creator",
    icon: Palette,
    status: "coming-soon",
  },

  {
    name: "File Compressor",
    slug: "file-compressor",
    description: "Compress supported files directly in your browser.",
    category: "file",
    icon: FileArchive,
    status: "coming-soon",
  },
];
