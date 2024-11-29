"use client";
import styles from "./HSVGradient.module.css";

function hsv2csshsl(h: number, s: number, v: number)
{
    const nl = (100 - (s / 2));
    const ns = (v - nl)/Math.min(nl, 100-nl);
    return `hsl(${h}, ${ns * 100}%, ${nl}%)`;
}

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
                    linear-gradient(to right, ${hsv2csshsl(0, saturation, 100)}, ${hsv2csshsl(60, saturation, 100)}, ${hsv2csshsl(120, saturation, 100)}, ${hsv2csshsl(180, saturation, 100)}, ${hsv2csshsl(240, saturation, 100)}, ${hsv2csshsl(300, saturation, 100)}, ${hsv2csshsl(0, saturation, 100)})
                `,
            }}
        ></div>
    )
};

export default HSVGradient;