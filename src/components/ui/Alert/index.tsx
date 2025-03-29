import { ReactNode } from "react";
import "./index.scss"
import { X } from 'lucide-react';
import { AlertType } from "../../../types";
interface IProps {
    // Define any props you need here
    type: AlertType;
    icon: ReactNode;
    title: string;
    description?: string;
    children?: ReactNode;
}
const Alert = ({ type='default',icon, title, description, children }: IProps) => {
    return (
        <div className={type}>
            <div className="alert-header">
                <div className="alert-title">
                    <span>
                        {icon}
                    </span>
                    <h4>{title}</h4>
                </div>
                    <X className="close" size={20}/>
            </div>
            {children ? children : <p>{description}</p>}
        </div>
    )
}

export default Alert