import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, Clock, MapPin, Search, Shield, User, XCircle } from "lucide-react";
import Image from "next/image";

export default function DigitalIdPage() {
    return (
        <div className="flex-1 space-y-8 p-4 md:p-8">
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h1 className="text-3xl font-headline font-bold tracking-tight">Digital Tourist ID</h1>
                    <p className="text-muted-foreground">
                        Securely access and verify tourist information.
                    </p>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Search Tourist</CardTitle>
                    <CardDescription>Enter a Tourist ID, Passport Number, or Aadhaar Number to retrieve their digital ID.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex w-full max-w-md items-center space-x-2">
                        <Input type="text" placeholder="e.g., T-84392" className="h-10" />
                        <Button type="submit" className="h-10">
                            <Search className="mr-2 h-4 w-4" /> Search
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <div className="grid gap-8 md:grid-cols-3">
                <div className="md:col-span-1">
                    <Card className="overflow-hidden">
                        <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-6 flex flex-col items-center text-center">
                             <div className="relative">
                                <Avatar className="h-24 w-24 border-4 border-background shadow-lg">
                                    <AvatarImage src="https://picsum.photos/seed/tourist1/100/100" data-ai-hint="person portrait" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <Badge variant="default" className="absolute -bottom-1 -right-2 border-2 border-background">
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                    Verified
                                </Badge>
                             </div>
                            <h2 className="text-2xl font-bold font-headline mt-4">Jane Doe</h2>
                            <p className="text-sm text-muted-foreground">Tourist ID: T-84392</p>
                        </div>
                        <CardContent className="p-6 space-y-4">
                            <div>
                                <h3 className="text-sm font-medium text-muted-foreground mb-2">Tourist Safety Score</h3>
                                <div className="flex items-center gap-3">
                                    <Progress value={85} className="h-2" />
                                    <span className="font-bold text-primary text-lg">85</span>
                                </div>
                                <p className="text-xs text-muted-foreground mt-1">Based on travel patterns and area sensitivity.</p>
                            </div>
                            <Separator />
                             <div className="space-y-3 text-sm">
                                <div className="flex items-start">
                                    <User className="h-4 w-4 mr-3 mt-0.5 text-muted-foreground" />
                                    <span>Passport: <span className="font-medium">L345XXX</span></span>
                                </div>
                                 <div className="flex items-start">
                                    <Shield className="h-4 w-4 mr-3 mt-0.5 text-muted-foreground" />
                                    <span>Visit Valid Until: <span className="font-medium">2024-08-15</span></span>
                                </div>
                                <div className="flex items-start">
                                    <MapPin className="h-4 w-4 mr-3 mt-0.5 text-muted-foreground" />
                                    <span>Emergency Contact: <span className="font-medium">+91 9876543210</span></span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="md:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline">Trip Itinerary & Status</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Location</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>2024-07-20</TableCell>
                                        <TableCell>Arrival at Airport</TableCell>
                                        <TableCell>
                                            <Badge variant="default"><CheckCircle className="h-3 w-3 mr-1.5" />Completed</Badge>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>2024-07-21</TableCell>
                                        <TableCell>Check-in at Grand Hotel</TableCell>
                                         <TableCell>
                                            <Badge variant="default"><CheckCircle className="h-3 w-3 mr-1.5" />Completed</Badge>
                                        </TableCell>
                                    </TableRow>
                                     <TableRow className="bg-primary/10">
                                        <TableCell>2024-07-22</TableCell>
                                        <TableCell>City Tour (Old Town)</TableCell>
                                         <TableCell>
                                            <Badge variant="secondary"><Clock className="h-3 w-3 mr-1.5" />In Progress</Badge>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>2024-07-23</TableCell>
                                        <TableCell>Mountain Trail Hike</TableCell>
                                         <TableCell>
                                            <Badge variant="outline">Upcoming</Badge>
                                        </TableCell>
                                    </TableRow>
                                     <TableRow>
                                        <TableCell>2024-07-24</TableCell>
                                        <TableCell>Departure from Airport</TableCell>
                                         <TableCell>
                                            <Badge variant="outline">Upcoming</Badge>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                     <Card className="mt-8">
                        <CardHeader>
                            <CardTitle className="font-headline">Recent Activity & Alerts</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="flex-shrink-0 bg-destructive/10 text-destructive p-2 rounded-full">
                                        <XCircle className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Geo-Fence Exit Alert</p>
                                        <p className="text-sm text-muted-foreground">Exited 'City Center' zone at 2024-07-21 14:30:15</p>
                                    </div>
                                    <Badge variant="destructive" className="ml-auto">Investigating</Badge>
                                </div>
                                 <div className="flex items-center gap-4">
                                    <div className="flex-shrink-0 bg-green-500/10 text-green-500 p-2 rounded-full">
                                        <CheckCircle className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium">Geo-Fence Entry</p>
                                        <p className="text-sm text-muted-foreground">Entered 'High-Risk Zone A' at 2024-07-21 13:10:00</p>
                                    </div>
                                    <Badge variant="default" className="ml-auto bg-green-500/80">Resolved</Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
