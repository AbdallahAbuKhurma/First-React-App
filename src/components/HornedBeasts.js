import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeastes extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      votes : 0
    };
  }

  votesHandeler = () => {
    this.setState({
      votes: this.state.votes + 1
    });
  } 

  render(){
    return (
      <Card style={{ width: '18rem',margin:'2rem' }}>
        <Card.Img variant="top" src = {this.props.imageUrl} />
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
    );
  }
}
    

export default HornedBeastes;
