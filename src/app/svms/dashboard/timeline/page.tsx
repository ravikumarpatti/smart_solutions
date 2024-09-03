"use client";
import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Box,
  Typography,
  Paper,
  TextField,
  Button,
} from "@mui/material";

const steps = [
  "Field Engineer",
  "Verification Engineer",
  "Estimation Engineer",
  "Testing Engineer",
  "Project Closing",
];

const StepContent: React.FC<{
  stepIndex: number;
  handleCommentSubmit: (comment: string, step: number) => void;
  comments: string[];
}> = ({ stepIndex, handleCommentSubmit, comments }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    if (comment.trim()) {
      handleCommentSubmit(comment, stepIndex);
      setComment("");
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h6">{steps[stepIndex]}</Typography>
      <Box sx={{ mt: 4 }}>
        <Typography>Report content for {steps[stepIndex]}</Typography>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="subtitle1">Comments:</Typography>
        <Box>
          {comments.map((cmt, index) => (
            <Paper key={index} sx={{ p: 2, my: 2 }} elevation={2}>
              {cmt}
            </Paper>
          ))}
        </Box>
        <TextField
          label="Add a comment"
          fullWidth
          variant="outlined"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          sx={{ mt: 4 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ mt: 4 }}
        >
          Submit Comment
        </Button>
      </Box>
    </Paper>
  );
};

const ProjectTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [comments, setComments] = useState<string[][]>(
    Array(steps.length).fill([])
  );

  const handleStepClick = (step: number) => {
    setActiveStep(step);
  };

  const handleCommentSubmit = (comment: string, step: number) => {
    const newComments = comments.map((cmt, index) =>
      index === step ? [...cmt, comment] : cmt
    );
    setComments(newComments);
  };

  return (
    <Box sx={{ width: "100%", p: 3 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label} onClick={() => handleStepClick(index)}>
            <StepLabel sx={{ cursor: "pointer" }}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ mt: 2 }}>
        <StepContent
          stepIndex={activeStep}
          handleCommentSubmit={handleCommentSubmit}
          comments={comments[activeStep]}
        />
      </Box>
    </Box>
  );
};

export default ProjectTimeline;
