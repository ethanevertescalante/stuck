import axios from "axios";
import { StickyType } from "@/app/generated/prisma/enums";

export type StickyData = {
  stickyName: string;
  stickyType: StickyType;
  stickyContent?: string;
  stickyDueDate?: Date;
  id: string;
};

export async function getStickies(): Promise<StickyData[]> {
  const response = await axios.get<{ data: StickyData[] }>(`/api/sticky`);
  return response.data.data;
}

export async function getSticky(id: string) {
  const response = await axios.get<{ data: StickyData[] }>(`/api/sticky/${id}`);
  return response.data.data
}


export async function createSticky(data: StickyData) {
  const response = await axios.post(`/api/sticky`, data);
  return response.data;
}
