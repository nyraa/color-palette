"use client";

import styles from "./page.module.css";
import HSVGradient from "@/app/components/HSVGradient";
import ColorDialog from "@/app/components/ColorDialog";
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
    const handleDialogClose = () => setColorDialogOpen(false);
    return (
        <>
            <HSVGradient saturation={100} onClick={handleColorClick} />
            <ColorDialog open={colorDialogOpen} color={color} onClose={handleDialogClose} />
        </>
    );
}
