import { Badge } from "./ui/badge";

export default function ConnectorStatusBadge({ status }: { status: string }) {
  const toneMap: Record<
    string,
    { variant: "default" | "secondary" | "destructive" | "outline"; className: string }
  > = {
    Connected: { variant: "default", className: "bg-emerald-600 text-white" },
    Warning: { variant: "secondary", className: "bg-amber-500 text-white" },
    Error: { variant: "destructive", className: "" },
    Disabled: { variant: "outline", className: "text-muted-foreground" },
    Syncing: { variant: "secondary", className: "bg-blue-500 text-white" },
  };

  const tone = toneMap[status] ?? { variant: "outline", className: "" };

  return (
    <Badge className={`capitalize ${tone.className}`} variant={tone.variant}>
      {status}
    </Badge>
  );
}
