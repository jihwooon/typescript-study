import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-dropdown-menu";

export default function NewSiteRoute () {
    return (
        <div className="flex flex-col flex-1 items-center justify-center">
            <Card className="max-w-[450px]">
                <CardHeader>
                  <CardTitle>Create Title</CardTitle>   
                  <CardDescription>
                    Create your here. Click the button below once your done...
                  </CardDescription>
                </CardHeader> 
                <CardContent>
                    <div className="flex flex-col gap-y-6">
                        <div className="grid gap-2">
                            <Label>Site Name</Label>
                            <Input placeholder="Site Name" suppressHydrationWarning/>
                        </div> 
                        <div className="gap-2">
                            <Label>Subdirectory</Label>
                            <Input placeholder="Subdirectory" suppressHydrationWarning/>
                        </div>
                        <div className="grid gap-2">
                            <Label>Description</Label>
                            <Textarea placeholder="Small Description for your site" suppressHydrationWarning/>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button suppressHydrationWarning>Submit</Button>
                </CardFooter>
            </Card>                        
        </div>
    )
}