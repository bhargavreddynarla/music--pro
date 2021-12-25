import React from "react";
import "./Cards.scss";
import { motion } from "framer-motion";

const Cards = ({ songs }) => {
  return (
    <div class="container">
      <div className="row">
        {songs.map((song) => {
          return (
            <motion.div
              className="col-md-3"
              key={song.id}
              whileHover={{ scale: 1.1 }}
            >
              <div
                className="card col-2"
                style={{ width: "17.5rem", height: "25rem" }}
              >
                <img src={song.img} className="card-img-top" alt={song.title} />
                <div className="card-body">
                  <h5 className="card-title">
                    {song.title} - {song.movie}
                  </h5>
                  <audio controls src={song.song} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
