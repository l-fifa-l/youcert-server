import mongoose from "mongoose";
const { Schema } = mongoose;

const coursechema = new Schema(
  {
    title: {
      type: String,
      required: "Title is required",
    },
    slug: {
      type: String,
      lowercase: true,
    },
    videoId: {
      // https://www.youtube-nocookie.com/embed/i8eBBG46H8A
      type: String,
    },
    playListId: {
      // https://www.youtube.com/playlist?list=PLzMcBGfZo4-lmGC8VW0iu6qfMHjy7gLQ3
      type: String,
    },
    thumbnail: {
      // https://img.youtube.com/vi/08smCjKWNL0/maxresdefault.jpg
      type: String,
      // required: true,
      default: "/avatar.png",
    },
    author: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      required: "Description is required",
    },

    genre: String,
  },

  { timestamps: true }
);

export default mongoose.model("Course", coursechema);
