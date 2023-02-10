import './style.css'
import ApexCharts from 'react-apexcharts'

const options = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: true,
        type: "xy"
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
    }
  }

export default function Line(){

    const series = [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }]
    
    return(
        <ApexCharts
        options={options} 
        series={series} 
        type="line" 
        height='100%'
        width="100%"
        />
    )
    
    }
  
    
    