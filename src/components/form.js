import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class beastForm extends React.Component {
  update = horns => this.props.updateHorns(horns);
  submitForm = (event) => {
    event.preventDefault();
    this.props.formData(event);
  }

  render() {
    return (
      <Form onSubmit={this.submitForm}>
        <Form.Group controlId="filterHorns">
          <Form.Label style = {{float: 'left' , fontSize: '25px'}}> Filter the displayed beast by selecting the number of the horns that the beast has </Form.Label>
          <br />
          <br />
          <Form.Control onChange={this.update} name="horns" as="select" defaultValue={'All'}>
            <option value="All">All Horned Beasts</option>
            <option value="1">Horned Beast with one horn</option>
            <option value="2">Horned Beast with two horns</option>
            <option value="3">Horned Beast with three horns</option>
            <option value="100">Horned Beast with hundred horns</option>
          </Form.Control>
          <br />
          <br />
          <Button style = {{marginLeft: '-1280px'}} variant="primary" type="submit">Filter</Button>
        </Form.Group>
      </Form>

    );
  }
}

export default beastForm;
