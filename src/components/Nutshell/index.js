import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { BottomNavigation, BottomNavigationAction, colors } from '@material-ui/core'
import { io } from "socket.io-client";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

const socket = io('http://localhost:3100/');

const Nutshell = () => {
  const [seriesData, setSeriesData] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    });
  
    socket.on('testMessage', function(data, labelsValue){
      console.log('data1: ', data);
      console.log('labelsValue: ', labelsValue)
      setSeriesData(data || [])
      setLabels(labelsValue || [])
    })

      return () => {
        socket.off("connect", () => {
          console.log(socket.id); // x8WIv7-mJelg7on_ALbx
        });
        
        socket.off('testMessage', function(data, labelsValue){
          console.log('data1: ', data);
          console.log('labelsValue: ', labelsValue)
          setSeriesData(data || [])
          setLabels(labelsValue || [])
        })
          
      }
  }, [])

var RadialBarOptions = {
  series: [75, 40, 30],
  chart: {
    height: 350,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      // removing background of stroke
      track: {
        background: 'transparent',
        strokeWidth: '90%',
        opacity: 1,
        margin: 8, 
      },
      hollow: {
        size: '50%',
        margin: 1,
      },
      dataLabels: {
        name: {
          fontSize: '22px',
        },
        value: {
          fontSize: '16px',
        },
        total: {
          show: true,
          label: '100 Severity',
          color: '#fff',
          formatter: function (w) {
            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
            return ''
          }
        }
      }
    },
  },
  labels: ['LOW-55', 'MEDIUM-30', 'HIGH-15'],
  colors: ['#F0B05D', '#68C2DF', '#EC726E'],
  stroke: {
    show: true,
    lineCap: 'round',
  },
};

const StackedBarOptions = {
  series: [{
    name: 'HIGH',
    data: [44, 55, 41, 37, 22, 43, 21, 20, 20, 20],
    color: '#EC726E'
  }, {
    name: 'MEDIUM',
    data: [44, 55, 41, 37, 22, 43, 21, 20, 20, 20],
    color: '#68C2DF'
  }, {
    name: 'LOW',
    data: [44, 55, 41, 37, 22, 43, 21, 20, 20, 20],
    color: '#F0B05D'
  }],
  chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '50%',
      // dataLabels: {
      //   total: {
      //     enabled: true,
      //     offsetX: 0,
      //     style: {
      //       color: '#fff',
      //       display: 'none',
      //       fontSize: '13px',
      //       fontWeight: 900
      //     }
      //   }
      // }
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 0.5,
    colors: ['#fff']
  },
  // title: {
  //   text: 'Fiction Books Sales'
  // },
  xaxis: {
    title: {
      text: 'No of Vulnerability',
      style: {
        color: '#fff',
      },
    },
    categories: ['192.168.100.01', '192.168.100.01', '192.168.100.01', '192.168.100.01', '192.168.100.01', '192.168.100.01', '192.168.100.01'],
    labels: {
      formatter: function (val) {
        return val + "K"
      },
      style: {
        colors: ['#fff']
      }
    },
    
  },
  yaxis: {
    title: {
      text: undefined
    },
    labels: {
      formatter: function (val) {
        return val
      },
      style: {
        colors: ['#fff']
      }
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "K"
      }
    }
  },
  fill: {
    opacity: 1,
    type: 'solid'
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetX: -20,
    offsetY: 0,
    markers: {
      radius: 15,
    },
    labels: {
      colors: ['#fff']
    }
  },
  grid: {
    show: true,
    position: 'back',
    borderColor: '#9e9e9e',
    xaxis: {
      lines: {
        show: true
      }
    }
  }
}

const PolarAreaChart = {
  series: [23, 25, 22, 25, 21, 17, 15, 25, 13, 25],
  colors: ['#DB5DF0', '#5D86F0', '#5DF06C', '#EC726E', '#F0B05D', '#9FCFBF', '#195887', '#8C5DF0', '#5DF0CD', '#F0E15D'],
  chart: {
    type: 'polarArea',
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  fill: {
    opacity: 1
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom',
        color: '#fff'
      }
    }
  }],
  labels: ['HTTP Security Headers Detection', 'HTTP Server Banner Enumeration', 'HTTP Server type and version', 'Services', 'SSL/TLS: Gertfcate Too Long Vaid ....', '', 'SSUTLS: Certfcate Signed Using ....',
  'SSUTLS: Gertfcato - Subject  ....', 'Sophos Cyberoam UMT/NGFW .....', 'CGI Scanning Consolidation'],
  legend: {
    position: 'bottom',
    labels: {
      colors: ['#fff']
    }
  },
}

const PatternedStackedBarOptions = {
  series: [{
    name: 'HIGH',
    data: [44, 55, 41, 37, 22, 43, 21, 20, 20, 20],
    color: '#EC726E'
  }, {
    name: 'MEDIUM',
    data: [44, 55, 41, 37, 22, 43, 21, 20, 20, 20],
    color: '#68C2DF'
  }, {
    name: 'LOW',
    data: [44, 55, 41, 37, 22, 43, 21, 20, 20, 20],
    color: '#F0B05D'
  }],
  chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    dropShadow: {
      enabled: true,
      blur: 0,
      opacity: 0.5
    },
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '50%',
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  // title: {
  //   text: 'Fiction Books Sales'
  // },
  xaxis: {
    // title: {
    //   text: 'No of Vulnerability',
    //   style: {
    //     color: '#fff',
    //   },
    // },
    categories: ['192.168.100.01', '192.168.100.01', '192.168.100.01', '192.168.100.01', '192.168.100.01', '192.168.100.01', '192.168.100.01'],
    labels: {
      formatter: function (val) {
        return val + "K"
      },
      style: {
        colors: ['#fff']
      }
    },
  },
  yaxis: {
    title: {
      text: undefined
    },
    labels: {
      formatter: function (val) {
        return val
      },
      style: {
        colors: ['#fff']
      }
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "K"
      }
    }
  },
  fill: {
    type: 'pattern',
    opacity: 1,
    pattern: {
      style: ['verticalLines', 'slantedLines', 'squares'],
      width: 6,
      strokeWidth: 2
    }
  },
  states: {
    hover: {
      filter: 'none'
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetX: -10,
    offsetY: 0,
    markers: {
      radius: 15
    },
    labels: {
      colors: ['#fff']
    }
  },
  grid: {
    show: true,
    position: 'back',
    borderColor: '#9e9e9e',
    xaxis: {
      lines: {
        show: true
      }
    }
  }
}

const PieChart = {
  series: [23, 25, 22, 25, 21, 17, 15, 25, 13, 25],
  colors: ['#DB5DF0', '#5D86F0', '#5DF06C', '#EC726E', '#F0B05D', '#9FCFBF', '#195887', '#8C5DF0', '#5DF0CD', '#F0E15D'],
  chart: {
    width: 200,
    type: 'pie',
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  fill: {
    opacity: 1
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }],
  labels: ['22/tcp (ANA: ssn)', 'BO/icp (ANA: www-hitp)', '8443/1 (ANA: posync-hitps)', '43/1 (ANA: hitps)', 'oenerallCPE-T', 'oenerallCPE-T', 'oenerallCPE-T',
  '3128/1cp (ANA: ndl-aas)', '23tcp (ANA: tenet)', 'generalicp'],
  legend: {
    position: 'bottom',
    labels: {
      colors: ['#fff']
    }
  },
  dataLabels: {
    enabled: true,
    textAnchor: 'middle',
  }
}

const LineWithDataLabel = {
  series: [
    {
      name: "HIGH",
      data: [0, 12, 3, 29, 6, 13, 10, 8, 14, 26]
    },
    {
      name: "MEDIUM",
      data: [0, 10, 16, 13, 12, 32, 15, 18, 25, 36]
    },
    {
      name: "LOW",
      data: [0, 16, 23, 21, 16, 24, 28, 25, 35, 40]
    }
  ],
  markers: {
    size: [7, 7, 7],
    // colors: ['#EC726E', '#68C2DF', '#F0B05D'],
    shape: "circle",
    strokeColors: ['#EC726E', '#68C2DF', '#F0B05D'],
    showNullDataPoints: true,
    hover: {
      size: 8,
      sizeOffset: 7
    }
  },
  chart: {
    height: 350,
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 8,
      left: 5,
      blur: 5,
      opacity: 0.5
    },
    toolbar: {
      show: false
    }
  },
  colors: ['#EC726E', '#68C2DF', '#F0B05D'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 5,
    curve: 'smooth',
  },
  title: {
    text: 'Port Wise Vulnerability',
    style: {
      color: '#fff'
    },
    align: 'left'
  },
  grid: {
    show: true,
    position: 'back',
    borderColor: '#9e9e9e',
    xaxis: {
      lines: {
          show: true
      }
    },   
    yaxis: {
      lines: {
          show: true
      }
    },  
    row: {
      colors: ['none', 'none', 'none'], // takes an array which will be repeated on columns
      opacity: 1
    },
  },
  xaxis: {
    categories: ['29/05/2023', '28/05/2023', '27/05/2023', '26/05/2023', '25/05/2023', '24/05/2023', '23/05/2023', '22/05/2023', '21/05/2023', '20/05/2023'],
    labels: {
      style: {
        colors: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff']
      }
    },
  },
  yaxis: {
    min: 0,
    max: 48,
    labels: {
      style: {
        colors: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff']
      }
    },
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5,
    markers: {
      radius: 15,
    },
    labels: {
      colors: ['#fff']
    }
  },
  fill: {
    opacity: 1
  },
}

const RealTimeChart = {
  series: [
    {
      name: "Chart-1",
      type: "line",
      data: [0, 15, 25, 20, 32, 27]
    },
    {
      name: "Chart-2",
      type: "line",
      data: [0, 32, 20, 40, 20, 30]
    },
    {
      name: "Chart-3",
      type: "line",
      data: [0, 38, 50, 10, 28, 43]
    }
  ],
  chart: {
    height: 350,
    type: "line",
    stacked: false,
    animations: {
      enabled: true,
      easing: "linear",
      speed: 0.5,
      dynamicAnimation: {
        speed: 1000
      },
    },
    toolbar: {
      show: false
    },
    events: {
      animationEnd: function (chartCtx) {
        const newData1 = chartCtx.w.config.series[0].data.slice();
        newData1.shift();
        const newData2 = chartCtx.w.config.series[1].data.slice();
        newData2.shift();
        const newData3 = chartCtx.w.config.series[2].data.slice();
        newData3.shift();

        window.setTimeout(function () {
          chartCtx.updateOptions(
            {
              series: [
                {
                  data: newData1
                },
                {
                  data: newData2
                },
                {
                  data: newData3
                }
              ],
            },
            false,
            false,
            false
          );
        }, 300);
      }
    },
  },
  stroke: {
    curve: "smooth",
    width: 5
  },
  // xaxis: {
  //   type: "datetime",
  //   // range: 2700000
  // },
  yaxis: {
    max: 50,
    min: 0
  },
  title: {
    text: "Realtime Chart",
    align: "left",
    style: {
      fontSize: "18px"
    }
  },
  legend: {
    show: false,
    floating: true,
    horizontalAlign: "left",
    onItemClick: {
      toggleDataSeries: false
    },
    position: "top",
    offsetY: -33,
    offsetX: 60
  },
  colors: ['#00008b', '#00FFFF', '#FFA500'],
  dataLabels: {
    enabled: true,
    style: {
      fontSize: '14px',
      colors: undefined
    },
  },
  noData: {
    text: 'Data is Loading...'
  }
}

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{height:'400px', width:'386px', background: '#2D3347'}}>
          <div style={{ background: '#24272B', position: 'relative', padding: '10px', marginBottom: '10px' }}>
              <h3 style={{ color: '#E3E3E3', lineHeight: '16.8px', fontSize: '14px', fontWeight: '700', margin: '0', width: '386px' }}>Severity Wise Summary</h3>
          </div>
          <ReactApexChart options={RadialBarOptions} series={RadialBarOptions.series} type="radialBar" />
          <BottomNavigation
              showLabels
              // value={value}
              // onChange={(event, newValue) => {
              //     setValue(newValue);
              // }}
              >
              <BottomNavigationAction label="HIGH-15" style={{ background: '#EC726E', fontWeight: '700', fontSize: '14px' }} />
              <BottomNavigationAction label="MEDIUM-30" style={{ background: '#68C2DF', fontWeight: '700', fontSize: '14px' }} />
              <BottomNavigationAction label="LOW-55" style={{ background: '#F0B05D', fontWeight: '700', fontSize: '14px' }} />
          </BottomNavigation>
        </div>
        
        <div style={{height:'auto', width:'808px', background: '#2D3347'}}>
          <div style={{ background: '#24272B', position: 'relative', padding: '10px', marginBottom: '10px' }}>
            <h3 style={{ color: '#E3E3E3', lineHeight: '16.8px', fontSize: '14px', fontWeight: '700', margin: '0', width: '386px' }}>Port Wise Vulnerability</h3>
          </div>
          <ReactApexChart options={StackedBarOptions} series={StackedBarOptions.series} type="bar" />
        </div>

        <div style={{height:'auto', width:'660px', background: '#2D3347'}}>
          <div style={{ background: '#24272B', position: 'relative', padding: '10px', marginBottom: '10px' }}>
            <h3 style={{ color: '#E3E3E3', lineHeight: '16.8px', fontSize: '14px', fontWeight: '700', margin: '0', width: '386px' }}>Port Wise Vulnerability</h3>
          </div>
          <ReactApexChart options={LineWithDataLabel} series={LineWithDataLabel.series} type="line" />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{height:'auto', width:'530px', background: '#2D3347', boxSizing: 'border-box'}}>
          <div style={{ background: '#24272B', position: 'relative', padding: '10px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ color: '#E3E3E3', lineHeight: '16.8px', fontSize: '14px', fontWeight: '700', margin: '0' }}>Top 10 Vulnerability Wise Summary</h3>
            </div>
            <div>
              <h3 style={{ color: '#E3E3E3', lineHeight: '16.8px', fontSize: '14px', fontWeight: '700', margin: '0'}}>IP: 192.168.100.01</h3>
            </div>
          </div>
          <ReactApexChart options={PolarAreaChart} series={PolarAreaChart.series} type="polarArea" />
        </div>

        <div style={{height:'auto', width:'808px', background: '#2D3347'}}>
          <div style={{ background: '#24272B', position: 'relative', padding: '10px', marginBottom: '10px' }}>
            <h3 style={{ color: '#E3E3E3', lineHeight: '16.8px', fontSize: '14px', fontWeight: '700', margin: '0', width: '386px' }}>Top 10 Port Wise Vulnerability</h3>
          </div>
          <ReactApexChart options={PatternedStackedBarOptions} series={PatternedStackedBarOptions.series} type="bar" />
        </div>

        <div style={{height:'auto', width:'530px', background: '#2D3347', boxSizing: 'border-box'}}>
          <div style={{ background: '#24272B', position: 'relative', padding: '10px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ color: '#E3E3E3', lineHeight: '16.8px', fontSize: '14px', fontWeight: '700', margin: '0' }}>Top 10 Port Wise Summary</h3>
            </div>
            <div>
              <h3 style={{ color: '#E3E3E3', lineHeight: '16.8px', fontSize: '14px', fontWeight: '700', margin: '0'}}>IP: 192.168.100.01</h3>
            </div>
          </div>
          <ReactApexChart options={PieChart} series={PieChart.series} type="pie" />
        </div>

      </div>

      <div style={{height:'500px', width:'700px', marginTop: '50px'}}>
        <ReactApexChart options={{...RealTimeChart, series: seriesData, labels}} series={seriesData} />
      </div>
    </>
  )
}

export default Nutshell