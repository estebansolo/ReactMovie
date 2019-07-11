import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { debounce } from 'debounce';

class SearchBar extends Component {
	state = {
		value: ''
	};

	timeout = null;

	doSearch = (event) => {
		this.setState({ value: event.target.value });
		//clearTimeout(this.timeout);
		this.doCallback();
	};

	doCallback = debounce(() => {
		this.props.callback(false, this.state.value);
	}, 800);

	componentDidMount() {
		this.setState({
			value: this.state.value !== '' ? this.state.value : this.props.text
		});
	}

	render() {
		return (
			<div className="rmdb-searchbar">
				<div className="rmdb-searchbar-content">
					<FontAwesome className="rmdb-fa-search" name="search" size="2x" />
					<input
						type="text"
						className="rmdb-searchbar-input"
						placeholder="search"
						onChange={this.doSearch}
						value={this.state.value}
					/>
				</div>
			</div>
		);
	}
}

export default SearchBar;
