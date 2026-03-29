const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!apiBaseUrl) {
  throw new Error("Missing NEXT_PUBLIC_API_BASE_URL in environment. Set it in .env.local or .env.example.");
}

export const API_BASE_URL = apiBaseUrl;
export const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
};
