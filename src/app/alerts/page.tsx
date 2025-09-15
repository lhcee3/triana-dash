import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ListFilter } from "lucide-react";

const alerts = [
  { id: 'ALT-021', type: 'Geo-Fence Exit', touristId: 'T-84392', location: 'City Outskirts', timestamp: '2024-07-21 14:30:15', status: 'Investigating' },
  { id: 'ALT-020', type: 'SOS Alert', touristId: 'T-19874', location: 'Old Town Alley', timestamp: '2024-07-21 14:25:02', status: 'Urgent' },
  { id: 'ALT-019', type: 'Health Anomaly', touristId: 'T-55431', location: 'Beachfront', timestamp: '2024-07-21 13:50:45', status: 'Resolved' },
  { id: 'ALT-018', type: 'Geo-Fence Entry', touristId: 'T-11234', location: 'High-Risk Zone A', timestamp: '2024-07-21 13:10:00', status: 'Acknowledged' },
  { id: 'ALT-017', type: 'SOS Alert', touristId: 'T-67890', location: 'Mountain Trail', timestamp: '2024-07-20 18:05:11', status: 'Resolved' },
  { id: 'ALT-016', type: 'Device Disconnected', touristId: 'T-84392', location: 'N/A', timestamp: '2024-07-20 15:00:03', status: 'Investigating' },
];

export default function AlertsPage() {
  return (
    <div className="flex-1 space-y-8 p-4 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h1 className="text-3xl font-headline font-bold tracking-tight">Alert History</h1>
          <p className="text-muted-foreground">An organized view of all system-generated alerts.</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <ListFilter className="mr-2 h-4 w-4" />
              Filter Alerts
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked>Urgent</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Investigating</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Acknowledged</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Resolved</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Card>
        <CardContent className="pt-6">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Alert ID</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Tourist ID</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Timestamp</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {alerts.map((alert) => (
                        <TableRow key={alert.id} className={alert.status === 'Urgent' ? 'bg-destructive/10 hover:bg-destructive/20' : ''}>
                            <TableCell className="font-medium">{alert.id}</TableCell>
                            <TableCell>{alert.type}</TableCell>
                            <TableCell>{alert.touristId}</TableCell>
                            <TableCell>{alert.location}</TableCell>
                            <TableCell>{alert.timestamp}</TableCell>
                            <TableCell>
                                <Badge variant={alert.status === 'Urgent' ? 'destructive' : alert.status === 'Resolved' ? 'default' : 'secondary'}>
                                    {alert.status}
                                </Badge>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
      </Card>
    </div>
  );
}
