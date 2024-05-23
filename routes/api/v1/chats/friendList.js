import rooms from "../../../../models/rooms.ts"
import Friends from "../../../../models/friends.ts"
import csrftoken from "../../../../models/csrftoken.ts"
import users from "../../../../models/users.ts"
import { getCookies } from "$std/http/cookie.ts"
export const handler = {
  async POST(req, ctx) {
    if (!ctx.state.data.loggedIn) {
      return new Response(JSON.stringify({ "status": "Please Login" }), {
        headers: { "Content-Type": "application/json" },
        status: 401,
      })
    }
    const cookies = getCookies(req.headers)
    const data = await req.json()
    if (typeof data.csrftoken !== "string") {
      return { status: false }
    }
    const iscsrfToken = await csrftoken.findOne({ token: data.csrftoken })
    if (iscsrfToken === null || iscsrfToken === undefined) {
      return new Response(
        JSON.stringify({ "status": "csrftoken error" }),
        {
          headers: { "Content-Type": "application/json" },
          status: 200,
        },
      )
    }
    if (iscsrfToken.sessionID !== cookies.sessionid) {
      return { status: false }
    }
    await csrftoken.deleteOne({ token: data.csrftoken })
    /*                                                                          */
    try {
      const chatRooms = await rooms.find({ users: ctx.state.data.userid.toString() })
      const friendsInfo = await Friends.findOne({
        user: ctx.state.data.userid.toString(),
      }, {})
      if (friendsInfo === null || friendsInfo === undefined) {
        return new Response(
          JSON.stringify({ "status": "You are alone" }),
          {
            headers: { "Content-Type": "application/json" },
            status: 200,
          },
        )
      }
      if (
        chatRooms === null || chatRooms === undefined
      ) {
        return new Response(
          JSON.stringify({ "status": "You are alone" }),
          {
            headers: { "Content-Type": "application/json" },
            status: 200,
          },
        )
      }
      if(chatRooms.length === 0) {
        return new Response(
          JSON.stringify({ "status": "You are alone" }),
          {
            headers: { "Content-Type": "application/json" },
            status: 200,
          },
        )
      }
      const result = await Promise.all(
        chatRooms.map( async(room) => {
          if (room.types === "friend") {
            const friendID = room.users.filter((user) => user !== ctx.state.data.userid.toString())
            //const friendNameInfo = await Friends.findOne({ user: friendID[0] })
            const friendName = await users.findOne({ _id: friendID[0] })
            const result = {
              roomName: friendName.userName,
              lastMessage: room.latestmessage,
              roomID: room.name,
              latestMessageTime: room.latestMessageTime,
            }
            return result
          } else if (room.types === "group") {
            const result = {
              roomName: room.name,
              lastMessage: room.latestmessage,
              roomID: room._id,
            }
            return result
          } else {
            return
          }
        })
      )
      return new Response(
        JSON.stringify({ "status": "success", "chatRooms": result }),
        {
          headers: { "Content-Type": "application/json" },
        },
      )
    } catch (error) {
      console.log(error)
      return new Response(JSON.stringify({ "status": "error" }), {
        headers: { "Content-Type": "application/json" },
        status: 500,
      })
    }
  },
}
