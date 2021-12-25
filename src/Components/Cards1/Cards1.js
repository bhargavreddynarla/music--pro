import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Cards1 = ({ songs }) => {
  return (
    <div className="container">
      <div className="card--Row">
        {songs.map((song) => {
          return (
            <div
              className="col-sm-3"
              style={{
                display: "inline-block",
              }}
            >
              <Card sx={{ width: "18rem", height: "25rem", marginTop: "3rem" }}>
                <CardContent>
                  <img
                    src={song.img}
                    className="card-img-top"
                    alt={song.title}
                  />
                  <h5 className="card-title">
                    {song.title} - {song.movie}
                  </h5>
                  <audio controls src={song.song} />
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards1;
