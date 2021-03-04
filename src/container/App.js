import React, { Component } from 'react';
import Cardlist from '../components/cardlist';
import Searchbox from '../components/searchbox';
import { robots } from '../robots';
import Scroll from '../components/scroll';
import './App.css';

class App extends Component {
	state = {
		robots: robots,
		searchfield: '',
	};

	onSearchChange = (Event) => {
		this.setState({ searchfield: Event.target.value });
	};

	render() {
		const { robots, searchfield } = this.state;
		const filteredrobots = robots.filter((robots) => {
			return robots.name.toLowerCase().includes(searchfield.toLowerCase());
		});
		if (!robots.length) {
			return <h1>Loading</h1>;
		} else {
			return (
				<div className="tc">
					<h1 className="f1">Robofriends</h1>
					<Searchbox handleChange={this.onSearchChange} />
					<Scroll>
						<Cardlist robots={filteredrobots} />
					</Scroll>
				</div>
			);
		}
	}
}

export default App;
