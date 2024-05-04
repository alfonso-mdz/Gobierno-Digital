import { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';
import logo from '../assets/Pokédex_logo.png'

export const Navigation = () => {
	const { onInputChange, valueSearch, onResetForm } =
		useContext(PokemonContext);

	const navigate = useNavigate();

	const onSearchSubmit = e => {
		e.preventDefault();
		navigate('/search', {
			state: valueSearch,
		});

		onResetForm();
	};

	return (
		<>
			<header className='container'>
				<Link to='/' className='logo'>
					<img
						src='https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png'						
						alt='Logo Pokedex'
					/>
				</Link>

				
			</header>

			<Outlet />
		</>
	);
};
