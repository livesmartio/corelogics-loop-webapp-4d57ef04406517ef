import React from "react";
import { Badge } from "../components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../components/ui/breadcrumb";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import ConnectorStatusBadge from "../components/ConnectorStatusBadge";
import RunStatusBadge from "../components/RunStatusBadge";

import { Clock3 } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export default function HistoryDetail() {
    const { id } = useParams()
    const runId = id ?? "unknown"
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="flex w-full min-w-0 flex-col gap-4">
          <section className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
      <div>
      <Breadcrumb>
      <BreadcrumbList>
      <BreadcrumbItem><BreadcrumbLink asChild><Link to="/history">History</Link></BreadcrumbLink></BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem><BreadcrumbPage>Run {runId}</BreadcrumbPage></BreadcrumbItem>
      </BreadcrumbList>
      </Breadcrumb>
      <h2 className="mt-2 text-2xl font-semibold">Run #{runId}</h2>
      </div>
      <RunStatusBadge status="Succeeded" />
      </div>

      <Card>
      <CardHeader><CardTitle>Timeline</CardTitle></CardHeader>
      <CardContent className="space-y-3">
      <div className="flex items-center gap-2 text-sm"><Clock3 className="h-4 w-4" />Queued at 10:22</div>
      <Separator />
      <div className="flex items-center justify-between text-sm"><span>Execution started</span><Badge variant="outline">10:23</Badge></div>
      <div className="flex items-center justify-between text-sm"><span>Result persisted</span><Badge variant="outline">10:27</Badge></div>
      </CardContent>
      </Card>

      <Card>
      <CardHeader><CardTitle>Source Health Breakdown</CardTitle></CardHeader>
      <CardContent>
      <Table>
      <TableHeader><TableRow><TableHead>Source</TableHead><TableHead>Status</TableHead><TableHead>Records</TableHead></TableRow></TableHeader>
      <TableBody>
      <TableRow><TableCell>Microsoft Graph</TableCell><TableCell><ConnectorStatusBadge status="Connected" /></TableCell><TableCell>8,213</TableCell></TableRow>
      <TableRow><TableCell>Todoist</TableCell><TableCell><ConnectorStatusBadge status="Warning" /></TableCell><TableCell>4,102</TableCell></TableRow>
      </TableBody>
      </Table>
      </CardContent>
      </Card>

      <Card>
      <CardHeader><CardTitle>Artifacts</CardTitle></CardHeader>
      <CardContent className="flex gap-2">
      <Button variant="outline">Download CSV</Button>
      <Button variant="outline">Download JSON</Button>
      </CardContent>
      </Card>
      </section>
      </div>
    </div>
  );
}