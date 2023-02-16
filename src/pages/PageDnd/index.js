import "./styles.css";
import "../../rgl.css"
//import "/node_modules/react-grid-layout/css/styles.css";
// import "/node_modules/react-resizable/css/styles.css";
import { Responsive, WidthProvider } from "react-grid-layout";
import { useState } from "react";
import { nanoid } from "nanoid";
import { useLocalStorage } from "react-use";
import Line from "../../components/ChartsExemplo/Line";
import Bar from "../../components/ChartsExemplo/Bar";
import CompOlhc from "../../components/CompOlhc";
//import { MdClose, MdDragIndicator, MdFilterAlt } from 'react-icons/md'
import Olhc from "../../components/Olhc";
import ColumnEx from "../../components/ChartsExemplo/Coluna/ColumnEx";
import LineIcon from "../../components/ChartsExemplo/LineIcon";
//import CandleIcon from "../ChartsExemplo/CandleIcon";


const ResponsiveRGL = WidthProvider(Responsive);

let dragging = false;
let type;

const getDroppableProp = (t) => ({
  draggable: true,
  unselectable: "on",
  onDragStart() {
    type = t;
  }
  // onDragStop() {}
});
const Droppables = () => (
  <aside>
    Comparação OLHC
    <div className="one-prod-dnd-icons" {...getDroppableProp("COMPARAÇÃO OLHC")}>COMPAR OLHC</div>
    OLHC
    <div className="one-prod-dnd-icons" {...getDroppableProp("OLHC")}>Icone OLHC</div>
    <p>Column Test</p>
    <div className="one-prod-dnd-icons" {...getDroppableProp("Column")}><ColumnEx/></div>
    <p>Line Test</p>
    <div className="one-prod-dnd-icons" {...getDroppableProp("Line")}><LineIcon/></div>
  </aside>
);

export default function PageDnd() {
  const [currBreakpoint, setCurrBreakpoint] = useState("lg");
  const [panels, setPanels] = useLocalStorage("panels", []);
  const [layouts, setLayouts] = useLocalStorage("layouts");
  // console.log(panels, layouts);

  const handleLayouts = (newLayouts) => {
    if (!dragging) setLayouts(newLayouts);
  };

  const handleDelete = ({ target: { id } }) => {
    setPanels(panels.filter((panel) => panel.i !== id));
    handleLayouts(
      Object.entries(layouts).reduce((acc, [key, value]) => {
        return {
          ...acc,
          [key]: value.filter((layout) => layout.i !== id)
        };
      }, {})
    );
  };

  const handleDrop = (layout, layoutItem, _event) => {
    dragging = false;

    if (layoutItem) {
      setPanels([
        ...panels,
        {
          ...layoutItem,
          type
        }
      ]);
      handleLayouts({ ...layouts, [currBreakpoint]: layout });
    }
  };

  return (
    <>
      <Droppables />


      <ResponsiveRGL
        autoSize={false}
        //compactType="vertical horizontal"
        compactType="vertical"
        containerPadding={[30, 0]} //padding do campo drag and drop
        draggableHandle=".draggable-handle"
        //isBounded
        margin={[15, 15]} //margin entre os elementos drag-and-drop
        // eliminate resizing animation on component mount
        measureBeforeMount={true}
        resizeHandles={["se", "e", "s"]} //Representam as setas de controlar o tamanho
        rowHeight={3}
        // LAYOUTS
        layouts={layouts}
        onLayoutChange={(_, newLayouts) => handleLayouts(newLayouts)}
        onBreakpointChange={(breakpoint) => setCurrBreakpoint(breakpoint)}
        // DROPS
        isDroppable={true}
        droppingItem={{ i: nanoid(), w: 120, h: 30, minW: 3, minH: 2 }}
        onDrop={handleDrop}
        // DRAGS
        onDragStart={() => (dragging = true)}
        onDragStop={() => (dragging = false)}
        cols={{ lg: 300, md: 10, sm: 6, xs: 4, xxs: 2 }}

      >
        {panels.map(({ i, type, ...grid }) => {
          switch (type) {
            case "COMPARAÇÃO OLHC":
              return (
                <div key={i} data-grid={grid} className='container-elementos'>
                   <button className="btn-trash-1" id={i} onClick={handleDelete}>
                      &#x2715;
                    </button>
                  <div className="charts-elementos">
                    <CompOlhc type={type} teste={handleDelete} id={i}/>
                  </div>
                </div>
              );
            case "OLHC":
              return (
                <div key={i} data-grid={grid} className='container-elementos'>
                   <button className="btn-trash-1" id={i} onClick={handleDelete}>
                      &#x2715;
                    </button>
                  <div className="charts-elementos">
                    <Olhc type={type} teste={handleDelete} id={i}/>
                  </div>
                </div>
              );
            case "Column":
              return (
                <div key={i} data-grid={grid} className='container-elementos'>
                  <header className="header-elementos">
                    <h2>{type}</h2>
                    <button className="draggable-handle">&#10021;</button>
                    <button className="btn-trash-1" id={i} onClick={handleDelete}>
                      &#x2715;
                    </button>
                  </header>
                  <div className="charts-elementos">
                    <Bar />

                  </div>
                </div>
              );
              case "Line":
              return (
                <div key={i} data-grid={grid} className='container-elementos'>
                  <header className="header-elementos">
                    <h2>{type}</h2>
                    <button className="draggable-handle">&#10021;</button>
                    <button className="btn-trash-1" id={i} onClick={handleDelete}>
                      &#x2715;
                    </button>
                  </header>
                  <div className="charts-elementos">
                    <Line/>

                  </div>
                </div>
              );
            default:
              return null;
          }
        })}

      </ResponsiveRGL>

      {panels.length < 1 && <em>DROP ITEMS HERE</em>}
    </>
  );
}
