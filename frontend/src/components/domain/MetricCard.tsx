import React from "react";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";

export interface MetricCardProps {
    label: string;
    value: string | number;
    trend?: {
        direction: "up" | "down" | "flat";
        percentage: string;
        description?: string;
    };
    variant?: "default" | "outlined" | "ghost";
    trendColor?: "auto" | "reverse" | "neutral";
}

export const MetricCard: React.FC<MetricCardProps> = ({
    label,
    value,
    trend,
    variant = "default",
    trendColor = "auto",
}) => {
    const getTrendColorClass = () => {
        if (trendColor === "neutral") return "text-default-500";
        if (!trend) return "text-default-500";

        const isUp = trend.direction === "up";
        const positive = trendColor === "auto" ? isUp : !isUp;

        return positive ? "text-success" : "text-danger";
    };

    return (
        <Card
            variant={variant === "outlined" ? "bordered" : variant}
            className="min-w-[200px]"
        >
            <CardHeader className="flex flex-col items-start px-4 pt-4">
                <p className="text-tiny uppercase font-bold text-default-500">{label}</p>
                <h4 className="font-bold text-2xl">{value}</h4>
            </CardHeader>
            {trend && (
                <>
                    <Divider />
                    <CardBody className="px-4 py-3">
                        <div className="flex items-center gap-1">
                            <span className={`text-sm font-semibold ${getTrendColorClass()}`}>
                                {trend.direction === "up" ? "↑" : trend.direction === "down" ? "↓" : "→"} {trend.percentage}
                            </span>
                            {trend.description && (
                                <span className="text-xs text-default-400">{trend.description}</span>
                            )}
                        </div>
                    </CardBody>
                </>
            )}
        </Card>
    );
};
