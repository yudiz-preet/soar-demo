import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { BottomNavigation, BottomNavigationAction, colors } from '@material-ui/core'
import { io } from "socket.io-client";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

const socket = io('http://localhost:3100/');

const Audit = () => {
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

  const PolicyInfringementOption = {
    series: [{
        name: 'Total Available Polices',
        data: [70, 90, 50, 30, 50, 90, 70, 50, 12, 30, 50, 90, 100, 14]
      }, {
        name: 'Deployed Policy',
        data: [30, 10, 60, 70, 10, 50, 20, 80, 90, 30, 80, 20, 30, 80]
      }
    ],
    colors: ['#EC726E', '#68C2DF'],
    chart: {
      type: 'bar',
      height: 350,
      stacked: false,
    },
    plotOptions: {
      bar: {
        columnWidth: '60%',
        horizontal: false,
        borderRadius: 0,
        dataLabels: {
          total: {
            enabled: false,
            style: {
              fontSize: '13px',
              fontWeight: 900,
            }
          }
        }
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 3,
      colors: ['transparent'],
    },
    // title: {
    //   text: 'Fiction Books Sales'
    // },
    xaxis: {
      categories: [
        'Hardware', 
        ['IP + Port', 'Blocking'], 
        ['Power', 'Saver'], 
        ['Remote', 'Desktop', 'Policy'], 
        'Rules', 
        'Share', 
        'User', 
        ['Shutdown', 'Policy'], 
        ['Password', 'Complexity'], 
        ['Login', 'Restriction', 'Policy'], 
        ['Event', 'Monitoring'], 
        ['IP Change', 'Ristriction'], 
        ['Disk', 'Cleanup'], 
        'DCM'
      ],
      labels: {
        style: {
          colors: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff']
        }
      },
    },
    yaxis: {
      min: 0,
      max: 120,
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
      borderColor: '#575C6C',
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    }
  }

  const inventorySummaryChartOption = {
    series: [
      {
        data: [20, 12, 6, 20, 12, 6, 1, 12, 6, 20, 12, 6, 20, 12, 6]
      }
    ],
    chart: {
      height: 350,
      type: 'bar',
      events: {
        click: function(chart, w, e) {
          // console.log(chart, w, e)
        }
      }
    },
    colors: ['#EC726E', '#F0B05D', '#68C2DF', '#07A13B', '#EA62A3', '#6CCDE2', '#FF3A29', '#4339F2', '#CCF8FE', '#CACACA', '#FFB200', '#6FCF97', '#2D9CDB', '#FFF5CC', '#F9F279'],
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
      }
    },
    xaxis: {
      categories: [
        'Device',
        ['Data', 'Leakage'],
        'IP Change',
        'Others',
        'System',
        'Software',
        'Hardware',
        ['Network', 'Card'], 
        'Drive',
        'User',
        'Share',
        'Device',
        'Printer',
        'Service',
        ['Network', 'Traffic']
      ],
      labels: {
        style: {
          colors: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
          fontSize: '12px',
        }
      }
    },
    yaxis: {
      min: 0,
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
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false,
    },
    grid: {
      show: true,
      position: 'back',
      borderColor: '#575C6C',
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    }
  }

  return (
    <>
      <div style={{height:'auto', width:'900px', background: '#2D3347'}}>
        <div style={{ background: '#24272B', position: 'relative', padding: '10px', marginBottom: '10px' }}>
            <h3 style={{ color: '#E3E3E3', lineHeight: '16.8px', fontSize: '14px', fontWeight: '700', margin: '0', width: '386px' }}>Policy Infringement</h3>
        </div>
        <ReactApexChart options={PolicyInfringementOption} series={PolicyInfringementOption.series} type="bar" />
      </div>

      <div style={{height:'auto', width:'900px', background: '#2D3347', marginTop: '30px'}}>
        <div style={{ background: '#24272B', position: 'relative', padding: '10px', marginBottom: '10px' }}>
            <h3 style={{ color: '#E3E3E3', lineHeight: '16.8px', fontSize: '14px', fontWeight: '700', margin: '0', width: '386px' }}>inventory Summary</h3>
        </div>
        <ReactApexChart options={inventorySummaryChartOption} series={inventorySummaryChartOption.series} type="bar" />
      </div>
    </>
  )
}

export default Audit