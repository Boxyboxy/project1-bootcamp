import React from "react";
import { Button } from "react-bootstrap";
export class AddButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleDisplayForm = this.handleDisplayForm.bind(this);
  }

  handleDisplayForm() {
    this.props.handleDisplayForm();
  }
  render() {
    let displayForm = this.props.displayForm;

    return (
      <Button className="action pull-right" onClick={this.handleDisplayForm}>
        {displayForm ? "Home" : "Add Recipe"}
      </Button>
    );
  }
}
