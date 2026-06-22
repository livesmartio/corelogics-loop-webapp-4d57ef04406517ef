import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../components/ui/breadcrumb";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import GtdStatusBadge from "../components/GtdStatusBadge";

import { MoreHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function ResultsFull() {
    const [query, setQuery] = useState("")
    const [selectedIds, setSelectedIds] = useState<string[]>([])
    const [bulkAction, setBulkAction] = useState("reference")
    const rows = [
      { id: "1", path: "Finance / AP / Recon", status: "Needs Source Fix", source: "Microsoft Graph" },
      { id: "2", path: "Ops / Backup", status: "Next Action", source: "Todoist" },
      { id: "3", path: "People / Onboarding", status: "Waiting For", source: "Favorites" },
    ]
    const filteredRows = useMemo(() => rows.filter((row) => row.path.toLowerCase().includes(query.toLowerCase())), [query])
    const allChecked = filteredRows.length > 0 && filteredRows.every((row) => selectedIds.includes(row.id))
    const toggleSingle = (id: string) => {
      setSelectedIds((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]))
    }
    const toggleAll = () => {
      if (allChecked) {
        setSelectedIds([])
        return
      }
      setSelectedIds(filteredRows.map((row) => row.id))
    }
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="flex w-full min-w-0 flex-col gap-4">
          <section className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
      <Breadcrumb>
      <BreadcrumbList>
      <BreadcrumbItem><BreadcrumbLink asChild><Link to="/results">Results</Link></BreadcrumbLink></BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem><BreadcrumbPage>Full Table</BreadcrumbPage></BreadcrumbItem>
      </BreadcrumbList>
      </Breadcrumb>
      <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search hierarchy path" className="w-full md:w-80" />
      </div>

      <Card>
      <CardHeader><CardTitle>Comparison Rows</CardTitle></CardHeader>
      <CardContent className="space-y-3">
      <div className="overflow-x-auto">
      <Table>
      <TableHeader>
      <TableRow>
      <TableHead><Checkbox checked={allChecked} onCheckedChange={toggleAll} /></TableHead>
      <TableHead>Path</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Source</TableHead>
      <TableHead className="text-right">Actions</TableHead>
      </TableRow>
      </TableHeader>
      <TableBody>
      {filteredRows.map((row) => (
      <TableRow key={row.id}>
      <TableCell><Checkbox checked={selectedIds.includes(row.id)} onCheckedChange={() => toggleSingle(row.id)} /></TableCell>
      <TableCell className="font-medium">{row.path}</TableCell>
      <TableCell><GtdStatusBadge status={row.status} /></TableCell>
      <TableCell>{row.source}</TableCell>
      <TableCell className="text-right">
      <DropdownMenu>
      <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-popover text-popover-foreground">
      <DropdownMenuItem>Open details</DropdownMenuItem>
      <DropdownMenuItem>Reclassify</DropdownMenuItem>
      </DropdownMenuContent>
      </DropdownMenu>
      </TableCell>
      </TableRow>
      ))}
      </TableBody>
      </Table>
      </div>

      <Card className="bg-muted/40">
      <CardContent className="flex flex-col gap-3 pt-6 md:flex-row md:items-center md:justify-between">
      <p className="text-sm text-muted-foreground">{selectedIds.length} rows selected</p>
      <div className="flex gap-2">
      <Select value={bulkAction} onValueChange={setBulkAction}>
      <SelectTrigger className="w-48"><SelectValue /></SelectTrigger>
      <SelectContent>
      <SelectItem value="reference">Set Reference</SelectItem>
      <SelectItem value="waiting">Set Waiting For</SelectItem>
      <SelectItem value="next">Set Next Action</SelectItem>
      </SelectContent>
      </Select>
      <Button disabled={selectedIds.length === 0}>Apply</Button>
      </div>
      </CardContent>
      </Card>
      </CardContent>
      </Card>
      </section>
      </div>
    </div>
  );
}