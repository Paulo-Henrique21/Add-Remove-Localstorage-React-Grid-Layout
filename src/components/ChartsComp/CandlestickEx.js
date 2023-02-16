import ApexCharts from "react-apexcharts"



export default function CandlestickEx(props) {

  const options = {

    chart: {
    
    type: 'candlestick', 
    toolbar: {
      show: true,
      offsetX: 0,
          offsetY: 0,
          tools: {
            download: true,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            
            customIcons: [
            ]
          },
    },
  
      foreColor: '#fff',
      zoom: {
  
        anabled:true,
        type: 'xy',
        autoScaleYaxis: false,
        zoomedArea: {
          fill: {
            color: '#90CAF9',
            opacity: 0.4
          },
          stroke: {
            color: '#0D47A1',
            opacity: 0.4,
            width: 1
          },
          
        },
        
  
      },
      background: 'none',
      foreColor: '#000',
  
    },
  
    stroke: {
      show: true,
      curve: 'smooth',
      lineCap: 'butt',
      colors: undefined,
      width: 1,
      dashArray: 0,      
  },
  

    
    xaxis: {
      type: 'datetime',
  
    },
  
  
    title: {
      
        text: `CANDLESTICK PRODUTO 1: ${props.nome} PRODUTO 2: ${props.nome2}`,
        align: 'left',
        margin: 0,
        offsetX: 6,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '14px',
          fontWeight:  600,
          fontFamily:  undefined,
          color:  '#26A0FC'
        },
    },
  
    yaxis: {
      title: {
        text: 'Preço (R$/MWh)',
        offsetX: 5,
        offsetY: 0,
        style: {
          fontSize:  '12px',
          fontWeight:  700,
          fontFamily:  undefined,
          color:  '#263238'
        },
      },
      tooltip: {
        enabled: true,
        enabledOnSeries: undefined,
        shared: true,
        followCursor: false,
        intersect: false,
        inverseOrder: false,
        custom: undefined,
        fillSeriesColor: false,
        theme: false,
        style: {
          fontSize: '12px',
          fontFamily: undefined
        },
        onDatasetHover: {
            highlightDataSeries: false,
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
            enabled: false,
            position: 'topRight',
            offsetX: 0,
            offsetY: 0,
        },
    }
  
    },
   
    grid: { 
      yaxis: {
          lines: {
              show: true,
          }
      },  
      padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
      },  
      borderColor: '#DFFFF0',
  },
  
  plotOptions: {
    candlestick: {
      colors: [] ,
      
    wick: {
      
      useFillColor: true,
      
    }
    },
  
  },
  

      colors: [
    "#26A0FC",
    "#00e396",
    
  ],    
   
  
  }

   const series = [
  {
    type: "candlestick",
    name: "candle",
    data: props.candle,
  },

  {
    type: "candlestick",
    name: "candle2",
    data: props.candle2,
  },
  
]

  
  return (

    <ApexCharts
      options={options}
      series={series}
      type="candlestick"
      width="100%"
      height="100%"

    />

  )
}