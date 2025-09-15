import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Activity, Users, ShieldAlert, BarChart3, Search, Layers, User, Siren, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  return (
    <div className="flex-1 space-y-8 p-4 md:p-8 bg-black text-teal-100 min-h-screen">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h1 className="text-3xl font-headline font-bold tracking-tight text-teal-100">Dashboard</h1>
          <p className="text-teal-400">Real-time overview of tourist safety and incidents.</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-black/90 border-teal-600 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-teal-200">Active Tourists</CardTitle>
            <Users className="h-4 w-4 text-teal-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-teal-100">12,543</div>
            <p className="text-xs text-teal-500">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-black/90 border-teal-600 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-teal-200">High-Risk Zones</CardTitle>
            <Activity className="h-4 w-4 text-teal-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-400">5</div>
            <p className="text-xs text-teal-500">Currently active</p>
          </CardContent>
        </Card>
        <Card className="bg-black/90 border-teal-600 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-teal-200">Active Alerts</CardTitle>
            <ShieldAlert className="h-4 w-4 text-teal-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-400">3</div>
            <p className="text-xs text-teal-500">+2 since last hour</p>
          </CardContent>
        </Card>
        <Card className="bg-black/90 border-teal-600 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-teal-200">Incidents Reported</CardTitle>
            <BarChart3 className="h-4 w-4 text-teal-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-teal-100">27</div>
            <p className="text-xs text-teal-500">In the last 24 hours</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 bg-black/90 border-teal-600 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-headline text-teal-100">Tourist Cluster Heatmap</CardTitle>
            <CardDescription className="text-teal-400">Real-time visualization of tourist density and high-risk zones.</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[450px] w-full relative">
              {/* CSS-only heatmap visualization */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-black to-teal-950 rounded-md"></div>
              
              {/* Map grid pattern overlay */}
              <div 
                className="absolute inset-0 opacity-30 rounded-md"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(20, 184, 166, 0.2) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(20, 184, 166, 0.2) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px'
                }}
              ></div>
              
              {/* Heatmap hotspots */}
              <div className="absolute top-20 left-16 w-16 h-16 bg-red-500/60 rounded-full blur-lg animate-pulse"></div>
              <div className="absolute top-32 right-20 w-12 h-12 bg-yellow-500/50 rounded-full blur-md"></div>
              <div className="absolute bottom-24 left-32 w-20 h-20 bg-orange-500/40 rounded-full blur-lg animate-pulse delay-500"></div>
              <div className="absolute top-40 left-1/2 w-14 h-14 bg-red-600/70 rounded-full blur-md animate-pulse delay-1000"></div>
              <div className="absolute bottom-32 right-28 w-10 h-10 bg-yellow-400/45 rounded-full blur-sm"></div>

              <Card className="absolute top-4 right-4 w-72 shadow-2xl bg-black/90 border-teal-600 backdrop-blur-sm">
                <CardHeader className="p-4">
                  <CardTitle className="font-headline text-base flex items-center gap-2 text-teal-100">
                    <Layers className="text-teal-400" />
                    Map Layers
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 space-y-3">
                  <div className="space-y-2">
                    <Label className="text-xs text-teal-300">Overlays</Label>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="tourists" defaultChecked />
                      <User className="h-4 w-4 text-teal-400" />
                      <label htmlFor="tourists" className="text-sm font-medium leading-none text-teal-100">
                        Tourist Locations
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="risks" defaultChecked />
                      <Siren className="h-4 w-4 text-red-400" />
                      <label htmlFor="risks" className="text-sm font-medium leading-none text-teal-100">
                        High-Risk Zones
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="cameras" />
                      <Video className="h-4 w-4 text-teal-300" />
                      <label htmlFor="cameras" className="text-sm font-medium leading-none text-teal-100">
                        CCTV Cameras
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-4 lg:col-span-3 bg-black/90 border-teal-600 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-headline text-teal-100">Recent Incidents</CardTitle>
            <CardDescription className="text-teal-400">A list of the most recent incidents reported.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-teal-700">
                  <TableHead className="text-teal-300">Incident</TableHead>
                  <TableHead className="text-teal-300">Location</TableHead>
                  <TableHead className="text-teal-300">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-teal-800 hover:bg-teal-950/30">
                  <TableCell>
                    <div className="font-medium text-teal-100">Missing Person</div>
                    <div className="text-sm text-teal-400">John Doe, 24</div>
                  </TableCell>
                  <TableCell className="text-teal-200">City Center</TableCell>
                  <TableCell><Badge variant="destructive" className="bg-red-600 text-white">Urgent</Badge></TableCell>
                </TableRow>
                <TableRow className="border-teal-800 hover:bg-teal-950/30">
                  <TableCell>
                    <div className="font-medium text-teal-100">Minor Theft</div>
                    <div className="text-sm text-teal-400">Tourist reported stolen wallet</div>
                  </TableCell>
                  <TableCell className="text-teal-200">Old Town Market</TableCell>
                  <TableCell><Badge variant="secondary" className="bg-yellow-600 text-white">Active</Badge></TableCell>
                </TableRow>
                <TableRow className="border-teal-800 hover:bg-teal-950/30">
                  <TableCell>
                    <div className="font-medium text-teal-100">Medical Emergency</div>
                    <div className="text-sm text-teal-400">Tourist fainted</div>
                  </TableCell>
                  <TableCell className="text-teal-200">Beachfront</TableCell>
                  <TableCell><Badge className="bg-green-600 text-white">Resolved</Badge></TableCell>
                </TableRow>
                 <TableRow className="border-teal-800 hover:bg-teal-950/30">
                  <TableCell>
                    <div className="font-medium text-teal-100">Suspicious Activity</div>
                    <div className="text-sm text-teal-400">Unattended baggage</div>
                  </TableCell>
                  <TableCell className="text-teal-200">Main Station</TableCell>
                  <TableCell><Badge variant="secondary" className="bg-yellow-600 text-white">Active</Badge></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
