import React from "react";
import { useVideo } from "../../Context/VideoContext";
import { Card } from "../Card/Card";
import "./popular.css";

// const popularVideos = [
//   {

//     _id: "tgB1wUcmbbw",
//     title: "Thor: Love and Thunder | Official Teaser",
//     category: "Trailer",
//     creator: "Marvel Entertainment",
//     description:
//       "Here it is. ❤️  + ⚡ Marvel Studios' Thor: Love and Thunder arrives only in theaters July 8.",
//   },
//   {
//     _id: "dOyJqGtP-wU",
//     title: "Honest Trailers - Guardians of the Galaxy",
//     creator: "Screen Junkies",
//     category: "Entertainment",
//     description:
//       "Guardians of the Galaxy ruled the summer box offic…eople will see ANYTHING with Marvel's name on it!",
//   },
//   {
//     _id: "x7Krla_UxRg",
//     title: "Moon Knight | Official Trailer | Disney+",
//     creator: "Marvel Entertainment",
//     category: "Trailer",
//     description:
//       "Welcome to chaos 🌙 Watch the new trailer for Marv…treaming the Original series March 30 on Disney+.",
//   },
//   {
//     _id: "-84w_rF34Q4",
//     title: "Honest Trailers | Marvel's What If...?",
//     creator: "Screen Junkies",
//     category: "Entertainment",
//     description: "Honest Trailers | Marvel's What If...?",
//   },
// ];

function Popular() {
  const { stateVideo } = useVideo();

  const popularVideos = stateVideo.video.slice(0, 4);
  return (
    <div className="popular-container">
      <div className="pupular-title">
        <h2>Popular videos:</h2>
      </div>
      <div className="pupular-card">
        {popularVideos.map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}

export { Popular };
