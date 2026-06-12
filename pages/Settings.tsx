import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

import { useState } from "react";

export default function Settings() {
    const [activeTab, setActiveTab] = useState("general")
    const [workspaceName, setWorkspaceName] = useState("CoreLogics LOOP")
    const [autoRefresh, setAutoRefresh] = useState(true)
    const [notifyFailures, setNotifyFailures] = useState(true)
    const [notifyWarnings, setNotifyWarnings] = useState(true)
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="flex w-full min-w-0 flex-col gap-4">
          <section className="space-y-4">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
      <TabsTrigger value="general">General</TabsTrigger>
      <TabsTrigger value="notifications">Notifications</TabsTrigger>
      <TabsTrigger value="saved">Saved Views</TabsTrigger>
      <TabsTrigger value="integrations">Integrations</TabsTrigger>
      </TabsList>

      <TabsContent value="general">
      <Card>
      <CardHeader><CardTitle>General Settings</CardTitle></CardHeader>
      <CardContent className="space-y-4">
      <div className="space-y-2"><Label htmlFor="workspace">Workspace Name</Label><Input id="workspace" value={workspaceName} onChange={(event) => setWorkspaceName(event.target.value)} /></div>
      <div className="flex items-center justify-between"><p className="text-sm">Auto-refresh dashboard every 30s</p><Switch checked={autoRefresh} onCheckedChange={setAutoRefresh} /></div>
      <Button>Save General</Button>
      </CardContent>
      </Card>
      </TabsContent>

      <TabsContent value="notifications">
      <Card>
      <CardHeader><CardTitle>Notification Rules</CardTitle></CardHeader>
      <CardContent className="space-y-3">
      <label className="flex items-center gap-2 text-sm"><Checkbox checked={notifyFailures} onCheckedChange={(checked) => setNotifyFailures(Boolean(checked))} />Run failures</label>
      <label className="flex items-center gap-2 text-sm"><Checkbox checked={notifyWarnings} onCheckedChange={(checked) => setNotifyWarnings(Boolean(checked))} />Connector warnings</label>
      <Button>Save Notifications</Button>
      </CardContent>
      </Card>
      </TabsContent>

      <TabsContent value="saved">
      <Card>
      <CardHeader><CardTitle>Saved Views</CardTitle></CardHeader>
      <CardContent>
      <Table>
      <TableHeader><TableRow><TableHead>Name</TableHead><TableHead>Scope</TableHead><TableHead className="text-right">Action</TableHead></TableRow></TableHeader>
      <TableBody>
      <TableRow><TableCell>Open Gaps</TableCell><TableCell>Results</TableCell><TableCell className="text-right"><Button size="sm" variant="outline">Open</Button></TableCell></TableRow>
      <TableRow><TableCell>Failing Connectors</TableCell><TableCell>Health</TableCell><TableCell className="text-right"><Button size="sm" variant="outline">Open</Button></TableCell></TableRow>
      </TableBody>
      </Table>
      </CardContent>
      </Card>
      </TabsContent>

      <TabsContent value="integrations">
      <Card>
      <CardHeader><CardTitle>Integrations</CardTitle></CardHeader>
      <CardContent><Button variant="outline">Manage API keys</Button></CardContent>
      </Card>
      </TabsContent>
      </Tabs>
      </section>
      </div>
    </div>
  );
}