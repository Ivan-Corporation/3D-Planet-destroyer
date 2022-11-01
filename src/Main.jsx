
import { BrowserRouter } from "react-router-dom";

import './index.css'
import AppEarth from './pages/earth/AppEarth.tsx';
import AppMars from './pages/mars/AppMars.tsx';
import AppVenus from './pages/venus/AppVenus.tsx';
import AppMercury from './pages/mercury/AppMercury.tsx';
import AppJupiter from './pages/jupiter/AppJupiter.tsx';
import AppSaturn from './pages/saturn/AppSaturn.tsx';
import AppUranus from './pages/uranus/AppUranus.tsx';
import AppNeptune from './pages/neptune/AppNeptune.tsx';
import AppPluton from './pages/pluton/AppPluton.tsx';
import AppSun from './pages/sun/AppSun.tsx';

import "react-tiger-transition/styles/main.min.css";
import { Navigation, Route, Screen } from "react-tiger-transition";




export default function Main() {



	return (
		<div style={{
			height: '101vh'
		}}>
			<BrowserRouter>


				<Navigation>

					<Route
						exact path="/"
						screen >
						<Screen >
							<AppEarth />
						</Screen>
					</Route>
					<Route
						exact path="/mars"
						screen
					><AppMars />
					</Route>
					<Route
						exact path="/venus"
						screen
					><AppVenus />
					</Route>
					<Route
						exact path="/mercury"
						screen
					><AppMercury />
					</Route>
					<Route
						exact path="/jupiter"
						screen
					><AppJupiter />
					</Route>
					<Route
						exact path="/saturn"
						screen
					><AppSaturn />
					</Route>
					<Route
						exact path="/uranus"
						screen
					><AppUranus />
					</Route>
					<Route
						exact path="/neptune"
						screen
					><AppNeptune />
					</Route>
					<Route
						exact path="/pluton"
						screen
					><AppPluton />
					</Route>
					<Route
						exact path="/sun"
						screen
					><AppSun />
					</Route>
				</Navigation>
			</BrowserRouter>
		</div>
	);
}

