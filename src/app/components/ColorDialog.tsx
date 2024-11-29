"use client";
import { DialogContent, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";

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
            <DialogContent>
                <div style={{ background: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`, width: 100, height: 100 }}></div>
                <Typography>HSV: {color.h.toFixed(1)}, {color.s.toFixed(2)}%, {color.v}%</Typography>
                <Typography>RGB: {rgb.r}, {rgb.g}, {rgb.b}</Typography>
            </DialogContent>
        </Dialog>
    )
}

export default ColorDialog;