"use client"; // client component, can run functions

import {useState} from "react"
import favicon from "./favicon.ico"
import Image from "next/image";

export default function Home() {
    const [clicks, setClicks] = useState(0)

    function button() {
        setClicks(clicks + 10)
    }
    function negativeButton(){
        setClicks(clicks - 10)
    }
    function getClicks() {
        if (clicks == 69) {
            return "nice"
        } else {
            return clicks
        }
    }
    function reset(){
        setClicks(0)
    }

    return <>
        <h1 className={"text-3xl text-primary"}>Hello World</h1>
        <h1 className={"text-4xl"}>{getClicks()}</h1>
        <button onClick={button} className={"btn btn-primary"}>+10</button>
        <button onClick={negativeButton} className={"btn btn-error"}>-10</button>
        <div className={"flex flex-col w-29"}>
            <button onClick={reset} className={"w-29"}><Image src={favicon} alt={"Wird"}></Image></button>
        </div>
    </>
}