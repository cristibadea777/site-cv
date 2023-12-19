import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { listaProiecte } from "./ListaProiecte"
import { faArrowLeft, faArrowRight, faX } from "@fortawesome/free-solid-svg-icons"

const ModalPoza = ({indexProiectCurent, indexPoza, setIndexPoza, setViewModalPoza}) => {

    const pozaInainte = () => {
        if(indexPoza + 1 >= listaProiecte[indexProiectCurent].poze.length) setIndexPoza(0)
        else setIndexPoza(indexPoza + 1)
    }
    const pozaInapoi = () => {
        if(indexPoza === 0) setIndexPoza(listaProiecte[indexProiectCurent].poze.length - 1) 
        else (setIndexPoza(indexPoza - 1)) 
    }

    return (
        <div style={{height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row"}}>
            <div style={{position: "relative", height: "100%", width: "10%"}}>
                <button onClick={pozaInapoi} className="buton-proiect" style={{position: "absolute", top: "50%", left: 0, fontSize: "1.5em", border: "none"}}><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></button>
            </div>  
            <div style={{height: "100%", flexShrink: 1, display: "flex", alignItems: "center", justifyContent: "center"}}>
                <img style={{height: "100%", width: "auto"}} src={require(`../../${listaProiecte[indexProiectCurent].poze[indexPoza]}`)}  alt=""/>
            </div>
            <div style={{position: "relative", height: "100%", width: "10%"}}>
                <button onClick={pozaInainte}      className="buton-proiect" style={{position: "absolute", top: "50%", right: 0, fontSize: "1.5em", border: "none"}}><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                <button onClick={()=>{setViewModalPoza(false)}} className="buton-proiect" style={{position: "absolute", top: "5%", right: 0, fontSize: "1.5em", border: "none"}}><FontAwesomeIcon icon={faX}></FontAwesomeIcon></button>
            </div>  
        </div>
    )
}
export default ModalPoza