import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { MoreHorizontal, PlusCircle } from "lucide-react";

const incidents = [
    { id: 'INC-001', type: 'Missing Person', location: 'City Center', reportedBy: 'PO-1234', status: 'Urgent' },
    { id: 'INC-002', type: 'Theft', location: 'Old Town Market', reportedBy: 'PO-5678', status: 'Active' },
    { id: 'INC-003', type: 'Medical Emergency', location: 'Beachfront', reportedBy: 'PO-1234', status: 'Resolved' },
    { id: 'INC-004', type: 'Suspicious Activity', location: 'Main Station', reportedBy: 'PO-9012', status: 'Active' },
    { id: 'INC-005', type: 'Disturbance', location: 'Grand Hotel', reportedBy: 'PO-5678', status: 'Resolved' },
];

export default function IncidentsPage() {
  return (
    <div className="flex-1 space-y-8 p-4 md:p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-slate-100 min-h-screen">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h1 className="text-3xl font-headline font-bold tracking-tight text-slate-100">Incident Management</h1>
          <p className="text-slate-400">Report new incidents and track existing ones.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-500 text-white">
          <PlusCircle className="mr-2 h-4 w-4" />
          Report New Incident
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card className="glass border-slate-600/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-headline text-slate-100">All Incidents</CardTitle>
              <CardDescription className="text-slate-400">A log of all reported incidents.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow className="border-slate-700">
                            <TableHead className="text-slate-300">ID</TableHead>
                            <TableHead className="text-slate-300">Type</TableHead>
                            <TableHead className="text-slate-300">Location</TableHead>
                            <TableHead className="text-slate-300">Status</TableHead>
                            <TableHead className="text-slate-300"><span className="sr-only">Actions</span></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {incidents.map((incident) => (
                            <TableRow key={incident.id} className="border-slate-800 hover:bg-slate-800/30">
                                <TableCell className="font-medium text-slate-100">{incident.id}</TableCell>
                                <TableCell className="text-slate-200">{incident.type}</TableCell>
                                <TableCell className="text-slate-200">{incident.location}</TableCell>
                                <TableCell>
                                    <Badge variant={incident.status === 'Urgent' ? 'destructive' : incident.status === 'Active' ? 'secondary' : 'default'}
                                           className={
                                               incident.status === 'Urgent' ? 'bg-rose-600 text-white' :
                                               incident.status === 'Active' ? 'bg-amber-600 text-white' :
                                               'bg-emerald-600 text-white'
                                           }>
                                        {incident.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0 text-slate-300 hover:text-slate-100 hover:bg-slate-800">
                                                <span className="sr-only">Open menu</span>
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end" className="bg-slate-900 border-slate-600">
                                            <DropdownMenuItem className="text-slate-100 hover:bg-slate-800">View Details</DropdownMenuItem>
                                            <DropdownMenuItem className="text-slate-100 hover:bg-slate-800">Assign Officer</DropdownMenuItem>
                                            <DropdownMenuItem className="text-slate-100 hover:bg-slate-800">Update Status</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-1">
          <Card className="glass border-slate-600/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-headline text-slate-100">Report an Incident</CardTitle>
              <CardDescription className="text-slate-400">Fill out the form below to report a new incident.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="type" className="text-slate-300">Incident Type</Label>
                <Select>
                  <SelectTrigger className="bg-slate-800/50 border-slate-600 text-slate-100">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900 border-slate-600">
                    <SelectItem value="missing" className="text-slate-100">Missing Person</SelectItem>
                    <SelectItem value="theft" className="text-slate-100">Theft</SelectItem>
                    <SelectItem value="medical" className="text-slate-100">Medical Emergency</SelectItem>
                    <SelectItem value="suspicious" className="text-slate-100">Suspicious Activity</SelectItem>
                    <SelectItem value="other" className="text-slate-100">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location" className="text-slate-300">Location</Label>
                <Input id="location" placeholder="e.g., City Center" className="bg-slate-800/50 border-slate-600 text-slate-100" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="severity" className="text-slate-300">Severity</Label>
                <Select>
                  <SelectTrigger className="bg-slate-800/50 border-slate-600 text-slate-100">
                    <SelectValue placeholder="Select severity" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900 border-slate-600">
                    <SelectItem value="low" className="text-slate-100">Low</SelectItem>
                    <SelectItem value="medium" className="text-slate-100">Medium</SelectItem>
                    <SelectItem value="high" className="text-slate-100">High</SelectItem>
                    <SelectItem value="urgent" className="text-slate-100">Urgent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description" className="text-slate-300">Description</Label>
                <Textarea id="description" placeholder="Provide details about the incident..." className="bg-slate-800/50 border-slate-600 text-slate-100" />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white">Submit Report</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
