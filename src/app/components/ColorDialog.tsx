"use client";
import { Dialog, DialogTitle, DialogContent, Typography } from "@mui/material";
import styles from "./ColorDialog.module.css";
import Image from "next/image";

const HSVtoRGB = (h: number, s: number, v: number) =>
{
    const f = (n: number, k = (n + h / 60) % 6) =>
        v - v * s * Math.max(0, Math.min(k, 4 - k, 1));
    const [r, g, b] = [f(5), f(3), f(1)];
    return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
};

interface ColorDialogProps {
    open: boolean,
    color: { h: number, s: number, v: number },
    onClose: () => void,
};

const ColorDialog: React.FC<ColorDialogProps> = ({ open, color, onClose }) =>
{
    const rgb = HSVtoRGB(color.h, color.s / 100, color.v / 100);
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{rgb.r == 11 && rgb.g == 45 && rgb.b == 14 ? "非常臭顏色" : "非常好顏色"}</DialogTitle>
            <DialogContent>
                {rgb.r == 11 && rgb.g == 45 && rgb.b == 14 ? <Image className={styles.previewBlock} src="/homo.jpg" height={100} width={100} alt="哼哼啊啊啊啊" /> : <div className={styles.previewBlock} style={{ background: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` }}></div>}
                <Typography>HSV: {color.h.toFixed(0)}, {color.s.toFixed(0)}%, {color.v.toFixed(0)}%</Typography>
                <Typography>RGB: {rgb.r}, {rgb.g}, {rgb.b}</Typography>
            </DialogContent>
        </Dialog>
    )
}

export default ColorDialog;