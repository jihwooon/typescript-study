"use client";

import { CreateSiteAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useActionState } from "react";
import { useForm } from '@conform-to/react'
import { parseWithZod } from "@conform-to/zod";
import { siteSchema } from "@/app/utils/zodSchemas";
import { Label } from "@/components/ui/label";

export default function NewSiteRoute () {
    const [lastResult, action] = useActionState(CreateSiteAction, undefined);
   const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
        return parseWithZod(formData,{
            schema: siteSchema
        } )
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput"
   })

    return (
        <div className="flex flex-col flex-1 items-center justify-center">
            <Card className="max-w-[450px]">
                <CardHeader>
                  <CardTitle>Create Title</CardTitle>   
                  <CardDescription>
                    Create your here. Click the button below once your done...
                  </CardDescription>
                </CardHeader> 
                <form id={form.id} onSubmit={form.onSubmit} action={action}>
                <CardContent>
                    <div className="flex flex-col gap-y-6">
                        <div className="grid gap-2">
                            <Label>Site Name</Label>
                            <Input 
                            name={fields.name.name} 
                            key={fields.name.key} 
                            defaultValue={fields.name.initialValue} 
                            placeholder="Site Name" 
                            suppressHydrationWarning
                            />
                            <p className="text-red-500 text-sm">{fields.name.errors}</p>
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
                </form>
            </Card>                        
        </div>
    )
}