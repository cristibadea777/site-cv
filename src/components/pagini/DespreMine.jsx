import "./Pagini.css"

const DespreMine = ({setViewProiecte, setViewDespreMine}) => {

    const ContainerPoza = () => (
        <div className="container-poza-profil">
            <img src={require('../../cristian-badea.png')}  className="poza-profil" alt="" />
        </div>
    )

    const ContainerNume = () => (
        <div className="container-nume">
            <div className="container-row" style={{height: "50%"}}>
                <label className="label-nume">Badea Cristian-Narcis</label>
            </div>
        </div>
    )

    const ContainerContact = () => (
        <div className="container-contact">
            <div className="container-row info">
                <div className="container-halfrow left"><label>Telefon</label></div>
                <div className="container-halfrow right"><label>0771 287 872</label></div>
            </div>
            <div className="container-row info">
                <div className="container-halfrow left"><label>Email</label></div>
                <div className="container-halfrow right"><label>cristibadea777@gmail.com</label></div>
            </div>
            <div className="container-row info">
                <div className="container-halfrow left"><label>Conturi</label></div>
                <div className="container-halfrow conturi">
                    <div>
                        <a href="https://play.google.com/store/apps/dev?id=5253973682959814913" target="_blank" rel="noreferrer" className="poza-contact">
                            <img src={require('../../playstore.png')} alt=""/>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/cristibadea777" target="_blank" rel="noreferrer" className="poza-contact">
                            <img style={{maxWidth: "50%"}} src={require('../../github.png')} alt=""/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/cristian-badea-b976b8220/" target="_blank" rel="noreferrer" className="poza-contact">
                            <img src={require('../../linkedin.png')} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

    const handleClickProiecte = () => {
        setViewDespreMine(false)
        setViewProiecte(true)
        return false
    }

    const ContainerDespreMine = () => (
        <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <p>
                Mă numesc Badea Cristian-Narcis, am 25 de ani si sunt absolvent al FMI Ovidius din Constanta. 
            </p>
            <p>
                Am lucrat cu diverse limbaje de programare și framework-uri atât pe timpul facultății cât și după, în timpul liber, 
                cum ar fi: Java, Python, JavaScript, React, Spring Boot, Flask, React Native.
            </p>
            <p>
                Accesând secțiunea de <a style={{color: "white", cursor: "pointer", textDecoration: "underline"}} onClick={handleClickProiecte} href="#proiecte">proiecte</a> puteți vizualiza unele dintre proiectele pe care le-am realizat.
            </p>
        </div>
    )

    return(
        <div className="container-principal">  
            <div className="container-stanga">
                <ContainerPoza />
                <ContainerNume />
                <ContainerContact />
            </div>
            <div className="container-dreapta">
                <ContainerDespreMine />
            </div>
        </div>
    )
}
export default DespreMine