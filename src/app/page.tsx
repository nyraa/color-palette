"use client";

import styles from "./page.module.css";
import HSVGradient from "@/app/components/HSVGradient";
import ColorDialog from "@/app/components/ColorDialog";
import SaturationSlider from "@/app/components/SaturationSlider";
import InfoDialog from "@/app/components/InfoDialog";
import { Box } from "@mui/material";
import { useState } from "react";

export default function Home()
{
    const [saturation, setSaturation] = useState(100);
    const [color, setColor] = useState({ h: 0, s: 100, v: 100 });
    const [colorDialogOpen, setColorDialogOpen] = useState(false);
    const handleColorClick = (color: { h: number, s: number, v: number }) =>
    {
        setColor(color);
        setColorDialogOpen(true);
    }
    const handleSaturationChange = (saturation: number) => setSaturation(saturation);
    const handleDialogClose = () => setColorDialogOpen(false);
    return (
        <>
            <div className={styles.main}>
                <Box sx={{
                    display: "flex",
                    pl: 4,
                    pr: 1,
                    py: 1
                }}>
                    <SaturationSlider saturation={saturation} onChange={handleSaturationChange} />
                    <InfoDialog />
                </Box>
                <HSVGradient saturation={saturation} onClick={handleColorClick} />
            </div>
            <ColorDialog open={colorDialogOpen} color={color} onClose={handleDialogClose} />
        </>
    );
}
