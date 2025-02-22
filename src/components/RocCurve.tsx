import {Line} from "react-chartjs-2";
import {type ChartData, ChartOptions} from "chart.js";
import React from "react";
import { useColorMode } from '@docusaurus/theme-common';

interface RocProps {
    fpr: number[]
    tpr: number[]
    size?: number
}

export const RocCurve: React.FC<RocProps> = ({tpr, fpr, size = 260}) => {
    const { colorMode } = useColorMode()
    const chartColor = colorMode == "light" ? "rgba(0,0,0,0.9)" : "rgba(255,255,255,0.9)"
    const chartCenterColor = colorMode == "light" ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.4)"
    const rocData = tpr.map((value, index) => ({x: fpr[index], y: value}))
    const data: ChartData<"line"> = {
        datasets: [
            {
                data: rocData,
                borderWidth: 1,
                pointRadius: 0,
                borderColor: chartColor,
            },
            {
                data: [
                    { x: 0, y: 0 },
                    { x: 1, y: 1 },
                ],
                borderDash: [16, 8],
                borderWidth: 1,
                pointRadius: 0,
                borderColor: chartCenterColor,
            },
        ],
    }
    const options: ChartOptions<"line"> = {
        scales: {
            x: {
                type: "linear",
                min: 0,
                max: 1,
                ticks: {
                    stepSize: 0.2,
                    color: chartColor,
                },
                border: {
                    color: chartColor,
                    width: 1,
                },
                grid: {
                    lineWidth: 0,
                },
            },
            y: {
                type: "linear",
                min: 0,
                max: 1,
                ticks: {
                    stepSize: 0.2,
                    color: chartColor,
                },
                border: {
                    color: chartColor,
                    width: 1,
                },
                grid: {
                    lineWidth: 0,
                },
            },
        },
        aspectRatio: 1,
    }
    return (
        <div style={{width: size, height: size}}>
            <Line data={data} options={options}/>
        </div>
    )
}

export const SampleRocCurve = () => {
    return (
        <RocCurve
            tpr={[0, 0.3, 0.5, 0.7, 0.8, 0.85, 0.9, 0.92, 0.95, 0.98, 1]}
            fpr={[0, 0.1, 0.2, 0.3, 0.4, 0.5,  0.6, 0.7,  0.8,  0.9,  1]} />
    )
}