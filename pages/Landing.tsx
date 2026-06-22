import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Separator } from "../components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

import GtdStatusBadge from "../components/GtdStatusBadge";
import RunStatusBadge from "../components/RunStatusBadge";

import { ArrowRight, Bell, CheckCircle2, Database, Download, ExternalLink, FileWarning, PlayCircle, Plug } from "lucide-react";
import { useState } from "react";

export default function Landing() {
    const [activeTab, setActiveTab] = useState("overview")
    const rows = [
      { id: "1", item: "Program / Finance / AP", status: "Needs Source Fix" },
      { id: "2", item: "Region / EMEA / Payroll", status: "Waiting For" },
      { id: "3", item: "Ops / Infra / Backup", status: "Next Action" },
    ]
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="flex w-full min-w-0 flex-col gap-4">
          <section className="grid grid-cols-1 gap-4">
      <Card className="border-0 bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-md">
      <CardHeader>
      <Badge className="w-fit bg-white/20 text-white hover:bg-white/20">Operations Command Center</Badge>
      <CardTitle className="text-2xl md:text-3xl">Cross-System Hierarchy Observability</CardTitle>
      <CardDescription className="text-primary-foreground/90">
      Monitor connectors, run comparisons, and resolve hierarchy gaps in one guided workflow.
      </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="rounded-lg bg-white/10 p-3">
      <p className="text-sm text-primary-foreground/80">Active run completion</p>
      <Progress value={72} className="mt-2 bg-white/20" />
      </div>
      <div className="rounded-lg bg-white/10 p-3">
      <p className="text-sm text-primary-foreground/80">Open discrepancies</p>
      <p className="mt-2 text-2xl font-semibold">146</p>
      </div>
      <div className="rounded-lg bg-white/10 p-3">
      <p className="text-sm text-primary-foreground/80">Connected sources</p>
      <p className="mt-2 text-2xl font-semibold">8 / 9</p>
      </div>
      </div>
      <div className="flex flex-wrap gap-3">
      <Button variant="secondary" className="gap-2 text-foreground">
      <PlayCircle className="h-4 w-4" />
      Run Comparison
      </Button>
      <Button variant="outline" className="gap-2 border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
      Review Results
      <ArrowRight className="h-4 w-4" />
      </Button>
      </div>
      </CardContent>
      </Card>
      </section>
  <section className="grid grid-cols-1 gap-4 xl:grid-cols-3">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:col-span-2">
      <Card>
      <CardHeader className="pb-2">
      <CardTitle className="text-sm">Latest Run Status</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
      <RunStatusBadge status="Running" />
      <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
      </CardContent>
      </Card>
      <Card>
      <CardHeader className="pb-2">
      <CardTitle className="text-sm">Active Sources</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
      <p className="text-2xl font-semibold">8</p>
      <Plug className="h-4 w-4 text-muted-foreground" />
      </CardContent>
      </Card>
      <Card>
      <CardHeader className="pb-2">
      <CardTitle className="text-sm">Open Gaps</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
      <p className="text-2xl font-semibold">146</p>
      <FileWarning className="h-4 w-4 text-amber-600" />
      </CardContent>
      </Card>
      <Card>
      <CardHeader className="pb-2">
      <CardTitle className="text-sm">Export Artifacts</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
      <p className="text-2xl font-semibold">24</p>
      <Download className="h-4 w-4 text-muted-foreground" />
      </CardContent>
      </Card>
      </div>
      <Card>
      <CardHeader>
      <CardTitle className="flex items-center gap-2 text-base">
      <Bell className="h-4 w-4" />
      Recent Notifications
      </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
      {[
      { title: "Microsoft Graph token expires soon", tone: "Warning" },
      { title: "Run #392 completed with 146 gaps", tone: "Info" },
      { title: "Export XLSX finished", tone: "Success" },
      { title: "Todoist sync retried", tone: "Info" },
      { title: "Favorites file updated", tone: "Success" },
      ].map((item, index) => (
      <div key={item.title} className="space-y-2">
      <div className="flex items-center justify-between gap-3">
      <p className="text-sm text-foreground">{item.title}</p>
      <Badge variant="outline" className="text-xs">{item.tone}</Badge>
      </div>
      {index < 4 ? <Separator /> : null}
      </div>
      ))}
      </CardContent>
      </Card>
      </section>
  <section className="grid grid-cols-1 gap-4 2xl:grid-cols-5">
      <Card className="2xl:col-span-3">
      <CardHeader>
      <CardTitle>Latest Run Summary</CardTitle>
      </CardHeader>
      <CardContent>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="grid w-full grid-cols-3">
      <TabsTrigger value="overview">Overview</TabsTrigger>
      <TabsTrigger value="sources">Sources</TabsTrigger>
      <TabsTrigger value="artifacts">Artifacts</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="space-y-2 pt-3">
      <p className="text-sm text-muted-foreground">Run #392 compared 13,412 items across 8 active sources.</p>
      <Badge>2m 41s duration</Badge>
      </TabsContent>
      <TabsContent value="sources" className="space-y-2 pt-3">
      <p className="text-sm text-muted-foreground">7 sources healthy, 1 source in warning state.</p>
      <Button variant="outline" size="sm">Open connector health</Button>
      </TabsContent>
      <TabsContent value="artifacts" className="space-y-2 pt-3">
      <p className="text-sm text-muted-foreground">CSV and JSON artifacts are available for export.</p>
      <Button size="sm" className="gap-2">Open export center <ExternalLink className="h-4 w-4" /></Button>
      </TabsContent>
      </Tabs>
      </CardContent>
      </Card>
      <Card className="2xl:col-span-2">
      <CardHeader>
      <CardTitle>Recent Discrepancies Preview</CardTitle>
      </CardHeader>
      <CardContent>
      <div className="overflow-x-auto">
      <Table>
      <TableHeader>
      <TableRow>
      <TableHead>Item</TableHead>
      <TableHead>GTD</TableHead>
      <TableHead>Action</TableHead>
      </TableRow>
      </TableHeader>
      <TableBody>
      {rows.map((row) => (
      <TableRow key={row.id}>
      <TableCell className="font-medium">{row.item}</TableCell>
      <TableCell><GtdStatusBadge status={row.status} /></TableCell>
      <TableCell>
      <Button variant="ghost" size="sm" className="gap-1">
      Review <ArrowRight className="h-3.5 w-3.5" />
      </Button>
      </TableCell>
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