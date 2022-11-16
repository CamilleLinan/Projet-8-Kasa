import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const angleDown = <FontAwesomeIcon icon={faAngleDown} />
const angleUp = <FontAwesomeIcon icon={faAngleUp} />

const Collapse = (props) => {
    const [ openTab, setOpenTab ] = useState(false);

    const openTabHandler = () => {
        setOpenTab((openTab) => !openTab); 
    };

    return (
        <div className="about_collapse">
            <div onClick={openTabHandler} className="about_collapse_container">
                <h2 className="about_collapse_container_title">{props.title}</h2>
                {!openTab ? <i className="about_collapse_container_icon">{angleDown}</i> : <i className="about_collapse_container_icon">{angleUp}</i>}
            </div>
            {openTab && 
                <p className="about_collapse_content">{props.content}</p>
            }
        </div>
    )
}

export default Collapse;