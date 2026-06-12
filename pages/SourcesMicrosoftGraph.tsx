import React from "react";
import { Alert, AlertDescription } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../components/ui/breadcrumb";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Switch } from "../components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import { ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SourcesMicrosoftGraph() {
    const [autoRefresh, setAutoRefresh] = useState(true)
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
      <BreadcrumbItem><BreadcrumbPage>Microsoft Graph</BreadcrumbPage></BreadcrumbItem>
      </BreadcrumbList>
      </Breadcrumb>
      <h2 className="mt-2 text-2xl font-semibold">Microsoft Graph</h2>
      </div>
      <Badge>OAuth 2.0</Badge>
      </div>

      <Card>
      <CardHeader>
      <CardTitle>Connection</CardTitle>
      <CardDescription>Use delegated permissions for hierarchy discovery.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
      <div className="flex items-center justify-between">
      <p className="text-sm text-muted-foreground">Enable automatic token refresh</p>
      <Switch checked={autoRefresh} onCheckedChange={setAutoRefresh} />
      </div>
      <div className="flex gap-2">
      <Button>Connect account</Button>
      <Button variant="outline">Test permissions</Button>
      </div>
      <Alert>
      <ShieldCheck className="h-4 w-4" />
      <AlertDescription>{autoRefresh ? "Refresh token automation is active." : "Manual refresh only."}</AlertDescription>
      </Alert>
      </CardContent>
      </Card>

      <Card>
      <CardHeader><CardTitle>Required scopes</CardTitle></CardHeader>
      <CardContent>
      <Table>
      <TableHeader><TableRow><TableHead>Scope</TableHead><TableHead>Purpose</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
      <TableBody>
      <TableRow><TableCell>Tasks.Read</TableCell><TableCell>Fetch task hierarchy</TableCell><TableCell><Badge>Granted</Badge></TableCell></TableRow>
      <TableRow><TableCell>Files.Read</TableCell><TableCell>Read favorites exports</TableCell><TableCell><Badge variant="secondary">Pending</Badge></TableCell></TableRow>
      </TableBody>
      </Table>
      </CardContent>
      </Card>
      </section>
      </div>
    </div>
  );
}