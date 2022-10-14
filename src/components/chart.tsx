import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Box from '@mui/material/Box';

import { Type_Chart_Options } from '../types/@types';

const options: Type_Chart_Options = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'My chart'
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6, 5, 3, 23, 4, 4]
      }
    ]
};

const ChartComponent = () => (
    <Box>
        <HighchartsReact highcharts={Highcharts} options={options} />
    </Box>
);

export default ChartComponent;