import { Badge } from "./ui/badge";

export default function GtdStatusBadge({ status }: { status: string }) {
  const toneMap: Record<
    string,
    { variant: "default" | "secondary" | "destructive" | "outline"; className: string }
  > = {
    "Next Action": { variant: "default", className: "bg-blue-600 text-white" },
    "Waiting For": { variant: "secondary", className: "bg-amber-500 text-white" },
    Reference: { variant: "outline", className: "" },
    "Someday Planned": { variant: "secondary", className: "bg-indigo-500 text-white" },
    "Processed Done": { variant: "default", className: "bg-emerald-600 text-white" },
    "Needs Source Fix": { variant: "destructive", className: "" },
  };

  const tone = toneMap[status] ?? { variant: "outline", className: "" };

  return (
    <Badge className={`text-xs ${tone.className}`} variant={tone.variant}>
      {status}
    </Badge>
  );
}
