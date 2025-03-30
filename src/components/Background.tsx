import Image from "next/image";
import {StaticImport} from "next/dist/shared/lib/get-img-props";

export default function Background({href}: {href: string | StaticImport}) {
    return <Image src={href} alt="Background Image" className="fixed inset-0 -z-10 w-screen h-screen object-cover"></Image>
}
