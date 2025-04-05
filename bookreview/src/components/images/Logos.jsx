  import React from "react";
import { Avatar } from "@mui/material";
export default function Logos({alt,url}) {
  return (
    <Avatar
      alt={alt}
      src={url}
    />
  );
}
