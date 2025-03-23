import React from "react";
import {Property} from "csstype";
import {Edge, Node, ReactFlow} from "@xyflow/react";

import Flowchart_Annotation from "../img/programming/Flowchart_Annotation.svg"
import Flowchart_Decision from "../img/programming/Flowchart_Decision.svg"
import Flowchart_IO from "../img/programming/Flowchart_IO.svg"
import Flowchart_Line from "../img/programming/Flowchart_Line.svg"
import Flowchart_Process from "../img/programming/Flowchart_Process.svg"
import Flowchart_Terminal from "../img/programming/Flowchart_Terminal.svg"

import '@xyflow/react/dist/style.css';

interface FlowProps {
    width: Property.Width,
    height: Property.Height,
    edges?: Edge[],
    nodes?: Node[],
}

export const Flow: React.FC<FlowProps> = (props: FlowProps) => {
    return (
        <div style={{width: props.width, height: props.height}}>
            <ReactFlow edges={props.edges} nodes={props.nodes} />
        </div>
    )
}

interface SampleFlowProps {
    type: 'Annotation' | 'Decision' | 'IO' | 'Line' | 'Process' | 'Terminal'
}

export const SampleFlow: React.FC<SampleFlowProps> = (props: SampleFlowProps) => {
    let Flowchart;
    switch(props.type) {
        case "Annotation":
            Flowchart = Flowchart_Annotation
            break;
        case "Decision":
            Flowchart = Flowchart_Decision
            break;
        case "IO":
            Flowchart = Flowchart_IO
            break;
        case "Line":
            Flowchart = Flowchart_Line
            break;
        case "Process":
            Flowchart = Flowchart_Process
            break;
        case "Terminal":
            Flowchart = Flowchart_Terminal
            break;
    }
    return (
        <Flowchart />
    )
}
