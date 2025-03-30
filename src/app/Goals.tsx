"use client";

import {allChallenges, Challenge, ChallengeList} from "@/lib/challenge";
import {useLocalStorage} from "usehooks-ts";
import {useEffect} from "react";
import random from "random"

export default function Goals() {
    const [challenges, setChallenges] = useLocalStorage<ChallengeList>("challenges", []);

    useEffect(() => {
        let arr = [...challenges];
        if (!arr) {
            arr = []
        }

        const len = arr.length
        if (len < 4) {
            for (let i = len; i < 4 - len; i++) {
                const challenge = mkChallenge()
                arr.push(challenge)
            }
        }

        setChallenges(arr);
    }, [])

    function mkChallenge() {
        return random.choice(random.shuffle(allChallenges)) as Challenge;
    }

    function onChangeWorkoutValue(index: number) {
        const newChallenges = [...challenges];

        let value = newChallenges[index].done

        value++

        if (value > newChallenges[index].required) {
            value = newChallenges[index].required;
        }

        newChallenges[index].done = value;

        setChallenges(newChallenges);
    }

    function checkboxOnClick(checked: boolean, i: number) {
        if (!checked) {
            onChangeWorkoutValue(i)
            return
        }

        const newChallenges = [...challenges];

        newChallenges[i] = mkChallenge()
        setChallenges(newChallenges);
    }

    const Mappe = () => {
        if (!challenges || challenges.length === 0) return null;

        return challenges.map((x, i) => {
            const system: string = x.system || "";
            const description: string = x.description || ""
            const name: string = x.name || x.id;
            
            return (
                <li className={"flex flex-row gap-10 list-row"} key={i}>
                    <h1 className={"font-bold grow"}>
                        <div className="tooltip" data-tip={description}>
                            {name}
                        </div>
                    </h1>
                    <p onClick={() => { onChangeWorkoutValue(i) }} className={"select-none"}>
                        [{x.done} / {x.required}{system}]
                    </p>
                    <input
                        type={"checkbox"}
                        checked={x.done === x.required}
                        readOnly={true}
                        className={"checkbox checkbox-neutral rounded-field cursor-default shrink"}
                        onClick={() => {
                            checkboxOnClick(x.done === x.required, i)
                        }}
                    />
                </li>
            );
        });
    };

    return <>
        <h1 className={"text-4xl font-bold underline"}>GOAL</h1>
        <ul className={"flex flex-col list"}>
            <Mappe/>
        </ul>
    </>
}