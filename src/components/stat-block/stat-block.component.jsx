import { Component } from 'react';

import './stat-block.styles.css';

class StatBlock extends Component {
  constructor() {
    super();

    this.state = {
      monster: {},
    }
  }

  componentDidMount() {
    const { monster } = this.props;
    fetch(`https://www.dnd5eapi.co/api/monsters/${monster}`)
      .then((response) => response.json())
      .then((monsterData) => {
          this.setState(
          () => {return { monster: monsterData}},
          )
      })
  }

  render() {
    return (<div className="stat-block">
        {this.state.monster.index}
        This is the StatBlock Component poggies
      </div>
    )
  }
}

export default StatBlock;