import React from "react";
import { Alert, AlertDescription } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../components/ui/breadcrumb";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Switch } from "../components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import { KeyRound } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SourcesTodoist() {
    const [token, setToken] = useState("")
    const [incremental, setIncremental] = useState(true)
    const [mappings, setMappings] = useState([
      { area: "Projects", project: "Work" },
      { area: "Waiting For", project: "Personal" },
    ])
    const updateMapping = (area: string, project: string) => {
      setMappings((current) => current.map((item) => (item.area === area ? { ...item, project } : item)))
    }
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="flex w-full min-w-0 flex-col gap-4">
          <section className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
      <div>
      <Breadcrumb>
      <BreadcrumbList>
      <BreadcrumbItem><BreadcrumbLink asChild><Link to="/sources">Sources</Link></BreadcrumbLink></BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem><BreadcrumbPage>Todoist</BreadcrumbPage></BreadcrumbItem>
      </BreadcrumbList>
      </Breadcrumb>
      <h2 className="mt-2 text-2xl font-semibold">Todoist Connector</h2>
      </div>
      <Badge>API Token</Badge>
      </div>

      <Card>
      <CardHeader>
      <CardTitle>API Settings</CardTitle>
      <CardDescription>Configure token and sync behavior.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
      <Input value={token} onChange={(event) => setToken(event.target.value)} placeholder="Paste Todoist API token" />
      <div className="flex items-center justify-between">
      <p className="text-sm text-muted-foreground">Enable incremental sync</p>
      <Switch checked={incremental} onCheckedChange={setIncremental} />
      </div>
      <Button className="gap-2"><KeyRound className="h-4 w-4" />Save credentials</Button>
      <Alert><AlertDescription>{incremental ? "Incremental sync reduces API load." : "Full sync on each run."}</AlertDescription></Alert>
      </CardContent>
      </Card>

      <Card>
      <CardHeader><CardTitle>Project Mapping</CardTitle></CardHeader>
      <CardContent>
      <Table>
      <TableHeader><TableRow><TableHead>GTD Area</TableHead><TableHead>Todoist Project</TableHead><TableHead>State</TableHead></TableRow></TableHeader>
      <TableBody>
      {mappings.map((mapping) => (
      <TableRow key={mapping.area}>
      <TableCell>{mapping.area}</TableCell>
      <TableCell>
      <Select value={mapping.project} onValueChange={(value) => updateMapping(mapping.area, value)}>
      <SelectTrigger className="w-48"><SelectValue /></SelectTrigger>
      <SelectContent>
      <SelectItem value="Inbox">Inbox</SelectItem>
      <SelectItem value="Work">Work</SelectItem>
      <SelectItem value="Personal">Personal</SelectItem>
      </SelectContent>
      </Select>
      </TableCell>
      <TableCell><Badge variant="outline">Mapped</Badge></TableCell>
      </TableRow>
      ))}
      </TableBody>
      </Table>
      </CardContent>
      </Card>
      </section>
      </div>
    </div>
  );
}