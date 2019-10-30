import React from 'react'

function ResumeHeader(props) {
	return (
		<header>
			<h1>{props.name} Resume</h1>
		</header>
	)
}

function App(props) {
	return (
		<div>
			<ResumeHeader name={props.name} />
			<main>
				<section>
					<h2>Contact {props.name}</h2>
					<img
						src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg"
						alt="Sally"
						height="200"
					/>
					<address>
						<a href="mailto:sally@gmail.com">sally@gmail.com</a>
						<br />
						<a href="tel:555-555-5555">555-555-5555</a>
					</address>
				</section>
				<section>
					<h2>Education</h2>
					<p>Fordham College- Bachelor of Science Education</p>
				</section>

				<section>
					<h2>Employment</h2>
					<ul>
						<li>
							Cooper Elmentary School, K-3 Grade Teacher,
							2005-2008
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Duis ante ex, varius vel ex
								non, pretium euismod justo. Donec sit amet
								eleifend velit. Donec ac facilisis sem. In
								dictum sapien arcu, non tempus erat cursus ut.
								Quisque lacus lorem, volutpat id interdum sed,
								commodo et arcu.
							</p>
						</li>
						<li>
							Samburg Middle School, Science Teacher 6-8 grades,
							2008-2019
							<p>
								Suspendisse elementum tristique consequat.
								Integer quis maximus metus. Morbi justo arcu,
								hendrerit cursus vestibulum sit amet, vehicula
								ut augue.
							</p>
						</li>
					</ul>
				</section>
			</main>
			<footer>2019 Sally A. Student Resume</footer>
		</div>
	)
}

export default App
