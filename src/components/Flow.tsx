import React from "react";
import {Property} from "csstype";
import {Edge, Node, ReactFlow} from "@xyflow/react";

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


