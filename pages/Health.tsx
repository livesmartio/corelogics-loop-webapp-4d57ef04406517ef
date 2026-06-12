import React from "react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import ConnectorStatusBadge from "../components/ConnectorStatusBadge";

import { AlertTriangle } from "lucide-react";
export default function Health() {
  return (
    <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="flex w-full min-w-0 flex-col gap-4">
          <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2">
      {[
      { name: "Microsoft Graph", score: 92, status: "Connected" },
      { name: "Todoist", score: 74, status: "Warning" },
      { name: "Favorites", score: 98, status: "Connected" },
      { name: "Legacy XML", score: 41, status: "Error" },
      ].map((connector) => (
      <Card key={connector.name}>
      <CardHeader className="pb-2">
      <CardTitle className="text-sm">{connector.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
      <ConnectorStatusBadge status={connector.status} />
      <Progress value={connector.score} />
      <p className="text-xs text-muted-foreground">Health score: {connector.score}%</p>
      </CardContent>
      </Card>
      ))}
      </div>
      <Card>
      <CardHeader><CardTitle>Health Alerts</CardTitle></CardHeader>
      <CardContent className="space-y-3">
      <Alert>
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Retry storm detected</AlertTitle>
      <AlertDescription>Todoist connector exceeded retry threshold in last hour.</AlertDescription>
      </Alert>
      <div className="rounded-lg border p-3">
      <p className="text-sm">2 connectors require intervention</p>
      <Badge variant="secondary" className="mt-2">P2 Attention</Badge>
      </div>
      </CardContent>
      </Card>
      </section>
  <section className="grid grid-cols-1">
      <Card>
      <CardHeader>
      <CardTitle>Connector Status Table</CardTitle>
      </CardHeader>
      <CardContent>
      <div className="overflow-x-auto">
      <Table>
      <TableHeader>
      <TableRow>
      <TableHead>Connector</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Health</TableHead>
      <TableHead>Last Run</TableHead>
      <TableHead className="text-right">Action</TableHead>
      </TableRow>
      </TableHeader>
      <TableBody>
      {[
      { name: "Microsoft Graph", status: "Connected", health: 92, run: "5m ago" },
      { name: "Todoist", status: "Warning", health: 74, run: "34m ago" },
      { name: "Legacy XML", status: "Error", health: 41, run: "1d ago" },
      ].map((item) => (
      <TableRow key={item.name}>
      <TableCell className="font-medium">{item.name}</TableCell>
      <TableCell><ConnectorStatusBadge status={item.status} /></TableCell>
      <TableCell className="w-48"><Progress value={item.health} /></TableCell>
      <TableCell className="text-muted-foreground">{item.run}</TableCell>
      <TableCell className="text-right"><Button variant="outline" size="sm">View logs</Button></TableCell>
      </TableRow>
      ))}
      </TableBody>
      </Table>
      </div>
      </CardContent>
      </Card>
      </section>
      </div>
    </div>
  );
}