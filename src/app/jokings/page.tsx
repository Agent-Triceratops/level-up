"use client";

// https://official-joke-api.appspot.com/random_joke

import {useEffect, useState} from "react";
import {JokeType} from "@/app/jokings/JokeType";

export default function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [joke, setJoke] = useState<JokeType>({ setup: "Loading!", punchline: "Loading!" })
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showPunchline, setShowPunchline] = useState(false)

    async function fetchJoke() {
        setJoke({ setup: "Loading!", punchline: "Loading!" })

        const data = await fetch("https://official-joke-api.appspot.com/random_joke")

        const jokeData = (await data.json()) as JokeType

        setJoke(jokeData)
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetchJoke()
    }, [])

    function onWhyPress() {
        setShowPunchline(!showPunchline)
    }

    function resetJoke() {
        setShowPunchline(false)
        fetchJoke()
    }

    function getPunchline() {
        if (showPunchline) {
            return <>
                <p>{joke["punchline"]}</p>
                <button onClick={resetJoke} className={"btn btn-secondary"}>New Joke</button>
            </>
        }

        return <></>
    }

    return <>
        <p>{joke["setup"]}</p>
        {getPunchline()}
        <button onClick={onWhyPress} className={"btn btn-primary"}>Why?</button>
    </>
}