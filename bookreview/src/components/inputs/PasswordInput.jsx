import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";

export default function PasswordInput({label,style,variant,onChange}){
    const [showPassword, setShowPassword] = useState(false);
    return (
        <TextField
                  label={label}
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  sx={style}
                  variant={variant}
                  onChange={(e) => onChange(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                         sx={{ color: 'gray' }}
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
    );
}