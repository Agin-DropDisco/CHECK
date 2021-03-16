const UserSchema = {
  doctype: "tile",
  content: {
    type: "object",
    title: "Schema Profile",
    $schema: "http://json-schema.org/draft-07/schema#",
    properties: {
      fullname: {
        type: "string",
        maxLength: 150
      },
      username: {
        type: "string",
        maxLength: 150

      },
      email: {
        type: "string",
        maxLength: 150
      },
      password: {
        type: "string",
        minLength: 6,
        maxLength: 12
      },
      avatar: {
        type: "string",
        default: "https://res.cloudinary.com/douy56nkf/image/upload/v1594060920/defaults/txxeacnh3vanuhsemfc8.png"
        // $ref": "#/definitions/imageSources"
      },
      bio: {
        type: "string",
        maxLength: 150
      },
      website: {
        type: "string",
        maxLength: 1250
      },
      followers: {
        type: "array",
        items: {
          type: "string",
          $ref: "#/User",
          pattern: "^[A-Z]{2}$",
          description: "Refers to User",
        }
      },
      followersCount: {
        type: "number",
        default: 0
      },
      followingCount: {
        type: "number",
        default: 0
      },
      following: {
        type: "array",
        items: {
          type: "string",
          $ref: "#/User",
          pattern: "^[A-Z]{2}$",
          description: "Refers to User"
        }
      },
      posts: {
        type: "array",
        items: {
          type: "string",
          $ref: "#/Post",
          pattern: "^[A-Z]{2}$",
          description: "Refers to User"
        }
      },
      postCount: {
        type: "number",
        default: 0
      },
      savedPosts: {
        type: "array",
        items: {
          type: "string",
          $ref: "#/Post",
          pattern: "^[A-Z]{2}$",
          description: "Refers to Post"

        }
      },
      createdAt: {
        type: "string",
        format: "date-time"
      },
      _id: {
        type: "string",
        pattern: "^[A-Z]{2}$"
      }
    },
    required: ["fullname", "username", "email", "password"]
  },
};
