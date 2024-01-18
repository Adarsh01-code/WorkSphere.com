"use client";

import {useMutation} from 'convex/react';
import Image from "next/image";
import {useUser} from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import {api} from '@/convex/_generated/api';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const DocumentPage = () => {
    const {user} = useUser();
    const create = useMutation(api.documents.create);

    const router = useRouter();

    const onCreate =()=>{
        const promise=create({title:"Untitled"})
        .then((documentId)=> router.push(`/documents/${documentId}`))

        toast.promise(promise, {
            loading: 'Creating your worksphere...',
            success: 'New sphere created successfully!!',
            error: 'Failed to create your sphere :('
        })
    }


    return (
        <div className="h-[100vh] flex flex-col items-center justify-center space-y-4">
            <Image 
            src='/empty.png'
            height='300'
            width='300'
            alt="Empty"
            className="dark:hidden"
            />

            <Image 
            src='/empty-dark.png'
            height='300'
            width='300'
            alt="Empty"
            className="dark:block hidden"
            />

            <h2 className="text-lg font-semibold">Welcome to {user?.firstName}&apos;s Work:Sphere </h2>

            <Button onClick={onCreate}>
                <PlusCircle 
                className="h-4 w-4 mr-2"
                />
                Create your sphere!
            </Button>
        </div>
    );
}

export default DocumentPage;