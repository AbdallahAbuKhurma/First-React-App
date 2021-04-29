import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

class SelectedBeast extends React.Component {

  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.closing}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.details.title}</Modal.Title>
          </Modal.Header>
          <Card.Img variant="top" style={{ width: '18rem',display: 'block',marginLeft: 'auto',marginRight: 'auto'}} src={this.props.details.imageUrl} />
          <Modal.Body>
            <h1 style={{textAlign: 'center'}}>{this.props.details.title}</h1>
            <p style={{textAlign: 'center'}}>{this.props.details.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closing}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SelectedBeast;
