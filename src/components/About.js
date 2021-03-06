import React from "react"
const MarkdownData = require("../../data/post.md")
const imagePath = require("../images/link.jpg")
import "../css/About.css"

export default () => (
  <div>
    <div className="profile">
      <img src={imagePath} />
      <h2>{MarkdownData.title}</h2>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: MarkdownData.__content }}
      />
    </div>
  </div>
)
