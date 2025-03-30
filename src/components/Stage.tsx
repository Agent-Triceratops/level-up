import {ReactNode} from "react";

export default function Stage({children}: {children: ReactNode}) {
    return <>
        <div className={"min-w-full min-h-screen flex flex-col items-center justify-center"}>
            <div className={"flex flex-col items-center justify-center card bg-base-100 p-5"}>
                {children}
            </div>
        </div>
    </>
}