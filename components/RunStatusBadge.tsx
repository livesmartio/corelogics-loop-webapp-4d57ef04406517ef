import { Badge } from "./ui/badge";



export default function RunStatusBadge({ status }: { status: string }) {
  const toneMap: Record<
    string,
    { variant: "default" | "secondary" | "destructive" | "outline"; className: string }
  > = {
    Queued: { variant: "outline", className: "" },
    Running: { variant: "secondary", className: "bg-blue-500 text-white" },
    Succeeded: { variant: "default", className: "bg-emerald-600 text-white" },
    Failed: { variant: "destructive", className: "" },
    Cancelled: { variant: "secondary", className: "bg-slate-500 text-white" },
  };

  const tone = toneMap[status] ?? { variant: "outline", className: "" };

  return (
    <Badge className={`capitalize ${tone.className}`} variant={tone.variant}>
      {status}
    </Badge>
  );
}