import './Navbar.css';

const Navbar = ({setViewDespreMine, setViewProiecte}) => {
    
    const veziDespreMine = () => {
        setViewDespreMine(true)
        setViewProiecte(false)
    }
    const veziProiecte = () => {
        setViewProiecte(true)
        setViewDespreMine(false)
    }

    return (
    <div className="navbar">
        <input type="button" onClick={veziDespreMine} value="Despre Mine" className="elementNavbar"/>
        <input type="button" onClick={veziProiecte}   value="Proiecte"    className="elementNavbar"/>
    </div>
    )
}
export default Navbar