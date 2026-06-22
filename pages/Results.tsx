import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

import GtdStatusBadge from "../components/GtdStatusBadge";

import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function Results() {
    const [view, setView] = useState("full")
    const [classificationFilter, setClassificationFilter] = useState("all")
    const findings = [
      { path: "Finance / AP / Recon", status: "Needs Source Fix", severity: "High" },
      { path: "People / Recruiting", status: "Waiting For", severity: "Medium" },
      { path: "Ops / DR Testing", status: "Next Action", severity: "Low" },
    ]
    const filteredFindings = useMemo(() => {
      return findings.filter((item) => classificationFilter === "all" || item.status === classificationFilter)
    }, [classificationFilter])
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="flex w-full min-w-0 flex-col gap-4">
          <section className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <Card><CardHeader className="pb-2"><CardTitle className="text-sm">Matched Nodes</CardTitle></CardHeader><CardContent><p className="text-2xl font-semibold">13,266</p></CardContent></Card>
      <Card><CardHeader className="pb-2"><CardTitle className="text-sm">Unmatched Nodes</CardTitle></CardHeader><CardContent><p className="text-2xl font-semibold">146</p></CardContent></Card>
      <Card><CardHeader className="pb-2"><CardTitle className="text-sm">Coverage</CardTitle></CardHeader><CardContent><Badge>98.9%</Badge></CardContent></Card>
      </div>

      <Card>
      <CardContent className="pt-6">
      <Tabs value={view} onValueChange={setView}>
      <TabsList className="grid w-full grid-cols-3">
      <TabsTrigger value="full">Full Table</TabsTrigger>
      <TabsTrigger value="level">By Level</TabsTrigger>
      <TabsTrigger value="alignment">Alignment</TabsTrigger>
      </TabsList>
      <TabsContent value="full" className="pt-3">
      <Button asChild className="gap-2"><Link to="/results/full">Open full result browser <ArrowRight className="h-4 w-4" /></Link></Button>
      </TabsContent>
      <TabsContent value="level" className="pt-3">
      <Button asChild variant="outline" className="gap-2"><Link to="/results/by-level">Open level coverage <ArrowRight className="h-4 w-4" /></Link></Button>
      </TabsContent>
      <TabsContent value="alignment" className="pt-3">
      <Button asChild variant="outline" className="gap-2"><Link to="/results/alignment">Open alignment tree <ArrowRight className="h-4 w-4" /></Link></Button>
      </TabsContent>
      </Tabs>
      </CardContent>
      </Card>
      </section>
  <section className="grid grid-cols-1 gap-4 xl:grid-cols-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 xl:col-span-2">
      <Card><CardHeader className="pb-2"><CardTitle className="text-sm">Needs Source Fix</CardTitle></CardHeader><CardContent><p className="text-2xl font-semibold">39</p></CardContent></Card>
      <Card><CardHeader className="pb-2"><CardTitle className="text-sm">Waiting For</CardTitle></CardHeader><CardContent><p className="text-2xl font-semibold">28</p></CardContent></Card>
      <Card><CardHeader className="pb-2"><CardTitle className="text-sm">Next Action</CardTitle></CardHeader><CardContent><p className="text-2xl font-semibold">79</p></CardContent></Card>
      </div>

      <Card className="xl:col-span-3">
      <CardHeader className="flex flex-row items-center justify-between">
      <CardTitle>Findings Queue</CardTitle>
      <Select value={classificationFilter} onValueChange={setClassificationFilter}>
      <SelectTrigger className="w-48"><SelectValue /></SelectTrigger>
      <SelectContent>
      <SelectItem value="all">All</SelectItem>
      <SelectItem value="Needs Source Fix">Needs Source Fix</SelectItem>
      <SelectItem value="Waiting For">Waiting For</SelectItem>
      <SelectItem value="Next Action">Next Action</SelectItem>
      </SelectContent>
      </Select>
      </CardHeader>
      <CardContent>
      <Table>
      <TableHeader><TableRow><TableHead>Path</TableHead><TableHead>Status</TableHead><TableHead>Severity</TableHead><TableHead className="text-right">Action</TableHead></TableRow></TableHeader>
      <TableBody>
      {filteredFindings.map((row) => (
      <TableRow key={row.path}>
      <TableCell className="font-medium">{row.path}</TableCell>
      <TableCell><GtdStatusBadge status={row.status} /></TableCell>
      <TableCell><Badge variant="outline">{row.severity}</Badge></TableCell>
      <TableCell className="text-right"><Button variant="outline" size="sm">Classify</Button></TableCell>
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