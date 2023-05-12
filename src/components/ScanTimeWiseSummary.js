import React from "react";
import { ResponsiveRadar } from '@nivo/radar'

const ScanTimeWiseSummary = () => {

    const data = [
        {
          "taste": "fruity",
          "chardonay": 49,
          "carmenere": 29,
          "syrah": 80
        },
        {
          "taste": "bitter",
          "chardonay": 102,
          "carmenere": 57,
          "syrah": 45
        },
        {
          "taste": "heavy",
          "chardonay": 70,
          "carmenere": 68,
          "syrah": 99
        },
        {
          "taste": "strong",
          "chardonay": 68,
          "carmenere": 106,
          "syrah": 48
        },
        {
          "taste": "sunny",
          "chardonay": 69,
          "carmenere": 83,
          "syrah": 56
        }
      ]

    return (<div>
        <div>
            Top 10 Scan Time Wise Summary
        </div>
        <div style={{ height: 400 }}>
        <ResponsiveRadar
        data={data}
        keys={[ 'chardonay', 'carmenere', 'syrah' ]}
        indexBy="taste"
        valueFormat=">-.2f"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderColor={{ from: 'color' }}
        gridLabelOffset={36}
        dotSize={10}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        colors={{ scheme: 'nivo' }}
        blendMode="multiply"
        motionConfig="wobbly"
        legends={[
            {
                anchor: 'top-left',
                direction: 'column',
                translateX: -50,
                translateY: -40,
                itemWidth: 80,
                itemHeight: 20,
                itemTextColor: '#999',
                symbolSize: 12,
                symbolShape: 'circle',
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
    </div>)
}

export default ScanTimeWiseSummary;