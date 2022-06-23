import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideo = ({ exerciseVideo, name }) => {
  console.log(exerciseVideo);
  if (!exerciseVideo.length) return `Loading...`;

  return (
    <Box sx={{ marginTop: { lg: "203px", xs: "20px" } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: "40px", xs: "25px" } }}
        variant="h6"
        color="#000"
        mb="33px"
      >
        Watch{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0px" } }}
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
      >
        {exerciseVideo?.slice(0, 6)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ borderTopLeftRadius: "20px" }}
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <Box>
              <Typography
                sx={{ fontSize: { lg: "20px", xs: "18px" } }}
                fontWeight={90}
                color="#000"
              >
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideo;
