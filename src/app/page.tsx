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
    <div className="flex-1 space-y-8 p-6 md:p-8 min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-4xl font-headline font-bold gradient-text">Dashboard</h1>
          <p className="text-slate-400 font-medium">Real-time overview of tourist safety and incidents</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-slate-800/50 border-slate-700 shadow-xl hover:bg-slate-800/70 transition-all duration-300 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-slate-200">Active Tourists</CardTitle>
            <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 shadow-md">
              <Users className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">12,543</div>
            <div className="flex items-center gap-1 mt-2">
              <div className="text-xs text-emerald-400 bg-emerald-500/20 px-2 py-1 rounded-lg font-semibold">
                +20.1%
              </div>
              <p className="text-xs text-slate-400">from last month</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 shadow-xl hover:bg-slate-800/70 transition-all duration-300 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-slate-200">High-Risk Zones</CardTitle>
            <div className="p-2 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 shadow-md">
              <Activity className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">5</div>
            <div className="flex items-center gap-1 mt-2">
              <div className="text-xs text-rose-400 bg-rose-500/20 px-2 py-1 rounded-lg font-semibold">
                Active
              </div>
              <p className="text-xs text-slate-400">zones monitored</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 shadow-xl hover:bg-slate-800/70 transition-all duration-300 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-semibold text-slate-200">Active Alerts</CardTitle>
            <div className="p-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 shadow-md">
              <ShieldAlert className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">3</div>
            <div className="flex items-center gap-1 mt-2">
              <div className="text-xs text-amber-400 bg-amber-500/20 px-2 py-1 rounded-lg font-semibold">
                +2 new
              </div>
              <p className="text-xs text-slate-400">since last hour</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 shadow-xl hover:bg-slate-800/70 transition-all duration-300 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-200">Incidents Reported</CardTitle>
            <BarChart3 className="h-4 w-4 text-indigo-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">27</div>
            <p className="text-xs text-slate-400">In the last 24 hours</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-headline text-white">Tourist Cluster Heatmap</CardTitle>
            <CardDescription className="text-slate-300">Real-time visualization of tourist density and high-risk zones.</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[450px] w-full relative">
              {/* CSS-only heatmap visualization */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 rounded-md border border-slate-600"></div>
              
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

              <Card className="absolute top-4 right-4 w-72 shadow-2xl bg-slate-900/90 border-slate-600 backdrop-blur-sm">
                <CardHeader className="p-4">
                  <CardTitle className="font-headline text-base flex items-center gap-2 text-white">
                    <Layers className="text-blue-400" />
                    Map Layers
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 space-y-3">
                  <div className="space-y-2">
                    <Label className="text-xs text-slate-300">Overlays</Label>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="tourists" defaultChecked />
                      <User className="h-4 w-4 text-blue-400" />
                      <label htmlFor="tourists" className="text-sm font-medium leading-none text-slate-100">
                        Tourist Locations
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="risks" defaultChecked />
                      <Siren className="h-4 w-4 text-rose-400" />
                      <label htmlFor="risks" className="text-sm font-medium leading-none text-slate-100">
                        High-Risk Zones
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="cameras" />
                      <Video className="h-4 w-4 text-indigo-400" />
                      <label htmlFor="cameras" className="text-sm font-medium leading-none text-slate-100">
                        CCTV Cameras
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-4 lg:col-span-3 bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-headline text-white">Recent Incidents</CardTitle>
            <CardDescription className="text-slate-300">A list of the most recent incidents reported.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-slate-700">
                  <TableHead className="text-slate-300">Incident</TableHead>
                  <TableHead className="text-slate-300">Location</TableHead>
                  <TableHead className="text-slate-300">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-slate-800 hover:bg-slate-800/30">
                  <TableCell>
                    <div className="font-medium text-white">Missing Person</div>
                    <div className="text-sm text-slate-400">John Doe, 24</div>
                  </TableCell>
                  <TableCell className="text-slate-200">City Center</TableCell>
                  <TableCell><Badge variant="destructive" className="bg-rose-600 text-white">Urgent</Badge></TableCell>
                </TableRow>
                <TableRow className="border-slate-800 hover:bg-slate-800/30">
                  <TableCell>
                    <div className="font-medium text-white">Minor Theft</div>
                    <div className="text-sm text-slate-400">Tourist reported stolen wallet</div>
                  </TableCell>
                  <TableCell className="text-slate-200">Old Town Market</TableCell>
                  <TableCell><Badge variant="secondary" className="bg-amber-600 text-white">Active</Badge></TableCell>
                </TableRow>
                <TableRow className="border-slate-800 hover:bg-slate-800/30">
                  <TableCell>
                    <div className="font-medium text-white">Medical Emergency</div>
                    <div className="text-sm text-slate-400">Tourist fainted</div>
                  </TableCell>
                  <TableCell className="text-slate-200">Beachfront</TableCell>
                  <TableCell><Badge className="bg-emerald-600 text-white">Resolved</Badge></TableCell>
                </TableRow>
                 <TableRow className="border-slate-800 hover:bg-slate-800/30">
                  <TableCell>
                    <div className="font-medium text-white">Suspicious Activity</div>
                    <div className="text-sm text-slate-400">Unattended baggage</div>
                  </TableCell>
                  <TableCell className="text-slate-200">Main Station</TableCell>
                  <TableCell><Badge variant="secondary" className="bg-amber-600 text-white">Active</Badge></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
