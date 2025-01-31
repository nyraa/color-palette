"use client";

import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, IconButton, Typography, Link, Box } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function InfoDialog()
{
    const [open, setOpen] = useState(false);

    return (
        <>
            <IconButton sx={{
                ml: 2
            }} onClick={() => setOpen(true)} color="primary">
                <InfoIcon />
            </IconButton>

            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>About</DialogTitle>
                <DialogContent>
                    <Typography variant="body1">
                        閒著沒事就買了<Link href="https://色.tw">色.tw</Link>
                    </Typography>
                    <Box display="flex" alignItems="center" mt={1}>
                        <GitHubIcon sx={{ mr: 1 }} />
                        <Link href="https://github.com/nyraa/color-palette" target="_blank" rel="noopener">
                            Source code
                        </Link>
                    </Box>
                </DialogContent>
            </Dialog>
        </>
    );
}
