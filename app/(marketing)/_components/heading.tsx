"use client";

import {useConvexAuth} from 'convex/react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Spinner } from '@/components/spinner';
import Link from 'next/link';
import {SignInButton} from '@clerk/clerk-react';

export const Heading = () => {
    const {isAuthenticated, isLoading} = useConvexAuth();


    return (
        <div className="max-w-3xl space-y-4">

            <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold">
               Your  Ideas, Documents & plans . One place .Unified .Welcome to <span className="underline">WorkSphere</span>
            </h1>

            <h3 className="text-base sm:text-xl md:text-2xl font-medium">WorkSphere is the connected workspace for organized work environments</h3>
            
            {isLoading && (
               <div className='w-full flex items-center justify-center'>
                <Spinner size='lg' />
               </div>
            )}

            {isAuthenticated && !isLoading && (
                <Button asChild >
                    <Link href='/documents'>
                  Enter WorkSphere <ArrowRight className="h-4 w-4 ml-2"/>
                  </Link>
                </Button>
            )}

            {!isAuthenticated && !isLoading && (
                <SignInButton mode='modal'>
                    <Button>
                    Get WorkSphere Free 
                        <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>

                </SignInButton>
            )}

        </div>
    )
}