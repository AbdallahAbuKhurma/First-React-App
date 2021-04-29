import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0
    };
  }

  votesHandeler = () => {
    this.setState({
      votes: this.state.votes + 1
    });
  }

  display=() => {
    this.props.viewBeast(this.props);
  }

  render() {
    return (
      <div>
        <CardColumns>
          <Card style={{marginLeft: '30px',marginBottom: '30px',marginTop: '30px', width: '22rem', textAlign: 'center', border: '2px solid #0009' }}>
            <Card.Img onClick={this.display} style={{ width: '20rem', height: '20rem' }} src={this.props.imageUrl} />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
                {this.props.description}
              </Card.Text>
              <Card.Text>
                {this.state.votes} ⭐Votes
              </Card.Text>
              <Button onClick={this.votesHandeler} variant="primary">Votes</Button>
            </Card.Body>
          </Card>
        </CardColumns>
      </div>
    );
  }
}

export default HornedBeasts;
