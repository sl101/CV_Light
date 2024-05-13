import { NavLink } from "react-router-dom"

const Navbar = () => {
	return (
		<header className="header">
			<NavLink to="/" className="py-1 px-2 rounded-lg bg-white flex items-center justify-center font-bold shadow-md">
				<p className="blue-gradient_text">Slava Zh</p>
			</NavLink>
			<nav className="flex text-lg gap-7 font-medium">
				<NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>About</NavLink>
				<NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>Project</NavLink>
				<NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>Contact</NavLink>
			</nav>
		</header>
	)
}

export default Navbar
