import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HorizontalScrollBar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercise = ({ targetMuscleExercise, equipmentExercise }) => {
  return (
    <Box
      sx={{
        mt: { lg: "100px", xs: "0" },
      }}
    >
      <Typography variant="h5" mb="5">
        Exercises that Target Same Muscle Group
      </Typography>
      <Stack
        direction="row"
        sx={{
          p: "2",
          position: "relative",
        }}
      >
        {targetMuscleExercise.length ? (
          <HorizontalScrollBar data={targetMuscleExercise} />
        ) : (
          <Loader />
        )}
      </Stack>

      <Typography variant="h5" mb="5">
        Exercises that Use Same Equipment
      </Typography>
      <Stack
        direction="row"
        sx={{
          p: "2",
          position: "relative",
        }}
      >
        {equipmentExercise.length ? (
          <HorizontalScrollBar data={equipmentExercise} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercise;
