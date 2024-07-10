//csrftokenを発行
// GET /api/v2/client/csrftoken
// -> { status: boolean, message: string, csrftoken: string }
import csrftoken from "../models/csrftoken.ts"
import { getCookies } from "$std/http/cookie.ts"
export const handler = {
    async GET(req: Request, ctx: any) {
        if (!ctx.state.data.loggedIn) {
            return ctx.json({ status: false, message: "You are not logged in" })
        }
        const array = new Uint8Array(64)
        crypto.getRandomValues(array)
        const csrftoken = Array.from(
            array,
            (byte) => byte.toString(16).padStart(2, "0"),
        ).join("")
        const cookies = getCookies(req.headers)
        const sessionid = cookies.sessionid
        await csrfToken.create({ token: csrftoken, sessionID: sessionid })
        return new Response (
            JSON.stringify(
                status: true,
                csrftoken: csrftoken
            )
        )
        }
}