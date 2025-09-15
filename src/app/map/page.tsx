import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Layers, Search, Siren, User, Video } from "lucide-react";

export default function MapPage() {
  return (
    <div className="h-[calc(100vh_-_2rem)] md:h-[calc(100vh_-_1rem)] w-full relative -m-2 md:m-0">
      {/* Placeholder map background with teal gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-black to-teal-950"></div>
      
      {/* Map grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(20, 184, 166, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(20, 184, 166, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>
      
      <div className="absolute top-8 left-8">
        <h1 className="text-3xl font-headline font-bold tracking-tight text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">Interactive Map</h1>
        <p className="text-teal-200 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
          Real-time tracking and geo-fencing.
        </p>
      </div>

      <Card className="absolute top-8 right-8 w-80 shadow-2xl bg-black/90 border-teal-600 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-headline flex items-center gap-2 text-teal-100">
            <Layers className="text-teal-400" />
            Map Layers & Controls
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-teal-400" />
            <Input placeholder="Search location or Tourist ID..." className="pl-8 bg-teal-950/50 border-teal-600 text-teal-100" />
          </div>
          <div className="space-y-2">
            <Label className="text-teal-200">Overlays</Label>
            <div className="flex items-center space-x-2">
              <Checkbox id="tourists" defaultChecked />
              <User className="h-4 w-4 text-teal-400" />
              <label htmlFor="tourists" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-teal-100">
                Tourist Locations
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="risks" defaultChecked />
              <Siren className="h-4 w-4 text-red-400" />
              <label htmlFor="risks" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-teal-100">
                High-Risk Zones
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="cameras" />
              <Video className="h-4 w-4 text-teal-300" />
              <label htmlFor="cameras" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-teal-100">
                CCTV Cameras
              </label>
            </div>
          </div>
          <Button className="w-full bg-teal-600 hover:bg-teal-500 text-white">Apply Filters</Button>
        </CardContent>
      </Card>
    </div>
  );
}
