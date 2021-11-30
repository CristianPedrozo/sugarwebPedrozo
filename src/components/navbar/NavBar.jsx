import './NavBar.css'
import Shopwidget from './CartWidget/CartWidget'


const NavBar = ()=>{
    return(
		<nav className="navbar navbar-expand-lg navbar-light ">
				<div className="container">
					<a className="navbar-brand" href="/#"> Sugar & Bakeouse</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<a className="nav-link active" href="/#">Inicio</a>
                            <a className="nav-link " href="/#">Nuestra historia</a>
                            <li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Menu
								</a>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<li><a className="dropdown-item" href="/#">Desayunos</a></li>
									<li><a className="dropdown-item" href="/#">Almuerzos</a></li>
									<li><a className="dropdown-item" href="/#">En todo momento</a></li>
								</ul>
								<Shopwidget numCompra={5}/>
							</li>
                            <a className="nav-link " href="/#">Contactanos</a>
						</div>
					</div>
				</div>
		</nav>
    )
} 
export default NavBar