import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Switch } from "../components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import { useState } from "react";

export default function Exports() {
    const [enabled, setEnabled] = useState(true)
    const [frequency, setFrequency] = useState("weekly")
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="flex w-full min-w-0 flex-col gap-4">
          <section className="space-y-4">
      <Card>
      <CardHeader>
      <CardTitle>Export Center</CardTitle>
      <CardDescription>Generate, store, and retrieve export artifacts.</CardDescription>
      </CardHeader>
      <CardContent>
      <Button>Generate New Export</Button>
      </CardContent>
      </Card>

      <Card>
      <CardHeader><CardTitle>Export Templates</CardTitle></CardHeader>
      <CardContent>
      <Table>
      <TableHeader><TableRow><TableHead>Template</TableHead><TableHead>Format</TableHead><TableHead>Last Used</TableHead><TableHead className="text-right">Action</TableHead></TableRow></TableHeader>
      <TableBody>
      <TableRow><TableCell>Executive Summary</TableCell><TableCell><Badge>PDF</Badge></TableCell><TableCell>Yesterday</TableCell><TableCell className="text-right"><Button size="sm" variant="outline">Run</Button></TableCell></TableRow>
      <TableRow><TableCell>Gap Register</TableCell><TableCell><Badge variant="secondary">CSV</Badge></TableCell><TableCell>2 days ago</TableCell><TableCell className="text-right"><Button size="sm" variant="outline">Run</Button></TableCell></TableRow>
      </TableBody>
      </Table>
      </CardContent>
      </Card>

      <Card>
      <CardHeader><CardTitle>Generated Artifacts</CardTitle></CardHeader>
      <CardContent>
      <Table>
      <TableHeader><TableRow><TableHead>Name</TableHead><TableHead>Status</TableHead><TableHead>Created</TableHead><TableHead className="text-right">Action</TableHead></TableRow></TableHeader>
      <TableBody>
      <TableRow><TableCell>run-391-full.csv</TableCell><TableCell><Badge>Ready</Badge></TableCell><TableCell>Today</TableCell><TableCell className="text-right"><Button size="sm" variant="outline">Download</Button></TableCell></TableRow>
      <TableRow><TableCell>run-390-delta.xlsx</TableCell><TableCell><Badge variant="secondary">Queued</Badge></TableCell><TableCell>Today</TableCell><TableCell className="text-right"><Button size="sm" variant="outline">View</Button></TableCell></TableRow>
      </TableBody>
      </Table>
      </CardContent>
      </Card>
      </section>
  <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Card>
      <CardHeader><CardTitle>Scheduled Exports</CardTitle></CardHeader>
      <CardContent className="space-y-4">
      <div className="flex items-center justify-between">
      <p className="text-sm text-muted-foreground">Enable schedule</p>
      <Switch checked={enabled} onCheckedChange={setEnabled} />
      </div>
      <Select value={frequency} onValueChange={setFrequency}>
      <SelectTrigger><SelectValue /></SelectTrigger>
      <SelectContent>
      <SelectItem value="daily">Daily</SelectItem>
      <SelectItem value="weekly">Weekly</SelectItem>
      <SelectItem value="monthly">Monthly</SelectItem>
      </SelectContent>
      </Select>
      <Button disabled={!enabled}>Save schedule</Button>
      </CardContent>
      </Card>
      </section>
      </div>
    </div>
  );
}