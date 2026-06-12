import React from "react";
import { Alert, AlertDescription } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import { AlertCircle } from "lucide-react";
export default function ResultsAlignment() {
  return (
    <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="flex w-full min-w-0 flex-col gap-4">
          <section className="space-y-4">
      <Card>
      <CardHeader><CardTitle>Alignment Overview</CardTitle></CardHeader>
      <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="rounded-lg border p-3">
      <p className="text-sm text-muted-foreground">Aligned branches</p>
      <p className="text-2xl font-semibold">83%</p>
      <Progress value={83} className="mt-2" />
      </div>
      <div className="rounded-lg border p-3"><p className="text-sm text-muted-foreground">Depth mismatch nodes</p><p className="text-2xl font-semibold">42</p><Badge variant="secondary">Needs review</Badge></div>
      <div className="rounded-lg border p-3"><p className="text-sm text-muted-foreground">Naming mismatch nodes</p><p className="text-2xl font-semibold">19</p><Badge variant="outline">Suggested fixes</Badge></div>
      </CardContent>
      </Card>

      <Card>
      <CardHeader><CardTitle>Alignment tree table</CardTitle></CardHeader>
      <CardContent>
      <Table>
      <TableHeader><TableRow><TableHead>Node</TableHead><TableHead>State</TableHead><TableHead className="text-right">Action</TableHead></TableRow></TableHeader>
      <TableBody>
      <TableRow><TableCell>Finance / AP</TableCell><TableCell><Badge>Aligned</Badge></TableCell><TableCell className="text-right"><Button variant="ghost" size="sm">Inspect</Button></TableCell></TableRow>
      <TableRow><TableCell>People / Onboarding</TableCell><TableCell><Badge variant="secondary">Depth mismatch</Badge></TableCell><TableCell className="text-right"><Button variant="ghost" size="sm">Inspect</Button></TableCell></TableRow>
      </TableBody>
      </Table>
      </CardContent>
      </Card>

      <Card>
      <CardHeader><CardTitle>Recommendations</CardTitle></CardHeader>
      <CardContent>
      <Alert>
      <AlertCircle className="h-4 w-4" />
      <AlertDescription>Normalize Todoist section naming for 19 nodes to improve automatic alignment.</AlertDescription>
      </Alert>
      </CardContent>
      </Card>
      </section>
      </div>
    </div>
  );
}