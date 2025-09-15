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
    <div className="flex-1 space-y-8 p-4 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h1 className="text-3xl font-headline font-bold tracking-tight">Incident Management</h1>
          <p className="text-muted-foreground">Report new incidents and track existing ones.</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Report New Incident
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">All Incidents</CardTitle>
              <CardDescription>A log of all reported incidents.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead><span className="sr-only">Actions</span></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {incidents.map((incident) => (
                            <TableRow key={incident.id}>
                                <TableCell className="font-medium">{incident.id}</TableCell>
                                <TableCell>{incident.type}</TableCell>
                                <TableCell>{incident.location}</TableCell>
                                <TableCell>
                                    <Badge variant={incident.status === 'Urgent' ? 'destructive' : incident.status === 'Active' ? 'secondary' : 'default'}>
                                        {incident.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <span className="sr-only">Open menu</span>
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>View Details</DropdownMenuItem>
                                            <DropdownMenuItem>Assign Officer</DropdownMenuItem>
                                            <DropdownMenuItem>Update Status</DropdownMenuItem>
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
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Report an Incident</CardTitle>
              <CardDescription>Fill out the form below to report a new incident.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="type">Incident Type</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="missing">Missing Person</SelectItem>
                    <SelectItem value="theft">Theft</SelectItem>
                    <SelectItem value="medical">Medical Emergency</SelectItem>
                    <SelectItem value="suspicious">Suspicious Activity</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="e.g., City Center" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="severity">Severity</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select severity" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Provide details about the incident..." />
              </div>
              <Button className="w-full">Submit Report</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
