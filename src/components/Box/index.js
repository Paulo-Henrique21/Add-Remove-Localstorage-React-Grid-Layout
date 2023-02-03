import Candlestick from '../Charts/Candlestick'
import './Box.css'
import { CiFilter } from 'react-icons/ci';
import { MdDragIndicator, MdMoreVert } from 'react-icons/md';

function Box(props) {
    return (
        <div className='body-box'>
            <div className='full-box '>
                <div className="box">
                    <div className='box-container'>
                        <div className='icon dnd drag-handle'><MdDragIndicator /></div>
                        <div>Chart</div>
                        <div className='icon filter'><CiFilter /></div>
                        <div className='icon more'><MdMoreVert/></div>
                    </div>
                </div>
                <div className='chart-box'>
                    <Candlestick />
                </div>
            </div>

        </div>
    )
}

export default Box