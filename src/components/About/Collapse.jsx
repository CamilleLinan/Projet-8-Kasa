import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const angleDown = <FontAwesomeIcon icon={faAngleDown} />
const angleUp = <FontAwesomeIcon icon={faAngleUp} />

const Collapse = () => {
    const [ openTab1, setOpenTab1 ] = useState(false);
    const [ openTab2, setOpenTab2 ] = useState(false);
    const [ openTab3, setOpenTab3 ] = useState(false);
    const [ openTab4, setOpenTab4 ] = useState(false);

    const openTabHandler1 = () => {
        setOpenTab1((openTab1) => !openTab1); 
    };

    const openTabHandler2 = () => {
        setOpenTab2((openTab2) => !openTab2);
    };

    const openTabHandler3 = () => {
        setOpenTab3((openTab3) => !openTab3);
    };

    const openTabHandler4 = () => {
        setOpenTab4((openTab4) => !openTab4);
    };
    
    return(
        <section className="about">
            <div className="about_collapse">
                <div onClick={openTabHandler1} className="about_collapse_container">
                    <h2 className="about_collapse_container_title">Fiabilité</h2>
                    {!openTab1 ? <i className="about_collapse_container_icon">{angleDown}</i> : <i className="about_collapse_container_icon">{angleUp}</i>}
                </div>
                {openTab1 && 
                    <p className="about_collapse_content">
                      Les annonces postées sur Kasa garantissent une fiabilité totale. 
                      Les photos sont conformes aux logements, et toutes les informations 
                      sont régulièrement vérifiées par nos équipes.
                    </p>
                }
            </div>
            <div className="about_collapse">
                <div onClick={openTabHandler2} className="about_collapse_container">
                    <h2 className="about_collapse_container_title">Respect</h2>
                    {!openTab2 ? <i className="about_collapse_container_icon">{angleDown}</i> : <i className="about_collapse_container_icon">{angleUp}</i>}
                </div>
                {openTab2 && 
                    <p className="about_collapse_content">
                        La bienveillance fait partie des valeurs fondatrices de Kasa. 
                        Tout comportement discriminatoire ou de perturbation du voisinage
                        entraînera une exclusion de note plateforme.
                    </p>
                }
            </div>
            <div className="about_collapse">
                <div onClick={openTabHandler3} className="about_collapse_container">
                    <h2 className="about_collapse_container_title">Service</h2>
                    {!openTab3 ? <i className="about_collapse_container_icon">{angleDown}</i> : <i className="about_collapse_container_icon">{angleUp}</i>}
                </div>
                {openTab3 && 
                    <p className="about_collapse_content">
                        Nos équipes se tiennent à votre disposition pour vous fournir une 
                        expérience parfaite. N'hésitez pas à nous contacter si vous avez 
                        la moindre question.   
                    </p>
                }
            </div>
            <div className="about_collapse">
                <div onClick={openTabHandler4} className="about_collapse_container">
                    <h2 className="about_collapse_container_title">Sécurité</h2>
                    {!openTab4 ? <i className="about_collapse_container_icon">{angleDown}</i> : <i className="about_collapse_container_icon">{angleUp}</i>}
                </div>
                {openTab4 && 
                    <p className="about_collapse_content">
                        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que 
                        pour les voyageurs, chaque logement correspond aux critères de sécurité
                        établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                        locataire, cela permet à nos équipes de vérifier que les standards sont 
                        bien respectés. Nous organisons également des ateliers sur la sécurité 
                        domestique pour nos hôtes.
                    </p>
                }
            </div>
        </section>
    )
}

export default Collapse;