import React from "react";
import { ResponsiveLine } from "@nivo/line";

const SummaryOfDifferentScans = () => {

    const data = [
        {
          color: 'hsl(342, 70%, 50%)',
          data: [
            {
              color: 'hsl(27, 70%, 50%)',
              x: 'SD',
              y: 47
            },
            {
              color: 'hsl(135, 70%, 50%)',
              x: 'JE',
              y: 37
            },
            {
              color: 'hsl(124, 70%, 50%)',
              x: 'NF',
              y: 54
            },
            {
              color: 'hsl(252, 70%, 50%)',
              x: 'TR',
              y: 6
            },
            {
              color: 'hsl(304, 70%, 50%)',
              x: 'CD',
              y: 35
            },
            {
              color: 'hsl(38, 70%, 50%)',
              x: 'TH',
              y: 1
            },
            {
              color: 'hsl(285, 70%, 50%)',
              x: 'KN',
              y: 45
            },
            {
              color: 'hsl(9, 70%, 50%)',
              x: 'TW',
              y: 37
            },
            {
              color: 'hsl(150, 70%, 50%)',
              x: 'KI',
              y: 39
            },
            {
              color: 'hsl(53, 70%, 50%)',
              x: 'ES',
              y: 53
            },
            {
              color: 'hsl(56, 70%, 50%)',
              x: 'PH',
              y: 53
            },
            {
              color: 'hsl(37, 70%, 50%)',
              x: 'NZ',
              y: 0
            },
            {
              color: 'hsl(178, 70%, 50%)',
              x: 'CV',
              y: 14
            },
            {
              color: 'hsl(280, 70%, 50%)',
              x: 'YE',
              y: 21
            },
            {
              color: 'hsl(144, 70%, 50%)',
              x: 'DO',
              y: 16
            },
            {
              color: 'hsl(284, 70%, 50%)',
              x: 'AS',
              y: 26
            },
            {
              color: 'hsl(64, 70%, 50%)',
              x: 'LT',
              y: 20
            },
            {
              color: 'hsl(154, 70%, 50%)',
              x: 'JO',
              y: 42
            }
          ],
          id: 'whisky'
        },
        {
          color: 'hsl(102, 70%, 50%)',
          data: [
            {
              color: 'hsl(227, 70%, 50%)',
              x: 'SD',
              y: 19
            },
            {
              color: 'hsl(309, 70%, 50%)',
              x: 'JE',
              y: 40
            },
            {
              color: 'hsl(97, 70%, 50%)',
              x: 'NF',
              y: 41
            },
            {
              color: 'hsl(146, 70%, 50%)',
              x: 'TR',
              y: 9
            },
            {
              color: 'hsl(12, 70%, 50%)',
              x: 'CD',
              y: 3
            },
            {
              color: 'hsl(307, 70%, 50%)',
              x: 'TH',
              y: 28
            },
            {
              color: 'hsl(227, 70%, 50%)',
              x: 'KN',
              y: 52
            },
            {
              color: 'hsl(338, 70%, 50%)',
              x: 'TW',
              y: 24
            },
            {
              color: 'hsl(304, 70%, 50%)',
              x: 'KI',
              y: 15
            },
            {
              color: 'hsl(195, 70%, 50%)',
              x: 'ES',
              y: 11
            },
            {
              color: 'hsl(348, 70%, 50%)',
              x: 'PH',
              y: 26
            },
            {
              color: 'hsl(10, 70%, 50%)',
              x: 'NZ',
              y: 53
            },
            {
              color: 'hsl(2, 70%, 50%)',
              x: 'CV',
              y: 0
            },
            {
              color: 'hsl(160, 70%, 50%)',
              x: 'YE',
              y: 34
            },
            {
              color: 'hsl(84, 70%, 50%)',
              x: 'DO',
              y: 30
            },
            {
              color: 'hsl(53, 70%, 50%)',
              x: 'AS',
              y: 44
            },
            {
              color: 'hsl(110, 70%, 50%)',
              x: 'LT',
              y: 23
            },
            {
              color: 'hsl(324, 70%, 50%)',
              x: 'JO',
              y: 7
            }
          ],
          id: 'rhum'
        },
        {
          color: 'hsl(64, 70%, 50%)',
          data: [
            {
              color: 'hsl(53, 70%, 50%)',
              x: 'SD',
              y: 29
            },
            {
              color: 'hsl(235, 70%, 50%)',
              x: 'JE',
              y: 35
            },
            {
              color: 'hsl(268, 70%, 50%)',
              x: 'NF',
              y: 60
            },
            {
              color: 'hsl(350, 70%, 50%)',
              x: 'TR',
              y: 23
            },
            {
              color: 'hsl(270, 70%, 50%)',
              x: 'CD',
              y: 55
            },
            {
              color: 'hsl(14, 70%, 50%)',
              x: 'TH',
              y: 1
            },
            {
              color: 'hsl(284, 70%, 50%)',
              x: 'KN',
              y: 36
            },
            {
              color: 'hsl(89, 70%, 50%)',
              x: 'TW',
              y: 32
            },
            {
              color: 'hsl(69, 70%, 50%)',
              x: 'KI',
              y: 22
            },
            {
              color: 'hsl(21, 70%, 50%)',
              x: 'ES',
              y: 42
            },
            {
              color: 'hsl(182, 70%, 50%)',
              x: 'PH',
              y: 48
            },
            {
              color: 'hsl(54, 70%, 50%)',
              x: 'NZ',
              y: 9
            },
            {
              color: 'hsl(230, 70%, 50%)',
              x: 'CV',
              y: 18
            },
            {
              color: 'hsl(252, 70%, 50%)',
              x: 'YE',
              y: 55
            },
            {
              color: 'hsl(11, 70%, 50%)',
              x: 'DO',
              y: 59
            },
            {
              color: 'hsl(79, 70%, 50%)',
              x: 'AS',
              y: 37
            },
            {
              color: 'hsl(5, 70%, 50%)',
              x: 'LT',
              y: 44
            },
            {
              color: 'hsl(149, 70%, 50%)',
              x: 'JO',
              y: 31
            }
          ],
          id: 'gin'
        },
        {
          color: 'hsl(231, 70%, 50%)',
          data: [
            {
              color: 'hsl(139, 70%, 50%)',
              x: 'SD',
              y: 17
            },
            {
              color: 'hsl(203, 70%, 50%)',
              x: 'JE',
              y: 52
            },
            {
              color: 'hsl(102, 70%, 50%)',
              x: 'NF',
              y: 4
            },
            {
              color: 'hsl(29, 70%, 50%)',
              x: 'TR',
              y: 4
            },
            {
              color: 'hsl(234, 70%, 50%)',
              x: 'CD',
              y: 33
            },
            {
              color: 'hsl(95, 70%, 50%)',
              x: 'TH',
              y: 8
            },
            {
              color: 'hsl(247, 70%, 50%)',
              x: 'KN',
              y: 35
            },
            {
              color: 'hsl(256, 70%, 50%)',
              x: 'TW',
              y: 47
            },
            {
              color: 'hsl(242, 70%, 50%)',
              x: 'KI',
              y: 39
            },
            {
              color: 'hsl(102, 70%, 50%)',
              x: 'ES',
              y: 50
            },
            {
              color: 'hsl(354, 70%, 50%)',
              x: 'PH',
              y: 52
            },
            {
              color: 'hsl(265, 70%, 50%)',
              x: 'NZ',
              y: 30
            },
            {
              color: 'hsl(112, 70%, 50%)',
              x: 'CV',
              y: 48
            },
            {
              color: 'hsl(90, 70%, 50%)',
              x: 'YE',
              y: 54
            },
            {
              color: 'hsl(206, 70%, 50%)',
              x: 'DO',
              y: 8
            },
            {
              color: 'hsl(350, 70%, 50%)',
              x: 'AS',
              y: 1
            },
            {
              color: 'hsl(78, 70%, 50%)',
              x: 'LT',
              y: 9
            },
            {
              color: 'hsl(292, 70%, 50%)',
              x: 'JO',
              y: 36
            }
          ],
          id: 'vodka'
        },
        {
          color: 'hsl(0, 70%, 50%)',
          data: [
            {
              color: 'hsl(95, 70%, 50%)',
              x: 'SD',
              y: 15
            },
            {
              color: 'hsl(55, 70%, 50%)',
              x: 'JE',
              y: 42
            },
            {
              color: 'hsl(118, 70%, 50%)',
              x: 'NF',
              y: 6
            },
            {
              color: 'hsl(34, 70%, 50%)',
              x: 'TR',
              y: 41
            },
            {
              color: 'hsl(49, 70%, 50%)',
              x: 'CD',
              y: 8
            },
            {
              color: 'hsl(299, 70%, 50%)',
              x: 'TH',
              y: 24
            },
            {
              color: 'hsl(36, 70%, 50%)',
              x: 'KN',
              y: 2
            },
            {
              color: 'hsl(205, 70%, 50%)',
              x: 'TW',
              y: 26
            },
            {
              color: 'hsl(349, 70%, 50%)',
              x: 'KI',
              y: 1
            },
            {
              color: 'hsl(334, 70%, 50%)',
              x: 'ES',
              y: 22
            },
            {
              color: 'hsl(220, 70%, 50%)',
              x: 'PH',
              y: 11
            },
            {
              color: 'hsl(5, 70%, 50%)',
              x: 'NZ',
              y: 56
            },
            {
              color: 'hsl(63, 70%, 50%)',
              x: 'CV',
              y: 26
            },
            {
              color: 'hsl(27, 70%, 50%)',
              x: 'YE',
              y: 7
            },
            {
              color: 'hsl(358, 70%, 50%)',
              x: 'DO',
              y: 12
            },
            {
              color: 'hsl(348, 70%, 50%)',
              x: 'AS',
              y: 14
            },
            {
              color: 'hsl(80, 70%, 50%)',
              x: 'LT',
              y: 6
            },
            {
              color: 'hsl(157, 70%, 50%)',
              x: 'JO',
              y: 49
            }
          ],
          id: 'cognac'
        }
      ]

    return (<div>
        <div>Top 20 Summary of Different Scans</div>
        <div style={{ height: 400 }}>
        <ResponsiveLine
          data={data}
          xScale={{ type: "point" }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "transportation",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "count",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          defs={[
            {
              colors: [
                {
                  color: 'inherit',
                  offset: 0
                },
                {
                  color: 'inherit',
                  offset: 100,
                  opacity: 0
                }
              ],
              id: 'gradientA',
              type: 'linearGradient'
            }
          ]}
          enableArea
          enableSlices="x"
          fill={[
            {
              id: 'gradientA',
              match: '*'
            }
          ]}
          height={400}
          margin={{
            bottom: 60,
            left: 80,
            right: 20,
            top: 20
          }}
          width={900}
          yScale={{
            stacked: true,
            type: 'linear'
          }}
        />
        </div>
    </div>)
}

export default SummaryOfDifferentScans;