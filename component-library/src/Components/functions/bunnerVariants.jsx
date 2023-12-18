import { FaCheckCircle, FaExclamationTriangle, FaTimesCircle, FaInfoCircle } from "react-icons/fa";

function headerText(variant) {
    if (variant === "success") {
        return "Success!"
    } else if (variant === "warning") {
        return "Attention"
    } else if (variant === "error") {
        return "There is a problem with your application"
    } else if (variant === "neutral") {
        return "Update available"
    } else {
        return variant
    }
}

function headerIcon(variant) {
    if (variant === "success") {
        return <FaCheckCircle style={{ color: "#34D399" }} />
    } else if (variant === "warning") {
        return <FaExclamationTriangle style={{ color: "#FBBF24" }} />
    } else if (variant === "error") {
        return <FaTimesCircle style={{ color: "#F87171" }} />
    } else if (variant === "neutral") {
        return <FaInfoCircle style={{ color: "#60A5FA" }} />
    } else {
        return <FaInfoCircle style={{ color: "#60A5FA" }} />
    }
}

export {headerText, headerIcon} 