import { requestHandler } from "@/api/http.ts";

export const fetchBanners = async () => {
   return await requestHandler("get", "/banners")
}
