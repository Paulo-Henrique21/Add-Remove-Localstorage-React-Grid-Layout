import ApexCharts from "react-apexcharts"



export default function CandlestickOneProd(props) {

  const options = {

    chart: {
     /* id: 'fb',
    group: 'social',  */
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
            /* customIcons podemos colocar novos icones */
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
  
  
  
    /*plotOption está sendo responsavel pela coloração dos candles*/
    
    xaxis: {
      type: 'datetime',
  
    },
    /* xaxis serve para configurar as propriedades do eixo x do gráfico;
    type: 'datetime' significa que é por tempo */
  
    title: {
      
        text: `CANDLESTICK PRODUTO: ${props.nome}`,
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
      },
  
    },
    /*tooltip são as caixas que ficam flutuando quando passamos o mouse em cima*/
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
      colors: {upward: '#3C90EB',
      downward: '#DF7D46'} ,
    
    wick: {
      useFillColor: true
    }
    },
  
  },
  
   /* Estão dando cor para os candles */
     /*  colors: [
    "#F3B415",
    "#000",
    
  ],     */
   
  
  }

   const series = [{
    type: "candlestick",
    name: "candle",
    data: props.candle,
  }]
  
  


  
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