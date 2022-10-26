import React  from 'react';

import ChartBar from './ChartBat'

import  './Chart.css';

const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map(dataPoints => dataPoints.value);
    const totalMaxium = Math.max(...dataPointsValues);

    return (
    <div className='chart'>
        {props.dataPoints.map(dataPoints => (
            <ChartBar 
                key= {dataPoints.label}
                value={dataPoints.value} 
                maxValue={totalMaxium} 
                label={dataPoints.label} 
            />
        ))}
    </div>
    );
};

export default Chart;


