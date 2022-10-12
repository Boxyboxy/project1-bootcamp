import React from "react";
import { AddButton } from "./AddButton";

export class HeaderHeader extends React.Component {
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
      <header className="page_header">
        <div className="container flex-container">
          <h1>Flava Borough</h1>
          <AddButton
            displayForm={displayForm}
            handleDisplayForm={this.handleDisplayForm}
          />
        </div>
      </header>
    );
  }
}
