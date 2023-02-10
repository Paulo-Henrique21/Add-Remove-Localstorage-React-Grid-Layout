import Line from '../Charts/Line'
import './Box.css'
import { CiFilter } from 'react-icons/ci';
import { MdDragIndicator, MdMoreVert } from 'react-icons/md';

function Box(props) {
    return (
        <div className='body-box'>
            <div className='full-box '>
                <div className="box">
                    <div className='box-container'>
                        <div className='iconb dndb drag-handle'><MdDragIndicator /></div>
                        <div>Chart</div>
                        <div className='iconb filterb'><CiFilter /></div>
                        <div className='iconb moreb'><MdMoreVert/></div>
                    </div>
                </div>
                <div className='chart-box'>
                    <Line />
                </div>
            </div>

        </div>
    )
}

export default Box