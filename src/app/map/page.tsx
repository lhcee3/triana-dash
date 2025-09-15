import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Layers, Search, Siren, User, Video } from "lucide-react";
import Image from "next/image";

export default function MapPage() {
  return (
    <div className="h-[calc(100vh_-_2rem)] md:h-[calc(100vh_-_1rem)] w-full relative -m-2 md:m-0">
      <Image
        src="https://picsum.photos/seed/bigmap/1600/1200"
        alt="Interactive Map"
        fill
        className="object-cover"
        data-ai-hint="map satellite"
      />
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="absolute top-8 left-8">
        <h1 className="text-3xl font-headline font-bold tracking-tight text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">Interactive Map</h1>
        <p className="text-muted-foreground text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
          Real-time tracking and geo-fencing.
        </p>
      </div>

      <Card className="absolute top-8 right-8 w-80 shadow-2xl bg-background/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="font-headline flex items-center gap-2">
            <Layers />
            Map Layers & Controls
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search location or Tourist ID..." className="pl-8" />
          </div>
          <div className="space-y-2">
            <Label>Overlays</Label>
            <div className="flex items-center space-x-2">
              <Checkbox id="tourists" defaultChecked />
              <User className="h-4 w-4 text-primary" />
              <label htmlFor="tourists" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Tourist Locations
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="risks" defaultChecked />
              <Siren className="h-4 w-4 text-destructive" />
              <label htmlFor="risks" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                High-Risk Zones
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="cameras" />
              <Video className="h-4 w-4 text-accent" />
              <label htmlFor="cameras" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                CCTV Cameras
              </label>
            </div>
          </div>
          <Button className="w-full">Apply Filters</Button>
        </CardContent>
      </Card>
    </div>
  );
}
