import axios from "axios";

type StickyData = {
    stickyName: string;
    stickyType: string;
    stickyContent?: string;
    stickyDueDate?: Date;
}

export async function getStickies() {
    const response = await axios.get(`/api/sticky`);
    return response.data;
}

export async function createSticky(data: StickyData) {
    const response = await axios.post(`/api/sticky`, data);
    return response.data;
}