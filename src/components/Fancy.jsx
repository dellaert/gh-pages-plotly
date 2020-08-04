// @flow
import React from 'react';
// Currently using hack from https://github.com/plotly/react-plotly.js/blob/master/README.md#loading-from-a-script-tag
// as I can't make react-plotly play nice with yarn/webpack
const Plot = createPlotlyComponent(Plotly);

type Props = {};

class Fancy extends React.Component<Props> {
    render() {
        return (
            <Plot
                data={[
                    {
                        x: [1, 2, 3],
                        y: [2, 6, 3],
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: { color: 'red' },
                    },
                    { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
                ]}
                layout={{ width: 640, height: 480, title: 'A Fancy Plot' }}
            />
        );
    }
}
export default Fancy;
