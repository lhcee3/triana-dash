import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, Clock, MapPin, Search, Shield, User, XCircle } from "lucide-react";

export default function DigitalIdPage() {
    return (
        <div className="flex-1 space-y-8 p-4 md:p-8 bg-black text-teal-100 min-h-screen">
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h1 className="text-3xl font-headline font-bold tracking-tight text-teal-100">Digital Tourist ID</h1>
                    <p className="text-teal-400">
                        Securely access and verify tourist information.
                    </p>
                </div>
            </div>

            <Card className="bg-black/90 border-teal-600 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="font-headline text-teal-100">Search Tourist</CardTitle>
                    <CardDescription className="text-teal-400">Enter a Tourist ID, Passport Number, or Aadhaar Number to retrieve their digital ID.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex w-full max-w-md items-center space-x-2">
                        <Input type="text" placeholder="e.g., T-84392" className="h-10 bg-teal-950/50 border-teal-600 text-teal-100" />
                        <Button type="submit" className="h-10 bg-teal-600 hover:bg-teal-500 text-white">
                            <Search className="mr-2 h-4 w-4" /> Search
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <div className="grid gap-8 md:grid-cols-3">
                <div className="md:col-span-1">
                    <Card className="overflow-hidden bg-black/90 border-teal-600 backdrop-blur-sm">
                        <div className="bg-gradient-to-br from-teal-900/40 to-teal-950/20 p-6 flex flex-col items-center text-center">
                             <div className="relative">
                                <Avatar className="h-24 w-24 border-4 border-teal-500 shadow-lg">
                                    <div className="w-full h-full bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                                        JD
                                    </div>
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <Badge variant="default" className="absolute -bottom-1 -right-2 border-2 border-teal-500 bg-green-600 text-white">
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                    Verified
                                </Badge>
                             </div>
                            <h2 className="text-2xl font-bold font-headline mt-4 text-teal-100">Jane Doe</h2>
                            <p className="text-sm text-teal-400">Tourist ID: T-84392</p>
                        </div>
                        <CardContent className="p-6 space-y-4">
                            <div>
                                <h3 className="text-sm font-medium text-teal-300 mb-2">Tourist Safety Score</h3>
                                <div className="flex items-center gap-3">
                                    <Progress value={85} className="h-2" />
                                    <span className="font-bold text-teal-400 text-lg">85</span>
                                </div>
                                <p className="text-xs text-teal-500 mt-1">Based on travel patterns and area sensitivity.</p>
                            </div>
                            <Separator className="bg-teal-700" />
                             <div className="space-y-3 text-sm">
                                <div className="flex items-start">
                                    <User className="h-4 w-4 mr-3 mt-0.5 text-teal-400" />
                                    <span className="text-teal-200">Passport: <span className="font-medium text-teal-100">L345XXX</span></span>
                                </div>
                                 <div className="flex items-start">
                                    <Shield className="h-4 w-4 mr-3 mt-0.5 text-teal-400" />
                                    <span className="text-teal-200">Visit Valid Until: <span className="font-medium text-teal-100">2024-08-15</span></span>
                                </div>
                                <div className="flex items-start">
                                    <MapPin className="h-4 w-4 mr-3 mt-0.5 text-teal-400" />
                                    <span className="text-teal-200">Emergency Contact: <span className="font-medium text-teal-100">+91 9876543210</span></span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="md:col-span-2">
                    <Card className="bg-black/90 border-teal-600 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle className="font-headline text-teal-100">Trip Itinerary & Status</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow className="border-teal-700">
                                        <TableHead className="text-teal-300">Date</TableHead>
                                        <TableHead className="text-teal-300">Location</TableHead>
                                        <TableHead className="text-teal-300">Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow className="border-teal-800 hover:bg-teal-950/30">
                                        <TableCell className="text-teal-200">2024-07-20</TableCell>
                                        <TableCell className="text-teal-200">Arrival at Airport</TableCell>
                                        <TableCell>
                                            <Badge variant="default" className="bg-green-600 text-white"><CheckCircle className="h-3 w-3 mr-1.5" />Completed</Badge>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className="border-teal-800 hover:bg-teal-950/30">
                                        <TableCell className="text-teal-200">2024-07-21</TableCell>
                                        <TableCell className="text-teal-200">Check-in at Grand Hotel</TableCell>
                                         <TableCell>
                                            <Badge variant="default" className="bg-green-600 text-white"><CheckCircle className="h-3 w-3 mr-1.5" />Completed</Badge>
                                        </TableCell>
                                    </TableRow>
                                     <TableRow className="bg-teal-950/40 border-teal-700">
                                        <TableCell className="text-teal-100">2024-07-22</TableCell>
                                        <TableCell className="text-teal-100">City Tour (Old Town)</TableCell>
                                         <TableCell>
                                            <Badge variant="secondary" className="bg-yellow-600 text-white"><Clock className="h-3 w-3 mr-1.5" />In Progress</Badge>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className="border-teal-800 hover:bg-teal-950/30">
                                        <TableCell className="text-teal-200">2024-07-23</TableCell>
                                        <TableCell className="text-teal-200">Mountain Trail Hike</TableCell>
                                         <TableCell>
                                            <Badge variant="outline" className="border-teal-600 text-teal-400">Upcoming</Badge>
                                        </TableCell>
                                    </TableRow>
                                     <TableRow className="border-teal-800 hover:bg-teal-950/30">
                                        <TableCell className="text-teal-200">2024-07-24</TableCell>
                                        <TableCell className="text-teal-200">Departure from Airport</TableCell>
                                         <TableCell>
                                            <Badge variant="outline" className="border-teal-600 text-teal-400">Upcoming</Badge>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                     <Card className="mt-8 bg-black/90 border-teal-600 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle className="font-headline text-teal-100">Recent Activity & Alerts</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="flex-shrink-0 bg-red-500/20 text-red-400 p-2 rounded-full border border-red-500/30">
                                        <XCircle className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-teal-100">Geo-Fence Exit Alert</p>
                                        <p className="text-sm text-teal-400">Exited 'City Center' zone at 2024-07-21 14:30:15</p>
                                    </div>
                                    <Badge variant="destructive" className="ml-auto bg-red-600 text-white">Investigating</Badge>
                                </div>
                                 <div className="flex items-center gap-4">
                                    <div className="flex-shrink-0 bg-green-500/20 text-green-400 p-2 rounded-full border border-green-500/30">
                                        <CheckCircle className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-teal-100">Geo-Fence Entry</p>
                                        <p className="text-sm text-teal-400">Entered 'High-Risk Zone A' at 2024-07-21 13:10:00</p>
                                    </div>
                                    <Badge variant="default" className="ml-auto bg-green-600 text-white">Resolved</Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}