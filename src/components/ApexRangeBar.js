import React from "react";
import ReactApexChart from "react-apexcharts";

const ApexRangeBar = () => {

var options = {
  series: [
    {
      data: [
        {
          x: '2008',
          y: [2800, 4500],
        },
        {
          x: '2008',
          y: [5000, 6000],
        },
        {
          x: '2008',
          y: [6500, 8000],
        },
        {
          x: '2009',
          y: [3200, 4100],
        },
        {
          x: '2010',
          y: [2950, 7800],
        },
        {
          x: '2011',
          y: [3000, 4600],
        },
        {
          x: '2012',
          y: [3500, 4100],
        },
        {
          x: '2013',
          y: [4500, 6500],
        },
        {
          x: '2014',
          y: [4100, 5600],
        },
        {
          x: '2015',
          y: [4100, 5600],
        },
        {
            x: '2016',
            y: [4100, 5600],
          },
      ],
    },
  ],
  chart: {
    height: 350,
    type: 'rangeBar',
    zoom: {
      enabled: false,
    },
  },
  plotOptions: {
    bar: {
      isDumbbell: true,
      columnWidth: 3,
      dumbbellColors: [['#008FFB', '#00E396']],
    },
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    position: 'top',
    horizontalAlign: 'left',
    customLegendItems: ['Product A', 'Product B'],
  },
  fill: {
    type: 'gradient',
    gradient: {
      type: 'vertical',
      gradientToColors: ['#00E396'],
      inverseColors: true,
      stops: [0, 100],
    },
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  xaxis: {
    // tickPlacement: 'on',
    type: 'datetime',
    categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015 , 2016],
    // overwriteCategories: ['2008', '2009'],
  },
  
};
console.log({options})

  return (
      <div style={{height:'500px', width:'600px'}}>
        <ReactApexChart options={options} series={options.series} type="rangeBar" />
      </div>
  )
}

export default ApexRangeBar