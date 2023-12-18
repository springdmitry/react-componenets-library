import './Banner.css';
import classnames from "classnames";
import { headerText, headerIcon } from './functions/bunnerVariants';


export default function Banner({ children, variant, className }) {
    const allClasses = classnames('banner', variant, className)
    const icon = headerIcon(variant)
    const header = headerText(variant)

    return (
        <div className={allClasses}>
            {icon}
            <div className='text'>
                <h4>{header}</h4>
                {children && <p>{ children }</p>}
            </div>
            
        </div>
    )
}