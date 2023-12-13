import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';

import './WeeklySheet.css'; // Import the CSS file

const WeeklySheet = () => {
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);

  useEffect(() => {
    // Bar Chart
    const barChart = echarts.init(barChartRef.current);
    const barChartOption = {
      title: {
        text: 'Weekly Bar Chart',
        left: 'center',
      },
      xAxis: {
        type: 'category',
        data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Bar Chart',
          type: 'bar',
          data: [120, 200, 150, 80, 70, 110, 130],
        },
      ],
    };
    barChart.setOption(barChartOption);

    // Pie Chart
    const pieChart = echarts.init(pieChartRef.current);
    const pieChartOption = {
      title: {
        text: 'Weekly Pie Chart',
        left: 'center',
      },
      series: [
        {
          name: 'Pie Chart',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 335, name: 'Monday' },
            { value: 310, name: 'Tuesday' },
            { value: 234, name: 'Wednesday' },
            { value: 135, name: 'Thursday' },
            { value: 1548, name: 'Friday' },
            { value: 200, name: 'Saturday' },
            { value: 80, name: 'Sunday' },
          ],
        },
      ],
    };
    pieChart.setOption(pieChartOption);

    // Clean up
    return () => {
      barChart.dispose();
      pieChart.dispose();
    };
  }, []);

  return (
    <div className="weekly-sheet-container">
      <div className="chart-card" ref={barChartRef}></div>
      <div className="chart-card" ref={pieChartRef}></div>
    </div>
  );
};

export default WeeklySheet;
