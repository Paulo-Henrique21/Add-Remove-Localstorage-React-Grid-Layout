import ApexCharts from "react-apexcharts"



export default function VolumeEx(props) {

  const options = {

    chart: {
      /* id: 'tw',
    group: 'social', */
    type: 'bar',
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
    /* height: 200, */
        /*foreColor é responsavel por dar cor aos textos do gráfico, nesse caso ele tem que ser declarado dentro do chart */
        foreColor: '#fff',
        zoom: {
  
          anabled:true,
          type: 'x',
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
  /* ------------------------------------------ */
    grid: {
        yaxis: {
          lines: {
              show: true,
              
          }
      },  
      padding: {
        top: -18,
        right: 0,
        bottom: 0,
        left: 0
    },  
    borderColor: '#DFFFF0',
    },  
    
  
  
    /*plotOption está sendo responsavel pela coloração dos candles*/
    plotOptions: {
        bar: { 
            borderRadius: 3,
            dataLabels: {position: 'top'},
        }
    },
          /*dataLabels está servindo para dar estilo e posição ao valor de volume*/
          dataLabels: {enabled: false,formatter: function (val) {return val + "";},offsetY: -20,style: {fontSize: '12px',colors: ["#304758"]}},
  
          xaxis: {
            tickPlacement: 'on',
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
    /* xaxis serve para configurar as propriedades do eixo x do gráfico;
    type: 'datetime' significa que é por tempo */
  
    title: {
        text: 'VOLUME',
        align: 'left',
        margin: 0,
        offsetX: 6,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '14px',
          fontWeight:  700,
          fontFamily:  undefined,
          color:  '#26A0FC'
        },
    
    },
  
    yaxis: {
      title: {
        text: 'MWm'
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
    /*tooltip são as caixas que ficam flutuando quando passamos o mouse em cima*/
    
   
  }
  
  

  const series = [{
    name: 'Volume',
    data: props.volume,
  },
  {
    name: 'Volume',
    data: props.volume2,
  }]

  /* 
        const series = [{
        name: "Volume",
        data: props.vol 
        
    },] */

  return (
    
      <ApexCharts
        options={options}
        series={series}
        type="bar"
        height= "100%"
        width="100%"
        
        
      />
    /*series é a propriedade por onde vamos passar as séries de dados, como arrays de objetos*/
    /*A propriedade type é o tipo de gráfico que é para ser renderizado, nesse caso estamos renderizando o tipo candlestick*/
    /*width e height vão definir largura e altura do gráfico*/

  )
}