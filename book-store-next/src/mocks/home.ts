import {http, HttpResponse} from "msw";

export const homeRequest = http.get("/", () => {
    return HttpResponse.json()
})
