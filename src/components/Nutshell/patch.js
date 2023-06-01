import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { BottomNavigation, BottomNavigationAction, colors } from '@material-ui/core'
import { io } from "socket.io-client";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

const socket = io('http://localhost:3100/');

const Patch = () => {
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

const MultipleRadarChart = {
  series: [{
      name: 'OFFICE- 12',
      data: [0.5, 0.2, 0.2, 0.3, 0.6, 2, 5, 3.2, 3.2, 5],
    }, {
      name: 'SQL SERVER- 30',
      data: [1.5, 1.5, 1.3, 1.5, 1.5, 1.2, 1.3, 3, 1.9, 2],
    }, {
      name: 'WINDOWS- 30',
      data: [2, 1.3, 1.3, 2, 2.2, 4, 1.8, 1.5, 1.8, 1.5],
    }, {
      name: 'Other- 10',
      data: [1.1, 1.3, 3, 2, 0.7, 0.5, 0.8, 2.5, 4, 1.5],
    }
  ],
  chart: {
    width: 700,
    height: 700,
    type: 'radar',
    dropShadow: {
      enabled: true,
      blur: 1,
      left: 1,
      top: 1
    }
  },
  // title: {
  //   text: 'Radar Chart - Multi Series'
  // },
  stroke: {
    width: 1,
  },
  fill: {
    opacity: 0.5
  },
  markers: {
    size: 0
  },
  xaxis: {
    categories: ['192.168.100.01', '192.168.100.02', '192.168.100.03', '192.168.100.04', '192.168.100.05', '192.168.100.06', '192.168.100.07', '192.168.100.08', '192.168.100.09', '192.168.100.10'],
  },
  colors: ['#EC726E', '#68C2DF', '#F0B05D', '#69BB69'],
  legend: {
    position: 'bottom',
    horizontalAlign: 'center',
    floating: true,
    offsetX: -20,
    offsetY: 7,
    markers: {
      radius: 15,
    },
    labels: {
      colors: ['#fff']
    }
  },
  yaxis: {
    tickAmount: 6,
    min: 0,
    max: 6,
    labels: {
      style: {
        colors: ['rgba(255,255,255,0.9)', 'rgba(255,255,255,0.9)', 'rgba(255,255,255,0.9)', 'rgba(255,255,255,0.9)', 'rgba(255,255,255,0.9)', 'rgba(255,255,255,0.9)', 'rgba(255,255,255,0.9)'],
        fontSize: '12px',
        fontWeight: 700,
      },
    },
  },
  plotOptions: {
    radar: {
      polygons: {
        strokeColor: '#D9D9D9',
      }
    }
  }
}

const StackedBarOptions = {
  series: [{
    name: 'MODERATE',
    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    color: '#EC726E'
  }, {
    name: 'UNRATED',
    data: [6, 6, 4, 6, 6, 4, 6, 6, 4, 6],
    color: '#68C2DF'
  }, {
    name: 'CRITICAL',
    data: [10, 10, 8, 10, 10, 8, 10, 10, 8, 10],
    color: '#F0B05D'
  }, {
    name: 'IMPORTANT',
    data: [16, 0, 14, 16, 0, 14, 16, 0, 14, 16],
    color: '#49A47A'
  }, {
    name: 'LOW',
    data: [22, 0, 0, 22, 0, 0, 22, 0, 0, 22],
    color: '#CB5C89'
  }],
  chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    toolbar: {
      show: true
    },
    zoom: {
      enabled: true
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  plotOptions: {
    bar: {
      columnWidth: '45%',
      horizontal: false,
      borderRadius: 0,
      dataLabels: {
        total: {
          enabled: false,
          style: {
            fontSize: '13px',
            fontWeight: 900
          }
        }
      }
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
    categories: ['192.168.100.01', '192.168.100.02', '192.168.100.03', '192.168.100.04', '192.168.100.05', '192.168.100.06', '192.168.100.07', '192.168.100.08', '192.168.100.09', '192.168.100.10'],
    labels: {
      style: {
        colors: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff']
      }
    },
    
  },
  yaxis: {
    min: -1,
    max: 24,
    range: 2,
    labels: {
      style: {
        colors: ['#fff']
      }
    },
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

const ColumnStackedBarOptions = {
  series: [{
    name: 'HIGH',
    data: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    color: '#EC726E'
  }, {
    name: 'MEDIUM',
    data: [6, 6, 4, 6, 6, 4, 6, 6, 4, 6, 6, 6, 4, 6, 6, 4, 6, 6, 4, 6],
    color: '#68C2DF'
  }, {
    name: 'LOW',
    data: [10, 10, 8, 10, 10, 8, 10, 10, 8, 10, 10, 10, 8, 10, 10, 8, 10, 10, 8, 10],
    color: '#F0B05D'
  }],
  chart: {
    type: 'bar',
    width: 1200,
    height: 350,
    stacked: true,
    toolbar: {
      show: true
    },
    zoom: {
      enabled: true
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  plotOptions: {
    bar: {
      columnWidth: '45%',
      horizontal: false,
      borderRadius: 0,
      dataLabels: {
        total: {
          enabled: false,
          style: {
            fontSize: '13px',
            fontWeight: 900
          }
        }
      }
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
    categories: ['192.168.100.01', '192.168.100.02', '192.168.100.03', '192.168.100.04', '192.168.100.05', '192.168.100.06', '192.168.100.07', '192.168.100.08', '192.168.100.09', '192.168.100.10', '192.168.100.01', '192.168.100.02', '192.168.100.03', '192.168.100.04', '192.168.100.05', '192.168.100.06', '192.168.100.07', '192.168.100.08', '192.168.100.09', '192.168.100.10'],
    labels: {
      style: {
        colors: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff']
      }
    },
    
  },
  yaxis: {
    min: -1,
    max: 24,
    labels: {
      // formatter: function (val) {
      //   if (val % 2 === 0) {
      //     return val
      //   } else {
      //     return null
      //   }
      // },
      style: {
        colors: ['#fff']
      }
    },
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

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{height:'504px', width:'600px', background: '#2D3347'}}>
          <div style={{ background: '#24272B', position: 'relative', padding: '10px', marginBottom: '10px' }}>
              <h3 style={{ color: '#E3E3E3', lineHeight: '16.8px', fontSize: '14px', fontWeight: '700', margin: '0', width: '386px' }}>Top 10 System Wise Category Summary</h3>
          </div>
          <ReactApexChart options={MultipleRadarChart} series={MultipleRadarChart.series} type="radar" />
          {/* <BottomNavigation
              showLabels
              // value={value}
              // onChange={(event, newValue) => {
              //     setValue(newValue);
              // }}
              >
              <BottomNavigationAction label="HIGH-15" style={{ background: '#EC726E', fontWeight: '700', fontSize: '14px' }} />
              <BottomNavigationAction label="MEDIUM-30" style={{ background: '#68C2DF', fontWeight: '700', fontSize: '14px' }} />
              <BottomNavigationAction label="LOW-55" style={{ background: '#F0B05D', fontWeight: '700', fontSize: '14px' }} />
          </BottomNavigation> */}
        </div>
      </div>

      {/* <div style={{height:'auto', width:'900px', background: '#2D3347'}}>
        <div style={{ background: '#24272B', position: 'relative', padding: '10px', marginBottom: '10px' }}>
            <h3 style={{ color: '#E3E3E3', lineHeight: '16.8px', fontSize: '14px', fontWeight: '700', margin: '0', width: '386px' }}>Top 10 System Wise Severity Summary</h3>
        </div>
        <ReactApexChart options={StackedBarOptions} series={StackedBarOptions.series} type="bar" />
      </div> */}
      <br/>

      <div style={{height:'auto', width:'900px', background: '#2D3347'}}>
        <div style={{ background: '#24272B', position: 'relative', padding: '10px', marginBottom: '10px' }}>
            <h3 style={{ color: '#E3E3E3', lineHeight: '16.8px', fontSize: '14px', fontWeight: '700', margin: '0', width: '386px' }}>Top 20 System Wise Summary</h3>
        </div>
        <ReactApexChart options={ColumnStackedBarOptions} series={ColumnStackedBarOptions.series} type="bar" />
      </div>
    </>
  )
}

export default Patch