import MDXComponents from '@theme-original/MDXComponents';
import {RocCurve, SampleRocCurve} from "@site/src/components/RocCurve";
import {CategoryScale, Chart, LinearScale, LineController, LineElement, PointElement} from "chart.js";
import {Contributors} from "@site/src/components/Contributors";
import {Flow, SampleFlow} from "@site/src/components/Flow";

Chart.register(CategoryScale, LinearScale, LineController, LineElement, PointElement);

export default {
    ...MDXComponents,
    RocCurve,

    SampleRocCurve,

    Contributors,

    Flow,
    SampleFlow,
}