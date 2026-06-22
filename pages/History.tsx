import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import RunStatusBadge from "../components/RunStatusBadge";

import { MoreHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function History() {
    const [query, setQuery] = useState("")
    const [statusFilter, setStatusFilter] = useState("all")
    const runs = [
      { id: "392", status: "Running", duration: "2m 41s", started: "5m ago" },
      { id: "391", status: "Succeeded", duration: "4m 02s", started: "1h ago" },
      { id: "390", status: "Failed", duration: "1m 12s", started: "3h ago" },
    ]
    const filteredRuns = useMemo(() => {
      return runs.filter((run) => {
        const idMatch = run.id.includes(query)
        const statusMatch = statusFilter === "all" || run.status === statusFilter
        return idMatch && statusMatch
      })
    }, [query, statusFilter])
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="flex w-full min-w-0 flex-col gap-4">
          <section className="space-y-4">
      <Card>
      <CardContent className="flex flex-col gap-3 pt-6 md:flex-row md:items-center">
      <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search run id" className="md:max-w-xs" />
      <Select value={statusFilter} onValueChange={setStatusFilter}>
      <SelectTrigger className="w-full md:w-48"><SelectValue /></SelectTrigger>
      <SelectContent>
      <SelectItem value="all">All statuses</SelectItem>
      <SelectItem value="Running">Running</SelectItem>
      <SelectItem value="Succeeded">Succeeded</SelectItem>
      <SelectItem value="Failed">Failed</SelectItem>
      </SelectContent>
      </Select>
      <Button variant="outline">Apply</Button>
      </CardContent>
      </Card>

      <Card>
      <CardHeader><CardTitle>Run log</CardTitle></CardHeader>
      <CardContent>
      <Table>
      <TableHeader><TableRow><TableHead>Run</TableHead><TableHead>Status</TableHead><TableHead>Duration</TableHead><TableHead>Started</TableHead><TableHead className="text-right">Actions</TableHead></TableRow></TableHeader>
      <TableBody>
      {filteredRuns.map((run) => (
      <TableRow key={run.id}>
      <TableCell className="font-medium">#{run.id}</TableCell>
      <TableCell><RunStatusBadge status={run.status} /></TableCell>
      <TableCell>{run.duration}</TableCell>
      <TableCell className="text-muted-foreground">{run.started}</TableCell>
      <TableCell className="text-right">
      <DropdownMenu>
      <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-popover text-popover-foreground">
      <DropdownMenuItem asChild><Link to={`/history/${run.id}`}>View detail</Link></DropdownMenuItem>
      <DropdownMenuItem>Download artifact</DropdownMenuItem>
      </DropdownMenuContent>
      </DropdownMenu>
      </TableCell>
      </TableRow>
      ))}
      </TableBody>
      </Table>
      </CardContent>
      </Card>
      </section>
  <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {[
      { name: "Latest CSV", type: "csv", run: "#391" },
      { name: "Latest JSON", type: "json", run: "#391" },
      { name: "Delta Report", type: "xlsx", run: "#390" },
      ].map((item) => (
      <Card key={item.name}>
      <CardHeader><CardTitle className="text-base">{item.name}</CardTitle></CardHeader>
      <CardContent className="space-y-3">
      <Badge variant="outline">{item.type.toUpperCase()}</Badge>
      <p className="text-sm text-muted-foreground">Generated from run {item.run}</p>
      <Button className="w-full" variant="outline">Download</Button>
      </CardContent>
      </Card>
      ))}
      </section>
      </div>
    </div>
  );
}