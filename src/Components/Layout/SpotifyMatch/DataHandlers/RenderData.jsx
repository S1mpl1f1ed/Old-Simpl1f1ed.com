import React from "react";
import ArtistTable from "./ArtistsTable";
import TrackTable from "./TrackTable";

function RenderData({ spotifyToken, timeSelected }) {
  return (
    <div className="gridElem">
      <ArtistTable initialTime={timeSelected} spotifyToken={spotifyToken} />
      <TrackTable initialTime={timeSelected} spotifyToken={spotifyToken} />
    </div>
  );
}

export default RenderData;