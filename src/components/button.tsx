import React from "react";

interface Props {
    text: string;
    OnClick: () => void
    className: string
}

export function Button(props: Props): React.JSX.Element {
    return(
        <button onClick={props.OnClick} className={props.className}>{props.text}</button>
    )

}