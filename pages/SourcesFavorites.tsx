import { AlertCircle, FileUp, Upload } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../components/ui/breadcrumb";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function SourcesFavorites() {
  const [currentFile, setCurrentFile] = useState("");

  const handleFileChange = (event: any) => {
    setCurrentFile(event.target.files?.[0]?.name ?? "");
  };

  return (
    <div className="w-full min-w-0 overflow-x-hidden bg-background text-foreground">
      <div className="flex w-full min-w-0 flex-col gap-4">
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/sources">Sources</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Favorites File</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <h2 className="mt-2 text-2xl font-semibold">Favorites Source</h2>
            </div>
            <Badge>File Connector</Badge>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Upload favorites export</CardTitle>
              <CardDescription>Accepted formats: .html, .json</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input type="file" accept=".html,.json" onChange={handleFileChange} />
              <Button className="gap-2" disabled={!currentFile}>
                <Upload className="h-4 w-4" />
                Upload and validate
              </Button>
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Validation Mode</AlertTitle>
                <AlertDescription>
                  {currentFile ? `Ready to process: ${currentFile}` : "Choose a file to run structure validation."}
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sync History</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Run</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Records</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>#1921</TableCell>
                    <TableCell>
                      <Badge>Succeeded</Badge>
                    </TableCell>
                    <TableCell>3,294</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>#1920</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Warning</Badge>
                    </TableCell>
                    <TableCell>3,288</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}