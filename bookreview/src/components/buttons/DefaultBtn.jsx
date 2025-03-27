import React from "react";

import { Button } from "@mui/material";

export default function DefaultBtn({style,variant,onClick,label,disable, classname, color}) {
    return(
       <Button
        variant={variant}
        sx={style}
        color={color}
        onClick={onClick}
        disable ={disable}
        className={classname}
        >
        {label}
        </Button>
    );
}