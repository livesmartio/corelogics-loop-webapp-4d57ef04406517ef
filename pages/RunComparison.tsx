import React from "react";
import { Alert, AlertDescription } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Progress } from "../components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

import RunStatusBadge from "../components/RunStatusBadge";

import { PlayCircle } from "lucide-react";
import { useState } from "react";

export default function RunComparison() {
    const [scope, setScope] = useState("all")
    const [includeArchived, setIncludeArchived] = useState(false)
    const [isRunning, setIsRunning] = useState(false)
    const [progress, setProgress] = useState(0)
    const [runNumber, setRunNumber] = useState(393)
    const startRun = () => {
      setIsRunning(true)
      setProgress(15)
      setRunNumber((current) => current + 1)
    }
    const advanceProgress = () => {
      setProgress((current) => {
        const next = Math.min(current + 20, 100)
        if (next === 100) {
          setIsRunning(false)
        }
        return next
      })
    }
  return (
   <div className="w-full min-w-0 bg-background text-foreground overflow-x-hidden">
      <div className="flex w-full min-w-0 flex-col gap-4">
          <section className="grid grid-cols-1">
      <Card className="border-primary/30 bg-gradient-to-r from-primary/10 to-accent/10">
      <CardHeader>
      <Badge className="w-fit">Run Comparison</Badge>
      <CardTitle>Run hierarchy comparison now</CardTitle>
      <CardDescription>Validate cross-system structure and surface actionable gaps.</CardDescription>
      </CardHeader>
      <CardContent>
      <Button className="gap-2"><PlayCircle className="h-4 w-4" />Start guided run</Button>
      </CardContent>
      </Card>
      </section>
  <section className="grid grid-cols-1 gap-4 xl:grid-cols-3">
      <Card>
      <CardHeader><CardTitle>Scope Selection</CardTitle></CardHeader>
      <CardContent className="space-y-3">
      <Select value={scope} onValueChange={setScope}>
      <SelectTrigger><SelectValue /></SelectTrigger>
      <SelectContent>
      <SelectItem value="all">All Connectors</SelectItem>
      <SelectItem value="core">Core Sources Only</SelectItem>
      </SelectContent>
      </Select>
      <label className="flex items-center gap-2 text-sm"><Checkbox checked={includeArchived} onCheckedChange={(checked) => setIncludeArchived(Boolean(checked))} />Include archived nodes</label>
      <Button className="w-full">Validate scope</Button>
      </CardContent>
      </Card>

      <Card>
      <CardHeader><CardTitle>Run Execution</CardTitle></CardHeader>
      <CardContent className="space-y-3">
      <div className="flex items-center justify-between"><RunStatusBadge status={isRunning ? "Running" : "Queued"} /><Badge variant="outline">Run #{runNumber}</Badge></div>
      <Progress value={progress} />
      <div className="flex gap-2">
      <Button onClick={startRun} disabled={isRunning}>Run now</Button>
      <Button variant="outline" onClick={advanceProgress} disabled={!isRunning}>Advance demo</Button>
      </div>
      <Alert><AlertDescription>{isRunning ? "Comparison is executing in preview mode." : "Run is queued and ready."}</AlertDescription></Alert>
      </CardContent>
      </Card>

      <Card>
      <CardHeader><CardTitle>Post Run Actions</CardTitle></CardHeader>
      <CardContent className="space-y-2">
      <Button className="w-full" variant="outline">Open results</Button>
      <Button className="w-full" variant="outline">Queue export</Button>
      </CardContent>
      </Card>
      </section>
      </div>
    </div>
  );
}