"use client";
import React, { useState } from "react";
import styles from "./HSVGradient.module.css";

interface HSVGradientProps {
    saturation: number,
    onClick: (color: { h: number, s: number, v: number }) => void,
};

const HSVGradient: React.FC<HSVGradientProps> = ({ saturation, onClick }) => {
    const handleClick = (e: React.MouseEvent) => {
        const rect = (e.target as HTMLDivElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const h = ((x / rect.width) * 360) % 360;
        const v = 100 - (y / rect.height) * 100;
        onClick({ h, s: saturation, v });
    };
    return (
        <div
            className={styles.hsvGradient}
            onClick={handleClick}
            style={{
                background:`
                    linear-gradient(to top, black, transparent),
                    linear-gradient(to right, red, yellow, lime, cyan, blue, magenta, red)
                `,
                filter: `saturate(${saturation}%)`,
            }}
        ></div>
    )
};

export default HSVGradient;