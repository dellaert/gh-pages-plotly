// @flow
import React from 'react';
import tips from '../tips';
// import PlotlyRenderers from 'react-plotly';
// import TableRenderers from 'react-plotly';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import sortAs from 'react-pivottable/Utilities';
import 'react-pivottable/pivottable.css';
// const Plot = PlotlyRenderers.createPlotlyComponent(window.Plotly);

// Currently using hack from https://github.com/plotly/react-plotly.js/blob/master/README.md#loading-from-a-script-tag
// as I can't make react-plotly play nice with yarn/webpack
const Plot = createPlotlyComponent(Plotly);

type Props = {};

type State = {
    pivotState: any,
};

class PivotTableUISmartWrapper extends React.PureComponent<Props, State> {
    constructor(props) {
        super(props);
        this.state = { pivotState: props };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ pivotState: nextProps });
    }

    render() {
        return (
            <PivotTableUI
                renderers={Object.assign(
                    {},
                    TableRenderers,
                    PlotlyRenderers.createPlotlyRenderers(Plot)
                )}
                {...this.state.pivotState}
                onChange={s => this.setState({ pivotState: s })}
                unusedOrientationCutoff={Infinity}
            />
        );
    }
}

type Props2 = {};

type State2 = {
    mode: string,
    filename: string,
    pivotState: any,
    textarea: string
};

type DroppedFile = { name: string };

export default class PivotTable extends React.Component<Props2, State2> {
    componentWillMount() {
        this.setState({
            mode: 'demo',
            filename: 'Sample Dataset: Tips',
            pivotState: {
                data: tips,
                rows: ['Payer Gender'],
                cols: ['Party Size'],
                aggregatorName: 'Sum over Sum',
                vals: ['Tip', 'Total Bill'],
                rendererName: 'Grouped Column Chart',
                sorters: {
                    Meal: sortAs(['Lunch', 'Dinner']),
                    'Day of Week': sortAs([
                        'Thursday',
                        'Friday',
                        'Saturday',
                        'Sunday',
                    ]),
                },
                plotlyOptions: { width: 900, height: 500 },
                plotlyConfig: {},
                tableOptions: {
                    clickCallback: function (e, value, filters, pivotData) {
                        var names = [];
                        pivotData.forEachMatchingRecord(filters, function (
                            record
                        ) {
                            names.push(record.Meal);
                        });
                        alert(names.join('\n'));
                    },
                },
            },
        });
    }

    render() {
        return (
            <div className="row">
                <h2 className="text-center">{this.state.filename}</h2>
                <br />

                <PivotTableUISmartWrapper {...this.state.pivotState} />
            </div>
        );
    }
}
