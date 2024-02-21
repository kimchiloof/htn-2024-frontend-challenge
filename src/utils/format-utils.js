import { GrWorkshop } from "react-icons/gr";
import { MdOutlineDraw, MdOutlineMessage, MdOutlinePublic, MdLock } from "react-icons/md";


/**
 * @param str {String}
 * @returns {String}
 */
export function ToDisplayCase(str) {
    return str
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

/**
 * @param startDate {Date}
 * @param endDate {Date}
 * @returns String
 */
export function ToDisplayDate(startDate, endDate) {
    if (startDate.getDate() === endDate.getDate()) {
        return `${startDate.toLocaleDateString()}, ${startDate.toLocaleTimeString()} - ${endDate.toLocaleTimeString()}`;
    } else {
        return `${startDate.toLocaleString()} - ${endDate.toLocaleString()}`;
    }
}


/**
 * @param eventType {String}
 * @return {JSX.Element}
 */
export function EventTypeIcon(eventType) {
    switch (eventType) {
        case "workshop":
            return <GrWorkshop/>;
        case "tech_talk":
            return <MdOutlineMessage/>;
        case "activity":
            return <MdOutlineDraw/>;
        default:
            break;
    }
}

/**
 * @param eventType {String}
 * @return {String}
 */
export function EventTypeColor(eventType) {
    switch (eventType) {
        case "workshop":
            return "lightblue";
        case "tech_talk":
            return "lightgreen";
        case "activity":
            return "pink";
        default:
            break;
    }
}

/**
 * @param eventPermission {String}
 * @return {String}
 */
export function EventPermission(eventPermission) {
    switch (eventPermission) {
        case "public":
            return <MdOutlinePublic/>
        case "private":
            return <MdLock/>
        default:
            break;
    }
}
