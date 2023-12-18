import './Badge.css'
import classnames from "classnames"

export default function Badge({ children, shape, color }) {
    
    const allClasses = classnames('badge', shape, color)
    return (
        <div className={allClasses}>
            <p>{ children }</p>
        </div>
    )
}