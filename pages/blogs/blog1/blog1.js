const fs = require("fs");

// UPDATE THE TEXT FILE, REMOVE TITLE FROM YOUR BLOG
export const blog = {
    title: "Blog Test",
    imgPath: "https://TWTR",
    text: fs.readFileSync("./blog1.txt"), //.strip('/n')
  }