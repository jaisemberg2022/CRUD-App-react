import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const baseUrl = "http://localhost:4000/users";

export const generateId = (arr: any) => {
  let id = 1;
  if (arr.length > 0) id = arr[arr.length - 1].id + 1;
  return id;
};