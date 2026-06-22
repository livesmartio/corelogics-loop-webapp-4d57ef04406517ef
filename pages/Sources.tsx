import { CheckCircle2, FileUp, MoreHorizontal, Plug, Plus, RefreshCw, Upload } from "lucide-react";
import { Alert, AlertDescription } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Switch } from "../components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import ConnectorStatusBadge from "../components/ConnectorStatusBadge";

export default function Sources() {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showEnabledOnly, setShowEnabledOnly] = useState(true);
  const [selectedFile, setSelectedFile] = useState("");

  const sources = [
    { id: "1", name: "Microsoft Graph", type: "SaaS", status: "Connected", lastSync: "5m ago", enabled: true, path: "/sources/microsoft-graph" },
    { id: "2", name: "Todoist", type: "Task API", status: "Warning", lastSync: "34m ago", enabled: true, path: "/sources/todoist" },
    { id: "3", name: "Favorites File", type: "File Upload", status: "Connected", lastSync: "2h ago", enabled: true, path: "/sources/favorites" },
    { id: "4", name: "Legacy XML", type: "File Upload", status: "Error", lastSync: "1d ago", enabled: false, path: "/sources/favorites" },
  ];

  const filteredSources = useMemo(() => {
    return sources.filter((source) => {
      const queryMatch = source.name.toLowerCase().includes(query.toLowerCase());
      const statusMatch = statusFilter === "all" || source.status === statusFilter;
      const enabledMatch = showEnabledOnly ? source.enabled : true;
      return queryMatch && statusMatch && enabledMatch;
    });
  }, [query, showEnabledOnly, statusFilter]);

  const handleFileChange = (event: any) => {
    const nextFile = event.target.files?.[0]?.name ?? "";
    setSelectedFile(nextFile);
  };

  return (
    <div className="w-full min-w-0 overflow-x-hidden bg-background text-foreground">
      <div className="flex w-full min-w-0 flex-col gap-4">
        <section className="space-y-4">
          <Card>
            <CardContent className="flex flex-col gap-3 pt-6 lg:flex-row lg:items-center">
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search sources..."
                className="lg:max-w-sm"
              />
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Filter status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="Connected">Connected</SelectItem>
                  <SelectItem value="Warning">Warning</SelectItem>
                  <SelectItem value="Error">Error</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex items-center gap-2">
                <Switch checked={showEnabledOnly} onCheckedChange={setShowEnabledOnly} />
                <p className="text-sm text-muted-foreground">Enabled only</p>
              </div>
              <div className="flex flex-1 justify-end gap-2">
                <Button variant="outline" className="gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Refresh
                </Button>
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  Add source
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Registered Sources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Sync</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredSources.map((source) => (
                      <TableRow key={source.id}>
                        <TableCell className="font-medium">{source.name}</TableCell>
                        <TableCell>{source.type}</TableCell>
                        <TableCell>
                          <ConnectorStatusBadge status={source.status} />
                        </TableCell>
                        <TableCell className="text-muted-foreground">{source.lastSync}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="bg-popover text-popover-foreground">
                              <DropdownMenuItem asChild>
                                <Link to={source.path}>Open connector</Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem>Run sync</DropdownMenuItem>
                              <DropdownMenuItem>Disable</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Microsoft Graph</CardTitle>
              <CardDescription>OAuth connector for Teams, tasks, and folders.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Badge variant="secondary" className="gap-1">
                <Plug className="h-3.5 w-3.5" /> SaaS Connector
              </Badge>
              <Button className="w-full" variant="outline">
                Configure
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Todoist</CardTitle>
              <CardDescription>Sync project and section hierarchy using API token.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Badge variant="secondary" className="gap-1">
                <Plug className="h-3.5 w-3.5" /> API Connector
              </Badge>
              <Button className="w-full" variant="outline">
                Configure
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upload Favorites</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input type="file" accept=".html,.json" onChange={handleFileChange} />
              <Button className="w-full gap-2" disabled={!selectedFile}>
                <Upload className="h-4 w-4" />
                Upload file
              </Button>
              {selectedFile ? (
                <Alert>
                  <FileUp className="h-4 w-4" />
                  <AlertDescription className="flex items-center justify-between gap-3">
                    <span>{selectedFile}</span>
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  </AlertDescription>
                </Alert>
              ) : null}
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}