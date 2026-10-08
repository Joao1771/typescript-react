import React from "react";
import { useInterval } from "../hooks/use-interval";
import { Button } from "./button";
import { Timer } from "./timer";

interface Props {
    defaultPomodoroTime: number;
}
export function PomodoroTimer(props: Props): React.JSX.Element {
    const [mainTime, setMainTime] = React.useState(props.defaultPomodoroTime)
    useInterval(() => {
        setMainTime(mainTime - 1)
    }, 1000)

    return <div className="pomodoro">
        <h2>You are: Working</h2>
        <Timer mainTime={mainTime} />
        <Button text="teste" className="butao" OnClick={() => {}}></Button>
    </div>
}