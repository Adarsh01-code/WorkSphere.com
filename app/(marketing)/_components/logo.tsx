import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils"; 

const font = Poppins({
    subsets: ["latin"],
    weight: ["400","600"]
});

export const Logo = () => {
    return (
        <div className="hidden md:flex items-center gap-x-4">
            <Image
            src='/mainLogo-dark.svg'
            alt='Logo'
            width="35"
            height="35"
            className="dark:hidden"
            />

            <Image
            src='/mainLogo-white.svg'
            alt='Logo'
            width="35"
            height="35"
            className="hidden dark:block"
            />

            <p className={cn("font-semibold", font.className)}>
                WorkSphere
            </p>
        </div>
    )
}