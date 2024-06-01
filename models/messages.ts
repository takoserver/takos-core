import mongoose from "mongoose"
export const messagesSchema = new mongoose.Schema({
  roomid: {
    type: String,
    required: true, // roomid is now required
  },
  sender: {
    type: String,
    required: true, // sender is now required
  },
  message: {
    type: String,
    required: true, // message is now required
  },
  read: [
    {
      userid: {
        type: String,
        required: true, // userid is now required
      },
      readAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  timestamp: { type: Date, default: Date.now, required: true },
})
messagesSchema.index({ timestamp: 1 })
const messages = mongoose.model("messages", messagesSchema)
export default messages
