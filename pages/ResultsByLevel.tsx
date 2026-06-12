import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

import { useState } from "react";

export default function ResultsByLevel() {
    const [scope, setScope] = useState("program")
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="flex w-full min-w-0 flex-col gap-4">
          <section className="grid grid-cols-1 gap-4 xl:grid-cols-5">
      <Card className="xl:col-span-3">
      <CardHeader><CardTitle>Coverage by Level</CardTitle></CardHeader>
      <CardContent>
      <Tabs value={scope} onValueChange={setScope}>
      <TabsList className="grid w-full grid-cols-3">
      <TabsTrigger value="program">Program</TabsTrigger>
      <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
      <TabsTrigger value="team">Team</TabsTrigger>
      </TabsList>
      <TabsContent value="program" className="space-y-3 pt-3">
      <p className="text-sm text-muted-foreground">Program level is nearly complete.</p>
      <Progress value={96} />
      </TabsContent>
      <TabsContent value="portfolio" className="space-y-3 pt-3">
      <p className="text-sm text-muted-foreground">Portfolio level has 32 unresolved gaps.</p>
      <Progress value={89} />
      </TabsContent>
      <TabsContent value="team" className="space-y-3 pt-3">
      <p className="text-sm text-muted-foreground">Team level coverage remains uneven across systems.</p>
      <Progress value={73} />
      </TabsContent>
      </Tabs>
      </CardContent>
      </Card>

      <Card className="xl:col-span-2">
      <CardHeader><CardTitle>Level table</CardTitle></CardHeader>
      <CardContent>
      <Table>
      <TableHeader><TableRow><TableHead>Level</TableHead><TableHead>Coverage</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
      <TableBody>
      <TableRow><TableCell>Program</TableCell><TableCell>96%</TableCell><TableCell><Badge>Healthy</Badge></TableCell></TableRow>
      <TableRow><TableCell>Portfolio</TableCell><TableCell>89%</TableCell><TableCell><Badge variant="secondary">Watch</Badge></TableCell></TableRow>
      <TableRow><TableCell>Team</TableCell><TableCell>73%</TableCell><TableCell><Badge variant="destructive">Action</Badge></TableCell></TableRow>
      </TableBody>
      </Table>
      </CardContent>
      </Card>
      </section>
  <section className="grid grid-cols-1">
      <Card>
      <CardContent className="flex flex-wrap gap-2 pt-6">
      <Button>Classify uncovered items</Button>
      <Button variant="outline">Export by-level report</Button>
      </CardContent>
      </Card>
      </section>
      </div>
    </div>
  );
}