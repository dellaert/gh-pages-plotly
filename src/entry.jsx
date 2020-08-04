import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import Fancy from './components/Fancy'
import PivotTable from './components/PivotTable'

ReactDOM.render(<Fancy />, document.getElementById('fancy'));
ReactDOM.render(<PivotTable />, document.getElementById('pivot'));
