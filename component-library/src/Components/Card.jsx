import './Card.css'
import { HiOutlineCloudUpload } from "react-icons/hi";


export default function Card({header, children}) {
    return (
        <div className='card'>
            <div className='icon-area'>
                <HiOutlineCloudUpload className='icon'/>
            </div>
            <div className='text-area'>
                <h2>{header}</h2> 
                <p>{children}</p>
            </div>
        </div>
    )
}