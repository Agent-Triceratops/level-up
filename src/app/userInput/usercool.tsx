"use client";
import {useLocalStorage} from "usehooks-ts";
import {ChangeEvent} from "react";

export default function UserCool() {
    const [userName, setUserName] = useLocalStorage<string>("user-name", "")

    function onInputChange(e: ChangeEvent<HTMLInputElement>) {
        setUserName(e.target.value);
    }

    return <>
        <input onChange={onInputChange} value={userName} type={"text"} className={"input input-primary"} placeholder={"Username"}></input>
    </>
}