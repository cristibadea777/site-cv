import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Pagini.css"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { listaProiecte } from "./ListaProiecte"
import { useState } from "react"
import ModalPoza from "./ModalPoza"

const Proiecte = () => {

    const [indexProiectCurent, setIndexProiectCurent] = useState(0)

    const proiectInainte = () => {
        if(indexProiectCurent === listaProiecte.length - 1){ setIndexProiectCurent(0) }
        else{ setIndexProiectCurent(indexProiectCurent + 1) }
    }
    const proiectInapoi = () => {
        if(indexProiectCurent === 0){ setIndexProiectCurent(listaProiecte.length - 1) }
        else { setIndexProiectCurent(indexProiectCurent - 1) }
    }

    const [viewModalPoza, setViewModalPoza] = useState(false)
    const [indexPoza,     setIndexPoza]     = useState(0)

    const deschideModalPoza = (index) => {
        setIndexPoza(index)
        setViewModalPoza(true)
    }

    const ContainerNumePozaButoane = () => (
        <div className="container-nume-poza-butoane-proiect">
            <button className="buton-proiect" onClick={proiectInapoi}><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></button>
            <div className="container-nume-poza-proiect">
                <div className="container-nume-proiect">
                    <label className="label-nume">{listaProiecte[indexProiectCurent].nume}</label>
                </div>
                <div style={{display: "flex", height: "75%", width: "100%", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                    <div style={{width: "40%", height: "100%",display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <img src={require(`../../${listaProiecte[indexProiectCurent].poza_proiect}`)} style={{height: "100%", width: "auto", marginLeft: "20%", marginRight: "20%"}} alt=""/>
                    </div>
                </div>
            </div>
            <button className="buton-proiect" onClick={proiectInainte}><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
        </div>
    )

    const ContainerFunctionalitati = () => (
        <div className="container-functionalitati-proiect">
            <div style={{overflow: "auto"}}>
                <p>{listaProiecte[indexProiectCurent].descriere}</p>
                {listaProiecte[indexProiectCurent].functionalitati.map(
                    (functionalitate, index) => (
                        <p key={index}>- {functionalitate}</p>
                    )
                )}
            </div>
        </div>
    )

    const ContainerPozeProiect = () => (
        <div className="container-poze-proiect">
            <div className="container-poze">
                {listaProiecte[indexProiectCurent].poze.map(
                    (poza, index) => (
                        <a key={index} onClick={()=>{deschideModalPoza(index)}} className="ancora-poza-proiect"><img key={index} className="ancora-poza-proiect poza-proiect" src={require(`../../${poza}`)}  alt=""/>  </a>
                    ) 
                )}
            </div>
        </div>
    )

    return(
        <div className="container-principal">   
            {!viewModalPoza && (
                <>
                <div className="container-stanga">
                    <ContainerNumePozaButoane />
                    <ContainerFunctionalitati />
                </div>
                <div className="container-dreapta">
                    <ContainerPozeProiect />
                </div>
                </>
            )}
            {viewModalPoza && (
                <ModalPoza 
                    indexProiectCurent  = {indexProiectCurent}
                    indexPoza           = {indexPoza}
                    setIndexPoza        = {setIndexPoza} 
                    setViewModalPoza    = {setViewModalPoza}
                />
            )}
        </div>
    )
}
export default Proiecte