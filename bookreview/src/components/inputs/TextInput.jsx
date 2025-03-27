import { TextField } from "@mui/material";
import React from "react";

export default function TextInput({
  label,
  variant,
  fullwidth,
  onChange,
  style
}) {
    return (
  <TextField
    label={label}
    sx={style}
    variant={variant}
    fullWidth={fullwidth}
    onChange={(e) => onChange(e.target.value)}
  />
    );
}
