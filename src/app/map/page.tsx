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
  loading: () => <div className="w-full h-full bg-gradient-to-br from-teal-900 via-black to-teal-950 rounded-lg animate-pulse flex items-center justify-center text-teal-200">Loading Interactive Map...</div>
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
    <div className="h-[calc(100vh_-_2rem)] md:h-[calc(100vh_-_1rem)] w-full relative -m-2 md:m-0 bg-black">
      {/* Interactive OpenLayers Map */}
      <div className="absolute inset-0">
        <OpenLayersMap 
          showTourists={showTourists}
          showRiskZones={showRiskZones}
          showCCTV={showCCTV}
          searchQuery={searchQuery}
          mapCenter={mapCenter}
          searchResult={searchResult}
        />
      </div>
      
      {/* Map Title */}
      <div className="absolute top-8 left-8 z-[1000] pointer-events-none">
        <h1 className="text-3xl font-headline font-bold tracking-tight text-white drop-shadow-lg">Interactive Map</h1>
        <p className="text-teal-200 drop-shadow-md">
          Real-time tracking and geo-fencing with OpenLayers
        </p>
      </div>

      {/* Map Controls */}
      <Card className="absolute top-8 right-8 w-80 shadow-2xl bg-black/95 border-teal-600 backdrop-blur-sm z-[1000]">
        <CardHeader>
          <CardTitle className="font-headline flex items-center gap-2 text-teal-100">
            <Layers className="text-teal-400" />
            Map Layers & Controls
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Place Search */}
          <div className="space-y-2 pb-4 border-b border-teal-800">
            <Label className="text-teal-200 font-medium">Search Places</Label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-teal-400" />
                <Input
                  placeholder="Enter place, address, or landmark..."
                  value={placeSearchQuery}
                  onChange={(e) => setPlaceSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearchPlace()}
                  className="pl-9 bg-black/50 border-teal-700 text-teal-100 placeholder:text-teal-500"
                  disabled={isSearchingPlace}
                />
              </div>
              <Button 
                onClick={handleSearchPlace}
                disabled={isSearchingPlace || !placeSearchQuery.trim()}
                className="bg-teal-600 hover:bg-teal-700 text-white"
              >
                {isSearchingPlace ? 'Searching...' : 'Go'}
              </Button>
            </div>
            {searchResult && (
              <div className="text-sm text-teal-300 bg-teal-900/30 p-2 rounded border border-teal-800">
                📍 Found: {searchResult.display_name.split(',').slice(0, 3).join(', ')}
              </div>
            )}
          </div>
          
          {/* Tourist Filter */}
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-teal-400" />
            <Input 
              placeholder="Search location or Tourist ID..." 
              className="pl-8 bg-teal-950/50 border-teal-600 text-teal-100 placeholder:text-teal-400" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label className="text-teal-200">Map Overlays</Label>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="tourists" 
                checked={showTourists}
                onCheckedChange={(checked) => setShowTourists(checked === true)}
              />
              <User className="h-4 w-4 text-teal-400" />
              <label htmlFor="tourists" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-teal-100">
                Tourist Locations {showTourists && <span className="text-green-400">✓</span>}
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="risks" 
                checked={showRiskZones}
                onCheckedChange={(checked) => setShowRiskZones(checked === true)}
              />
              <Siren className="h-4 w-4 text-red-400" />
              <label htmlFor="risks" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-teal-100">
                High-Risk Zones {showRiskZones && <span className="text-green-400">✓</span>}
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="cameras" 
                checked={showCCTV}
                onCheckedChange={(checked) => setShowCCTV(checked === true)}
              />
              <Video className="h-4 w-4 text-teal-300" />
              <label htmlFor="cameras" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-teal-100">
                CCTV Cameras {showCCTV && <span className="text-green-400">✓</span>}
              </label>
            </div>
          </div>
          <Button 
            className="w-full bg-teal-600 hover:bg-teal-500 text-white"
            onClick={handleApplyFilters}
          >
            Apply Filters
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
