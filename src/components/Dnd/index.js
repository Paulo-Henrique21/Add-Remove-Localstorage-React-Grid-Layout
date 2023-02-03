import GridLayout from "react-grid-layout";
import '../../../node_modules/react-resizable/css/styles.css'
import '../../../node_modules/react-grid-layout/css/styles.css'
import Box from "../Box";
import './Dnd.css'
import {useEffect, useState} from 'react';





export default function Dnd() {

    const [isLoading, setIsLoading] = useState(false);

    
    let dnd = false

    useEffect(() => {
        // 👇️ if you need to listen for changes of isLoading boolean
        console.log('isLoading is: ', isLoading);
        
      }, [isLoading]);


      const toggleIsLoading = () => {
        // 👇️ passed function to setState
        setIsLoading(current => !current);
        
      };

    return (
        <div>
            <GridLayout 
            className="layout" 
            cols={12} rowHeight={30} 
            width={1900} 
            draggableHandle=".drag-handle">
                
                <div key="a" data-grid={{ x: 0, y: 0, w: 1, h: 2 }}>
                    <div className="drag-handle">a</div>
                    <div>b</div>
                    <div>c</div>
                </div>
                 <div key="b" data-grid={{ x: 1, y: 0, w: 8, h: 10}}>
                    <Box/>

                </div> 
                <div key="c" data-grid={{ x: 4, y: 0, w: 1, h: 2 }}>
            
            
            
                </div>
            </GridLayout>
            {/* <button onClick={toggleIsLoading}>Toggle loading state</button>
      {isLoading && <h2>bobbyhadz.com...</h2>} */}
        </div>
    )
}