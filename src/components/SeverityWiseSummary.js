import React from "react";
import { ResponsiveRadialBar } from "@nivo/radial-bar";

const SeverityWiseSummary = () => {
  const data = [
    {
      id: "Supermarket",
      data: [
        {
          x: "Vegetables",
          y: 154,
        },
        {
          x: "Fruits",
          y: 182,
        },
        {
          x: "Meat",
          y: 118,
        },
      ],
    },
    {
      id: "Combini",
      data: [
        {
          x: "Vegetables",
          y: 185,
        },
        {
          x: "Fruits",
          y: 13,
        },
        {
          x: "Meat",
          y: 285,
        },
      ],
    },
    {
      id: "Online",
      data: [
        {
          x: "Vegetables",
          y: 26,
        },
        {
          x: "Fruits",
          y: 104,
        },
        {
          x: "Meat",
          y: 280,
        },
      ],
    },
  ];

  return (
    <div>
      <div style={{ marginTop: 10, marginBottom: 10 }}>Severity Wise Summary</div>
      <div style={{height: 400}}>
      <ResponsiveRadialBar
        data={data}
        valueFormat=" >-.2f"
        startAngle={-180}
        endAngle={90}
        padding={0.4}
        cornerRadius={45}
        margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
        radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
        circularAxisOuter={null}
        enableTracks={false}
        enableRadialGrid={false}
        enableCircularGrid={false}
        enableLabels={true}
        label="value"
        theme={{
          "background": "#ffffff",
          "text": {
              "fontSize": 11,
              "fill": "#333333",
              "outlineWidth": 0,
              "outlineColor": "transparent"
          },
          "axis": {
              "domain": {
                  "line": {
                      "stroke": "#777777",
                      "strokeWidth": 1
                  }
              },
              "legend": {
                  "text": {
                      "fontSize": 12,
                      "fill": "#333333",
                      "outlineWidth": 0,
                      "outlineColor": "transparent"
                  }
              },
              "ticks": {
                  "line": {
                      "stroke": "#777777",
                      "strokeWidth": 1
                  },
                  "text": {
                      "fontSize": 11,
                      "fill": "#333333",
                      "outlineWidth": 0,
                      "outlineColor": "transparent"
                  }
              }
          },
          "grid": {
              "line": {
                  "stroke": "#eeeeee",
                  "strokeWidth": 1
              }
          },
          "legends": {
              "title": {
                  "text": {
                      "fontSize": 11,
                      "fill": "#333333",
                      "outlineWidth": 0,
                      "outlineColor": "transparent"
                  }
              },
              "text": {
                  "fontSize": 11,
                  "fill": "#333333",
                  "outlineWidth": 0,
                  "outlineColor": "transparent"
              },
              "ticks": {
                  "line": {},
                  "text": {
                      "fontSize": 10,
                      "fill": "#333333",
                      "outlineWidth": 0,
                      "outlineColor": "transparent"
                  }
              }
          },
          "annotations": {
              "text": {
                  "fontSize": 13,
                  "fill": "#333333",
                  "outlineWidth": 2,
                  "outlineColor": "#ffffff",
                  "outlineOpacity": 1
              },
              "link": {
                  "stroke": "#000000",
                  "strokeWidth": 1,
                  "outlineWidth": 2,
                  "outlineColor": "#ffffff",
                  "outlineOpacity": 1
              },
              "outline": {
                  "stroke": "#000000",
                  "strokeWidth": 2,
                  "outlineWidth": 2,
                  "outlineColor": "#ffffff",
                  "outlineOpacity": 1
              },
              "symbol": {
                  "fill": "#000000",
                  "outlineWidth": 2,
                  "outlineColor": "#ffffff",
                  "outlineOpacity": 1
              }
          },
          "tooltip": {
              "container": {
                  "background": "#ffffff",
                  "fontSize": 12
              },
              "basic": {},
              "chip": {},
              "table": {},
              "tableCell": {},
              "tableCellValue": {}
          }
      }}
        legends={[
          {
              anchor: 'bottom',
              direction: 'column',
              justify: false,
              translateX: 150,
              translateY: -15,
              itemsSpacing: 6,
              itemDirection: 'left-to-right',
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: '#999',
              symbolSize: 18,
              symbolShape: 'square',
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemTextColor: '#000'
                      }
                  }
              ]
          }
      ]}
      />
      </div>
    </div>
  );
};

export default SeverityWiseSummary;
