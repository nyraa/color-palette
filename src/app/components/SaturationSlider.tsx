import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

interface SaturationSliderProps {
    saturation: number;
    onChange: (saturation: number) => void;
}

const SaturationSlider: React.FC<SaturationSliderProps> = ({ saturation, onChange }) => {
    const handleChange = (event: Event, value: number | number[]) => {
        onChange(value as number);
    };
    return (
        <Box
            sx={{
                px: 2,
                py: 1
            }}
        >
            <Slider
                value={saturation}
                onChange={handleChange}
                min={0}
                max={100}
                step={1}
                sx={{
                    mt: 0.5
                }}
            />
        </Box>
    )
}

export default SaturationSlider;