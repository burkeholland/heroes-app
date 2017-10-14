import React, { Component } from 'react';

import Hero from './Hero';
import api from '../api';

class Heroes extends Component {
  state = {
    heroes: [],
    creatingHero: false,
    lazyEdit: null
  };

  async componentDidMount() {
    const { default: EditHero } = await import('./EditHero');

    let json = await api.get();

    this.setState({
      heroes: json,
      lazyEdit: EditHero
    });
  }

  handleSelect = hero => {
    this.setState({ selectedHero: hero });
  };

  handleDelete = async (event, hero) => {
    event.stopPropagation();

    let json = await api.destroy(hero);

    let heroes = this.state.heroes;
    heroes = heroes.filter(h => h !== hero);
    this.setState({ heroes: heroes });

    if (this.selectedHero === hero) {
      this.setState({ selectedHero: null });
    }
  };

  handleEnableAddMode = () => {
    this.setState({
      addingHero: true,
      selectedHero: { id: '', name: '', saying: '' }
    });
  };

  handleCancel = () => {
    this.setState({ addingHero: false, selectedHero: null });
  };

  handleSave = async () => {
    let heroes = this.state.heroes;

    if (this.state.addingHero) {
      let result = await api.create(this.state.selectedHero);

      heroes.push(this.state.selectedHero);
      this.setState({
        heroes: heroes,
        selectedHero: null,
        addingHero: false
      });
    } else {
      let result = await api.update(this.state.selectedHero);

      this.setState({ selectedHero: null });
    }
  };

  handleOnChange = event => {
    let selectedHero = this.state.selectedHero;
    selectedHero[event.target.name] = event.target.value;
    this.setState({ selectedHero: selectedHero });
  };

  render() {
    const EditHero = this.state.lazyEdit;
    return (
      <div>
        <ul className="heroes">
          {this.state.heroes.map(hero => {
            return (
              <Hero
                key={hero.id}
                hero={hero}
                onSelect={this.handleSelect}
                onDelete={this.handleDelete}
                selectedHero={this.state.selectedHero}
              />
            );
          })}
        </ul>
        <div className="editarea">
          <button onClick={this.handleEnableAddMode}>Add New Hero</button>
          {EditHero ? (
            <EditHero
              addingHero={this.state.addingHero}
              onChange={this.handleOnChange}
              selectedHero={this.state.selectedHero}
              onSave={this.handleSave}
              onCancel={this.handleCancel}
            />
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </div>
    );
  }
}

export default Heroes;
