import "./styles.css";
import "../../rgl.css"
import "/node_modules/react-grid-layout/css/styles.css";
// import "/node_modules/react-resizable/css/styles.css";
import { Responsive, WidthProvider } from "react-grid-layout";
import { useState } from "react";
import { nanoid } from "nanoid";
import { useLocalStorage } from "react-use";
import Line from "../Charts/Line";
import Bar from "../Charts/Bar";


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
    <div {...getDroppableProp("CHART")}>Produto único</div>
    <div {...getDroppableProp("NOVO_COMPONENTE")}>Novo componente</div>
  </aside>
);
export default function OneProd() {
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
        containerPadding={[10, 0]}
        draggableHandle=".draggable-handle"
        //isBounded
        margin={[4, 4]}
        // eliminate resizing animation on component mount
        measureBeforeMount={true}
        resizeHandles={["se", "e", "s"]} //Representam as setas de controlar o tamanho
        rowHeight={60}
        // LAYOUTS
        layouts={layouts}
        onLayoutChange={(_, newLayouts) => handleLayouts(newLayouts)}
        onBreakpointChange={(breakpoint) => setCurrBreakpoint(breakpoint)}
        // DROPS
        isDroppable={true}
        droppingItem={{ i: nanoid(), w: 11, h: 7, minW: 3, minH: 2 }}
        onDrop={handleDrop}
        // DRAGS
        onDragStart={() => (dragging = true)}
        onDragStop={() => (dragging = false)}

      >
        {panels.map(({ i, type, ...grid }) => {
  switch (type) {
    case "CHART":
      return (
        <div key={i} data-grid={grid} className='container-elementos'>
          <header className="header-elementos">
            <h2>{type}</h2>
            <button className="draggable-handle">&#10021;</button>
            <button className="delete-button" id={i} onClick={handleDelete}>
              &#x2715;
            </button>
          </header>
          <div className="charts-elementos">
            <Line />
          </div>
        </div>
      );
    case "NOVO_COMPONENTE":
      return (
        <div key={i} data-grid={grid} className='container-elementos'>
          <header className="header-elementos">
            <h2>{type}</h2>
            <button className="draggable-handle">&#10021;</button>
            <button className="delete-button" id={i} onClick={handleDelete}>
              &#x2715;
            </button>
          </header>
          <div className="charts-elementos">
            <Bar/> 
            
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
