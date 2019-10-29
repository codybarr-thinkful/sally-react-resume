import React from 'react'
import Section from '~/components/Section'

function App() {
	const show = false

	return <main className="App">{show && <Section />}</main>
}

export default App
