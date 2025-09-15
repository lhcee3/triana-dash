'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateEFIR, GenerateEFIROutput } from '@/ai/flows/automate-e-fir-generation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  reportText: z.string().min(50, {
    message: 'Report text must be at least 50 characters.',
  }),
});

export default function EFIRForm() {
  const [firDetails, setFirDetails] = useState<GenerateEFIROutput['firDetails'] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      reportText: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setFirDetails(null);
    try {
      const result = await generateEFIR(values);
      setFirDetails(result.firDetails);
      toast({
        title: "E-FIR Generated",
        description: "The E-FIR details have been successfully extracted.",
      });
    } catch (error) {
      console.error('E-FIR generation failed:', error);
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: "Could not generate E-FIR from the provided text.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Incident Report</CardTitle>
          <CardDescription>
            Paste the initial report text from any source. The AI will extract the relevant information.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="reportText"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Report Text</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., 'My son, John Doe, 24 years old, went missing yesterday from our home at 123 Main St. He was last seen wearing a blue jacket. He has a scar on his left cheek. My contact is 555-1234...'"
                        className="min-h-[300px] resize-y"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Generate E-FIR
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Generated E-FIR Details</CardTitle>
          <CardDescription>
            Review the automatically generated First Information Report.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {isLoading && (
            <div className="flex h-[380px] items-center justify-center p-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}
          {firDetails && (
            <div className="space-y-3 text-sm">
                <div className="grid grid-cols-3 gap-2 items-center">
                    <span className="font-semibold text-muted-foreground">Missing Person:</span>
                    <span className="col-span-2">{firDetails.missingPersonName}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 items-center">
                    <span className="font-semibold text-muted-foreground">Age:</span>
                    <span className="col-span-2">{firDetails.age}</span>
                </div>
                 <div className="grid grid-cols-3 gap-2 items-center">
                    <span className="font-semibold text-muted-foreground">Gender:</span>
                    <span className="col-span-2">{firDetails.gender}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 items-center">
                    <span className="font-semibold text-muted-foreground">Last Seen Address:</span>
                    <span className="col-span-2">{firDetails.addressLastSeen}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 items-center">
                    <span className="font-semibold text-muted-foreground">Identifying Marks:</span>
                    <span className="col-span-2">{firDetails.identifyingMarks}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 items-center">
                    <span className="font-semibold text-muted-foreground">Contact Info:</span>
                    <span className="col-span-2">{firDetails.contactInformation}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    <span className="font-semibold text-muted-foreground">Additional Details:</span>
                    <p className="col-span-2 leading-relaxed">{firDetails.additionalDetails}</p>
                </div>
                 <Button className="w-full mt-4">File E-FIR</Button>
            </div>
          )}
          {!isLoading && !firDetails && (
            <div className="flex flex-col h-[380px] items-center justify-center text-center p-8 rounded-lg border border-dashed">
              <FileText className="h-10 w-10 text-muted-foreground mb-4" />
              <p className="text-muted-foreground">E-FIR details will appear here once generated.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
