import axios from "axios";
import { API_BASE_URL } from "@/config";

export const HEADERS = {
  ContentJson: {
    "Content-Type": "application/json",
  },
};

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: HEADERS.ContentJson,
});

export { apiClient };
