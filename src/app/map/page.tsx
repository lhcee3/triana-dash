'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Layers, Search, Siren, User, Video } from "lucide-react";
import dynamic from 'next/dynamic';
import { searchPlace, type GeocodingResult } from '@/lib/geocoding';

// Dynamically import the OpenLayers map component to avoid SSR issues
const OpenLayersMap = dynamic(() => import('@/components/openlayers-map'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 rounded-lg animate-pulse flex items-center justify-center text-slate-300">Loading Interactive Map...</div>
});

export default function MapPage() {
  // State for controlling map overlays
  const [showTourists, setShowTourists] = useState(true);
  const [showRiskZones, setShowRiskZones] = useState(true);
  const [showCCTV, setShowCCTV] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // State for place search and map navigation
  const [placeSearchQuery, setPlaceSearchQuery] = useState('');
  const [isSearchingPlace, setIsSearchingPlace] = useState(false);
  const [searchResult, setSearchResult] = useState<GeocodingResult | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number] | null>(null);

  const handleSearchPlace = async () => {
    if (!placeSearchQuery.trim()) return;
    
    setIsSearchingPlace(true);
    try {
      const result = await searchPlace(placeSearchQuery);
      if (result.success && result.results.length > 0) {
        const firstResult = result.results[0];
        setSearchResult(firstResult);
        setMapCenter([firstResult.lon, firstResult.lat]); // OpenLayers uses lon, lat
        console.log(`Found place: ${firstResult.display_name}`);
      } else {
        console.log('No results found for:', placeSearchQuery);
        alert('No places found for your search. Please try a different search term.');
      }
    } catch (error) {
      console.error('Search error:', error);
      alert('Error searching for place. Please try again.');
    } finally {
      setIsSearchingPlace(false);
    }
  };

  const handleApplyFilters = () => {
    // This will trigger the map to update its display based on the current state
    console.log('Filters applied:', { showTourists, showRiskZones, showCCTV, searchQuery });
    
    // Show a brief feedback message
    const filterCount = [showTourists, showRiskZones, showCCTV].filter(Boolean).length;
    console.log(`Applied ${filterCount} filter(s) to the map`);
  };

  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* Modern Background with Ocean Blue Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1)_0px,transparent_50%)] opacity-60"></div>
      </div>

      {/* Interactive OpenLayers Map */}
      <div className="absolute inset-0 z-10">
        <OpenLayersMap 
          showTourists={showTourists}
          showRiskZones={showRiskZones}
          showCCTV={showCCTV}
          searchQuery={searchQuery}
          mapCenter={mapCenter}
          searchResult={searchResult}
        />
      </div>
      
      {/* Modern Header */}
      <div className="absolute top-6 left-6 z-[1000] pointer-events-none animate-slide-up">
        <div className="glass rounded-2xl px-6 py-4">
          <h1 className="text-2xl font-headline font-bold gradient-text">
            Guardian Eye
          </h1>
          <p className="text-slate-400 text-sm font-medium">
            Real-time safety monitoring
          </p>
        </div>
      </div>

      {/* Modern Control Panel */}
      <div className="absolute top-6 right-6 w-96 z-[1000] animate-slide-up">
        <Card className="glass rounded-2xl border-white/10 shadow-2xl backdrop-blur-xl">
          <CardHeader className="pb-4">
            <CardTitle className="font-headline flex items-center gap-3 text-slate-100">
              <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600">
                <Layers className="h-4 w-4 text-white" />
              </div>
              Control Center
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Place Search Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600">
                  <Search className="h-3 w-3 text-white" />
                </div>
                <Label className="text-slate-300 font-medium text-sm">Search Places</Label>
              </div>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Input
                    placeholder="Find locations, landmarks..."
                    value={placeSearchQuery}
                    onChange={(e) => setPlaceSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearchPlace()}
                    className="bg-white/5 border-white/10 text-slate-100 placeholder:text-slate-500 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                    disabled={isSearchingPlace}
                  />
                </div>
                <Button 
                  onClick={handleSearchPlace}
                  disabled={isSearchingPlace || !placeSearchQuery.trim()}
                  className="btn-gradient rounded-xl px-4 font-medium"
                >
                  {isSearchingPlace ? 'Searching...' : 'Go'}
                </Button>
              </div>
              {searchResult && (
                <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 animate-scale-in">
                  <p className="text-sm text-emerald-300 font-medium">
                    📍 {searchResult.display_name.split(',').slice(0, 3).join(', ')}
                  </p>
                </div>
              )}
            </div>
            
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            
            {/* Tourist Filter Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600">
                  <User className="h-3 w-3 text-white" />
                </div>
                <Label className="text-slate-300 font-medium text-sm">Tourist Filter</Label>
              </div>
              <div className="relative">
                <Input
                  placeholder="Filter by tourist name or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white/5 border-white/10 text-slate-100 placeholder:text-slate-500 rounded-xl pl-4 focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* Layer Controls */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600">
                  <Layers className="h-3 w-3 text-white" />
                </div>
                <Label className="text-slate-300 font-medium text-sm">Map Layers</Label>
              </div>
              
              <div className="grid gap-3">
                {/* Tourist Layer */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="flex items-center gap-3">
                    <User className="h-4 w-4 text-blue-400" />
                    <span className="text-slate-200 font-medium">Tourists</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {showTourists && <div className="w-2 h-2 rounded-full bg-emerald-500"></div>}
                    <Checkbox
                      checked={showTourists}
                      onCheckedChange={(checked) => setShowTourists(checked === true)}
                      className="border-white/30 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                    />
                  </div>
                </div>

                {/* Risk Zones Layer */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="flex items-center gap-3">
                    <Siren className="h-4 w-4 text-rose-400" />
                    <span className="text-slate-200 font-medium">Risk Zones</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {showRiskZones && <div className="w-2 h-2 rounded-full bg-emerald-500"></div>}
                    <Checkbox
                      checked={showRiskZones}
                      onCheckedChange={(checked) => setShowRiskZones(checked === true)}
                      className="border-white/30 data-[state=checked]:bg-rose-500 data-[state=checked]:border-rose-500"
                    />
                  </div>
                </div>

                {/* CCTV Layer */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="flex items-center gap-3">
                    <Video className="h-4 w-4 text-indigo-400" />
                    <span className="text-slate-200 font-medium">CCTV Cameras</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {showCCTV && <div className="w-2 h-2 rounded-full bg-emerald-500"></div>}
                    <Checkbox
                      checked={showCCTV}
                      onCheckedChange={(checked) => setShowCCTV(checked === true)}
                      className="border-white/30 data-[state=checked]:bg-indigo-500 data-[state=checked]:border-indigo-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* Apply Button */}
            <Button 
              onClick={handleApplyFilters}
              className="w-full btn-gradient rounded-xl py-3 font-medium text-white shadow-lg"
            >
              Apply Filters
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}