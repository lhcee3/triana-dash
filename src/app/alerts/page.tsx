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
    <div className="flex-1 space-y-8 p-4 md:p-8 bg-black text-teal-100 min-h-screen">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h1 className="text-3xl font-headline font-bold tracking-tight text-teal-100">Alert History</h1>
          <p className="text-teal-400">An organized view of all system-generated alerts.</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="border-teal-600 text-teal-200 hover:bg-teal-950/50">
              <ListFilter className="mr-2 h-4 w-4" />
              Filter Alerts
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-black/95 border-teal-600 backdrop-blur-sm">
            <DropdownMenuLabel className="text-teal-200">Filter by Status</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-teal-700" />
            <DropdownMenuCheckboxItem checked className="text-teal-100 focus:bg-teal-950/50">Urgent</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked className="text-teal-100 focus:bg-teal-950/50">Investigating</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem className="text-teal-100 focus:bg-teal-950/50">Acknowledged</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem className="text-teal-100 focus:bg-teal-950/50">Resolved</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Card className="bg-black/90 border-teal-600 backdrop-blur-sm">
        <CardContent className="pt-6">
            <Table>
                <TableHeader>
                    <TableRow className="border-teal-700">
                        <TableHead className="text-teal-300">Alert ID</TableHead>
                        <TableHead className="text-teal-300">Type</TableHead>
                        <TableHead className="text-teal-300">Tourist ID</TableHead>
                        <TableHead className="text-teal-300">Location</TableHead>
                        <TableHead className="text-teal-300">Timestamp</TableHead>
                        <TableHead className="text-teal-300">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {alerts.map((alert) => (
                        <TableRow 
                            key={alert.id} 
                            className={alert.status === 'Urgent' 
                                ? 'bg-red-950/30 hover:bg-red-950/50 border-red-700' 
                                : 'border-teal-800 hover:bg-teal-950/30'
                            }
                        >
                            <TableCell className="font-medium text-teal-100">{alert.id}</TableCell>
                            <TableCell className="text-teal-200">{alert.type}</TableCell>
                            <TableCell className="text-teal-200">{alert.touristId}</TableCell>
                            <TableCell className="text-teal-200">{alert.location}</TableCell>
                            <TableCell className="text-teal-200">{alert.timestamp}</TableCell>
                            <TableCell>
                                <Badge variant={alert.status === 'Urgent' ? 'destructive' : alert.status === 'Resolved' ? 'default' : 'secondary'}
                                       className={
                                           alert.status === 'Urgent' ? 'bg-red-600 text-white' :
                                           alert.status === 'Resolved' ? 'bg-green-600 text-white' :
                                           alert.status === 'Investigating' ? 'bg-yellow-600 text-white' :
                                           'bg-teal-600 text-white'
                                       }>
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
