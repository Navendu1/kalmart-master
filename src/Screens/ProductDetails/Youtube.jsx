import React from "react";

import "./Youtube.css";

function Youtube({ youtube }) {


  return (
    <div>
      <div className="youtubeFrameContaier">

        {youtube && youtube.map((video, index) =>

          <iframe
            key={index}
            className="youtubeFrame"
            width={"100%"}
            height={"250"}
            src={`https://www.youtube.com/embed/${video.split("be/")[1]}`}
             title="YouTube video player"
            frameborder="0"
            allow="accelerometer; ; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        )}


        {/* <iframe
          className="youtubeFrame"
          width={"100%"}
          height={"250"}
          src="https://www.youtube.com/embed/K2LvCx8H0OU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; ; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> */}
      </div>
    </div>
  );
}

export default Youtube;
