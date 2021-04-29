import React from 'react';
import HornedBeasts from './HornedBeasts';
import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component {
  render() {
    return (
      <CardColumns>
        {this.props.list.map(element => {
          return (

            <HornedBeasts key = {element.title} title={element.title} imageUrl={element.image_url} description={element.description} viewBeast={this.props.viewBeast} />
          );
        })
        }
      </CardColumns>

    );
  }
}

export default Main;
