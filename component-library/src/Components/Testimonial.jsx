import './Testimonial.css'
import { RiDoubleQuotesL } from "react-icons/ri";
import { RxSlash } from "react-icons/rx";


export default function Testimonial({ img, name, occupation, children }) {
    const imgSrc = img ? img : "/Logo_Workcation.png"
    const imgStyle = img ? "person-img" : "company-logo"
    const textAreaStyle = img ? "text text-img" : "text text-logo"
    const testimonialText = img ? children : `"${children}"`
    const bottomTextStyle = img ? "bottom-text" : "bottom-text bottom-text-slash"

    return (
        <div className='testimonial'>
            <img className={imgStyle} src={imgSrc} />
            <div className={textAreaStyle}>
                {img && <RiDoubleQuotesL className='quotes-icon'/>}
                <p>{testimonialText}</p>
                <div className={bottomTextStyle}>
                    <span className='name'> {name} </span>
                    {!img && <RxSlash className='slash-icon' />}
                    <span className='occupation'> {occupation} </span>
                </div>
            </div>
        </div>
    )
}