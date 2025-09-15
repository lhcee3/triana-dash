import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Activity, Users, ShieldAlert, BarChart3 } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-1 space-y-8 p-4 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h1 className="text-3xl font-headline font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Real-time overview of tourist safety and incidents.</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Tourists</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,543</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High-Risk Zones</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">5</div>
            <p className="text-xs text-muted-foreground">Currently active</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
            <ShieldAlert className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">3</div>
            <p className="text-xs text-muted-foreground">+2 since last hour</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Incidents Reported</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">27</div>
            <p className="text-xs text-muted-foreground">In the last 24 hours</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle className="font-headline">Tourist Cluster Heatmap</CardTitle>
            <CardDescription>Visualization of tourist density across the city.</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <Image
              src="https://picsum.photos/seed/heatmap/800/400"
              alt="Heatmap of tourist clusters"
              width={800}
              height={400}
              className="rounded-md"
              data-ai-hint="map city"
            />
          </CardContent>
        </Card>
        <Card className="col-span-4 lg:col-span-3">
          <CardHeader>
            <CardTitle className="font-headline">Recent Incidents</CardTitle>
            <CardDescription>A list of the most recent incidents reported.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Incident</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Missing Person</div>
                    <div className="text-sm text-muted-foreground">John Doe, 24</div>
                  </TableCell>
                  <TableCell>City Center</TableCell>
                  <TableCell><Badge variant="destructive">Urgent</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Minor Theft</div>
                    <div className="text-sm text-muted-foreground">Tourist reported stolen wallet</div>
                  </TableCell>
                  <TableCell>Old Town Market</TableCell>
                  <TableCell><Badge variant="secondary">Active</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Medical Emergency</div>
                    <div className="text-sm text-muted-foreground">Tourist fainted</div>
                  </TableCell>
                  <TableCell>Beachfront</TableCell>
                  <TableCell><Badge>Resolved</Badge></TableCell>
                </TableRow>
                 <TableRow>
                  <TableCell>
                    <div className="font-medium">Suspicious Activity</div>
                    <div className="text-sm text-muted-foreground">Unattended baggage</div>
                  </TableCell>
                  <TableCell>Main Station</TableCell>
                  <TableCell><Badge variant="secondary">Active</Badge></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
