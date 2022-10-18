import React from "react";
import { Button, Modal, Row, Container, Image } from "react-bootstrap";
import { EditRecipe } from "./EditRecipe";

export class DisplayRecipe extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.recipe.name);
    this.state = {
      show: false,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }

  handleClose() {
    if (this.state.show) {
      this.setState({
        show: false,
      });
    }
  }
  handleShow() {
    this.setState({
      show: true,
    });
  }
  deleteRecipe() {
    this.props.deleteRecipe(this.props.index);
    if (this.state.show) {
      this.setState({
        show: false,
      });
    }
  }
  render() {
    let ingredientList = this.props.recipe.ingredientList;
    let ingredientListDisplay = ingredientList.map(
      (singleIngredient, index) => (
        <li key={index}>{singleIngredient.ingredient}</li>
      )
    );

    let instructionsList = this.props.recipe.instructionsList;
    let instructionsListDisplay = instructionsList.map(
      (singleInstruction, index) => (
        <li key={index}>{singleInstruction.instruction}</li>
      )
    );
    return (
      <Container>
        <Button variant="primary" onClick={this.handleShow}>
          To flavourtown
        </Button>

        <Modal
          className="my-modal"
          show={this.state.show}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          bg="primary"
          // Unable to style backdrop successfully

          backdropClassName="modal-backdrop"
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.recipe.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Image
                  rounded
                  src={this.props.recipe["image"]}
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    padding: "5px",
                    width: "400px",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                ></Image>
              </Row>
              <Row>
                <h5>Description</h5>
              </Row>
              <Row>
                <p>{this.props.recipe.description}</p>
              </Row>
              <Row>
                <h5>Ingredients</h5>
                <ul style={{ marginLeft: "7px" }}>{ingredientListDisplay}</ul>
              </Row>
              <Row>
                <h5>Instructions</h5>
                <ol style={{ marginLeft: "11px" }}>
                  {instructionsListDisplay}
                </ol>
              </Row>
              <Row>
                <h6>
                  Check it out{" "}
                  <a
                    href={this.props.recipe.source}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    here
                  </a>
                </h6>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <EditRecipe
              recipe={this.props.recipe}
              updateRecipe={this.props.updateRecipe}
              index={this.props.index}
            />
            <Button variant="danger" onClick={this.deleteRecipe}>
              Delete Recipe
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}
