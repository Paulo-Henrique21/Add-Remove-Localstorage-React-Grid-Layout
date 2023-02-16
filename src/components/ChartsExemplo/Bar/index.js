import ApexCharts from 'react-apexcharts'

const options = {
    chart: {
      height: 350,
      type: 'bar',
      zoom: {
        enabled: true,
        type: "x"
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: '',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 10,
        left: 0
    },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    yaxis: {
      title: {
        text: 'MWm'
      },
      tooltip: {
        enabled: true,
        enabledOnSeries: undefined,
        shared: true,
        followCursor: true,
        intersect: true,
        inverseOrder: true,
        custom: undefined,
        fillSeriesColor: true,
        theme: true,
        style: {
          fontSize: '12px',
          fontFamily: undefined
        },
        onDatasetHover: {
            highlightDataSeries: true,
        },
        x: {
            show: true,
            format: 'dd MMM',
            formatter: undefined,
        },
        y: {
            formatter: undefined,
            title: {
                formatter: (seriesName) => seriesName,
            },
        },
        z: {
            formatter: undefined,
            title: 'Size: '
        },
        marker: {
            show: true,
        },
        items: {
           display: "flex",
        },
        fixed: {
            enabled: true,
            position: 'topRight',
            offsetX: 0,
            offsetY: 0,
        },
    },
  
      },
  }

export default function Bar(){

    const series = [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }]
    
    return(
        <ApexCharts
        options={options} 
        series={series} 
        type="bar" 
        height='100%'
        width="100%"
        />
    )
    
    }
  
    
    