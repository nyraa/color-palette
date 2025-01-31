"use client";

import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, IconButton, Typography, Link, Box } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function InfoDialog()
{
    const [open, setOpen] = useState(false);

    return (
        <>
            <IconButton sx={{
                ml: 2,
                color: "black"
            }} onClick={() => setOpen(true)} color="primary">
                <InfoOutlinedIcon />
            </IconButton>

            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>色.tw</DialogTitle>
                <DialogContent>
                    <Typography variant="body1">
                        閒著沒事就買了<Link href="https://色.tw">色.tw</Link>
                    </Typography>
                    <Box display="flex" alignItems="center" mt={1}>
                        <GitHubIcon sx={{ mr: 1 }} />
                        <Link display="inline-flex" alignItems="center" href="https://github.com/nyraa/color-palette" target="_blank" rel="noopener">
                            Source code
                            <OpenInNewIcon sx={{ ml: 0.5, fontSize: "1em" }} />
                        </Link>
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    );
}
