import { Calculator, Code2, FileText, Image, KeyRound, Palette, QrCode, Type, Wand2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type CategorySlug = "image" | "pdf" | "text" | "developer" | "calculator" | "student" | "creator" | "file" | "seo" | "color" | "time-date" | "utility";
export type ToolKind = "image" | "pdf" | "text" | "developer" | "calculator" | "qr" | "password" | "uuid" | "hash";
export interface Tool { name: string; slug: string; category: CategorySlug; description: string; keywords: string[]; seoTitle: string; seoDescription: string; icon: LucideIcon; kind: ToolKind; status: "live"; popular?: boolean; }
export interface Category { name: string; slug: CategorySlug; description: string; icon: LucideIcon; }
const make = (name: string, slug: string, category: CategorySlug, description: string, kind: ToolKind, icon: LucideIcon, keywords: string[], popular = false): Tool => ({ name, slug, category, description, kind, icon, keywords, popular, status: "live", seoTitle: `${name} — Free Online Tool`, seoDescription: description });
export const categories: Category[] = [
  ["Image Tools","image","Compress, resize, crop and convert images.",Image], ["PDF Tools","pdf","Create and organize PDF documents locally.",FileText], ["Text Tools","text","Clean up and transform text instantly.",Type], ["Developer Tools","developer","Everyday encoding, JSON and hashing utilities.",Code2], ["Calculator Tools","calculator","Clear calculations for everyday decisions.",Calculator], ["Student Tools","student","Simple helpers for study and coursework.",Wand2], ["Creator Tools","creator","Tools for links, assets and content.",QrCode], ["File Tools","file","Private browser-based file utilities.",FileText], ["SEO Tools","seo","Search visibility helpers.",Wand2], ["Color Tools","color","Color utilities for creative work.",Palette], ["Time & Date Tools","time-date","Practical date and time calculations.",Calculator], ["Utility Tools","utility","Small tools that solve everyday tasks.",KeyRound],
].map(([name, slug, description, icon]) => ({ name: name as string, slug: slug as CategorySlug, description: description as string, icon: icon as LucideIcon }));
export const tools: Tool[] = [
  make("Image Compressor","image-compressor","image","Compress JPG, PNG and WebP images directly in your browser.","image",Image,["image","compress","jpg","png","webp"],true),
  make("Image Resizer","image-resizer","image","Resize an image to exact dimensions without uploading it.","image",Image,["resize","width","height","image"],true),
  make("Image Cropper","image-cropper","image","Crop images to freeform or common aspect ratios.","image",Image,["crop","aspect ratio","image"]),
  make("JPG to PNG","jpg-to-png","image","Convert JPG and JPEG images to PNG locally.","image",Image,["jpg","jpeg","png","convert"]),
  make("PNG to JPG","png-to-jpg","image","Convert PNG images to JPG with a chosen background.","image",Image,["png","jpg","convert"]),
  make("WebP Converter","webp-converter","image","Convert between WebP, JPG and PNG.","image",Image,["webp","jpg","png","convert"]),
  make("PDF Compressor","pdf-compressor","pdf","Rewrite a PDF locally to remove document metadata where possible.","pdf",FileText,["pdf","compress","metadata"]),
  make("PDF Merger","pdf-merger","pdf","Combine multiple PDF files into one document.","pdf",FileText,["pdf","merge","combine"],true),
  make("PDF Splitter","pdf-splitter","pdf","Split selected PDF pages into individual PDF files.","pdf",FileText,["pdf","split","pages"]),
  make("JPG to PDF","jpg-to-pdf","pdf","Create a PDF from one or more JPG or PNG images.","pdf",FileText,["jpg","png","pdf","images"]),
  make("PDF to JPG","pdf-to-jpg","pdf","Render PDF pages as JPG images in your browser.","pdf",FileText,["pdf","jpg","convert","images"]),
  make("PDF Page Extractor","pdf-page-extractor","pdf","Extract a chosen range of pages into a new PDF.","pdf",FileText,["pdf","extract","pages"]),
  make("Word Counter","word-counter","text","Count words, characters, sentences and reading time live.","text",Type,["word","character","count"],true),
  make("Character Counter","character-counter","text","Count characters, words and lines in your text.","text",Type,["character","count","lines"]),
  make("Case Converter","case-converter","text","Convert text between common writing and code cases.","text",Type,["uppercase","lowercase","camelcase"]),
  make("Duplicate Line Remover","duplicate-line-remover","text","Remove duplicate lines from pasted text.","text",Type,["duplicate","lines","remove"]),
  make("Text Sorter","text-sorter","text","Sort, reverse and clean lines of text.","text",Type,["sort","lines","alphabetical"]),
  make("JSON Formatter","json-formatter","developer","Format, minify and validate JSON.","developer",Code2,["json","format","minify","validate"],true),
  make("JSON Validator","json-validator","developer","Validate JSON with clear error feedback.","developer",Code2,["json","validate"]),
  make("Base64 Encoder / Decoder","base64-encoder","developer","Encode and decode Unicode Base64 text.","developer",Code2,["base64","encode","decode"]),
  make("URL Encoder / Decoder","url-encoder","developer","Encode or decode URL components.","developer",Code2,["url","encode","decode"]),
  make("UUID Generator","uuid-generator","developer","Generate secure UUID v4 values in your browser.","uuid",KeyRound,["uuid","guid","generator"]),
  make("Hash Generator","hash-generator","developer","Create SHA-256, SHA-384 or SHA-512 hashes.","hash",Code2,["hash","sha","sha-256"]),
  make("Percentage Calculator","percentage-calculator","calculator","Calculate percentages, changes and differences.","calculator",Calculator,["percentage","increase","decrease"],true),
  make("Age Calculator","age-calculator","time-date","Calculate your age at any target date.","calculator",Calculator,["age","date","birthday"]),
  make("Discount Calculator","discount-calculator","calculator","Calculate a discount amount and final price.","calculator",Calculator,["discount","price","sale"]),
  make("EMI Calculator","emi-calculator","calculator","Estimate monthly repayments and total loan cost.","calculator",Calculator,["emi","loan","interest"]),
  make("GST Calculator","gst-calculator","calculator","Calculate tax-inclusive or tax-exclusive totals.","calculator",Calculator,["gst","tax","inclusive"]),
  make("QR Code Generator","qr-code-generator","creator","Create downloadable QR codes for text, links and email.","qr",QrCode,["qr","code","generator"],true),
  make("Password Generator","password-generator","utility","Generate strong passwords locally using secure randomness.","password",KeyRound,["password","secure","generator"],true),
];
export const getTool = (slug: string) => tools.find((tool) => tool.slug === slug);
export const getCategory = (slug: string) => categories.find((category) => category.slug === slug);
