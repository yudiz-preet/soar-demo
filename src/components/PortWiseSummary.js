import React from "react";
import { ResponsiveBar } from '@nivo/bar'

const PortWiseSummary = () => {

    const data = [
        {
          "country": "AD",
          "hot dog": 20,
          "hot dogColor": "hsl(180, 70%, 50%)",
          "burger": 112,
          "burgerColor": "hsl(268, 70%, 50%)",
          "sandwich": 95,
          "sandwichColor": "hsl(65, 70%, 50%)",
          "kebab": 108,
          "kebabColor": "hsl(75, 70%, 50%)",
          "fries": 155,
          "friesColor": "hsl(331, 70%, 50%)",
          "donut": 3,
          "donutColor": "hsl(261, 70%, 50%)"
        },
        {
          "country": "AE",
          "hot dog": 40,
          "hot dogColor": "hsl(209, 70%, 50%)",
          "burger": 149,
          "burgerColor": "hsl(152, 70%, 50%)",
          "sandwich": 24,
          "sandwichColor": "hsl(352, 70%, 50%)",
          "kebab": 142,
          "kebabColor": "hsl(192, 70%, 50%)",
          "fries": 114,
          "friesColor": "hsl(168, 70%, 50%)",
          "donut": 12,
          "donutColor": "hsl(58, 70%, 50%)"
        },
        {
          "country": "AF",
          "hot dog": 78,
          "hot dogColor": "hsl(15, 70%, 50%)",
          "burger": 169,
          "burgerColor": "hsl(58, 70%, 50%)",
          "sandwich": 115,
          "sandwichColor": "hsl(82, 70%, 50%)",
          "kebab": 3,
          "kebabColor": "hsl(76, 70%, 50%)",
          "fries": 80,
          "friesColor": "hsl(58, 70%, 50%)",
          "donut": 37,
          "donutColor": "hsl(157, 70%, 50%)"
        },
        {
          "country": "AG",
          "hot dog": 24,
          "hot dogColor": "hsl(241, 70%, 50%)",
          "burger": 127,
          "burgerColor": "hsl(5, 70%, 50%)",
          "sandwich": 75,
          "sandwichColor": "hsl(302, 70%, 50%)",
          "kebab": 9,
          "kebabColor": "hsl(78, 70%, 50%)",
          "fries": 177,
          "friesColor": "hsl(55, 70%, 50%)",
          "donut": 51,
          "donutColor": "hsl(171, 70%, 50%)"
        },
        {
          "country": "AI",
          "hot dog": 139,
          "hot dogColor": "hsl(342, 70%, 50%)",
          "burger": 134,
          "burgerColor": "hsl(65, 70%, 50%)",
          "sandwich": 166,
          "sandwichColor": "hsl(73, 70%, 50%)",
          "kebab": 46,
          "kebabColor": "hsl(173, 70%, 50%)",
          "fries": 55,
          "friesColor": "hsl(26, 70%, 50%)",
          "donut": 88,
          "donutColor": "hsl(232, 70%, 50%)"
        },
        {
          "country": "AL",
          "hot dog": 72,
          "hot dogColor": "hsl(276, 70%, 50%)",
          "burger": 35,
          "burgerColor": "hsl(340, 70%, 50%)",
          "sandwich": 59,
          "sandwichColor": "hsl(101, 70%, 50%)",
          "kebab": 120,
          "kebabColor": "hsl(123, 70%, 50%)",
          "fries": 40,
          "friesColor": "hsl(31, 70%, 50%)",
          "donut": 43,
          "donutColor": "hsl(32, 70%, 50%)"
        },
        {
          "country": "AM",
          "hot dog": 163,
          "hot dogColor": "hsl(306, 70%, 50%)",
          "burger": 131,
          "burgerColor": "hsl(41, 70%, 50%)",
          "sandwich": 92,
          "sandwichColor": "hsl(80, 70%, 50%)",
          "kebab": 30,
          "kebabColor": "hsl(105, 70%, 50%)",
          "fries": 18,
          "friesColor": "hsl(52, 70%, 50%)",
          "donut": 33,
          "donutColor": "hsl(290, 70%, 50%)"
        }
      ]

    return (<div>
        <div>
            Top 10 Port Wise Summary
        </div>
        <div style={{ height: 400 }}>
        <ResponsiveBar
        data={data}
        keys={[
            'hot dog',
            'burger',
            'sandwich',
            'kebab',
            'fries',
            'donut'
        ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
    />
        </div>
    </div>)
}

export default PortWiseSummary;