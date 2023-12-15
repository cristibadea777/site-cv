import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Pagini.css"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { listaProiecte } from "./ListaProiecte"
import { useState } from "react"

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

    const ContainerNumePozaProiect = () => (
        <>
        <div style={{height: "30%", width: "100%", display: "flex", flexDirection:"column"}}>
            <div style={{height: "25%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <label className="label-nume">{listaProiecte[indexProiectCurent].nume}</label>
            </div>
            <div style={{display: "flex", height: "75%", width: "100%", flexDirection: "column", alignItems: "center"}}>
                <div style={{width: "40%", height: "100%",display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <button onClick={proiectInapoi}><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></button>
                    <img src={require(`../../${listaProiecte[indexProiectCurent].poza_proiect}`)} style={{height: "100%", width: "auto"}} alt=""/>
                    <button onClick={proiectInainte}><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
        <div style={{display: "flex", height: "70%", flexDirection: "column",  alignItems: "center", justifyContent: "flex-start", overflowY: "auto"}}>
            <div style={{overflow: "auto"}}>
               <p>{listaProiecte[indexProiectCurent].descriere}</p>
               {listaProiecte[indexProiectCurent].functionalitati.map(
                (functionalitate, index) => (
                    <p key={index}>- {functionalitate}</p>
                )
               )}
            </div>
        </div>
        </>
    )

    const ContainerPozeProiect = () => (
        <div style={{display: "flex", height: "100%", width: "100%", justifyContent: "center", alignItems: "center"}}>
            <div style={{display: "flex", flexDirection: "row", height: "50%", width: "100%", overflowX: "scroll", overflowY: "hidden", paddingLeft: "1%"}}>
                {listaProiecte[indexProiectCurent].poze.map(
                    (poza, index) => (
                        <img key={index} className="poza-proiect" src={require(`../../${poza}`)}  alt=""/>  
                    ) 
                )}
            </div>
        </div>
    )

    return(
        <div className="container-principal">   
            <div className="container-stanga">
                <ContainerNumePozaProiect />
            </div>
            <div className="container-dreapta">
                <ContainerPozeProiect />
            </div>
        </div>
    )
}
export default Proiecte