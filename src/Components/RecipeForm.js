import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";

export class RecipeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      image: "",
      // quantity: "", metric: "",
      ingredientList: [{ ingredient: "" }],
      instructionsList: [{ instruction: "" }],
      source: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleIngredientChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...this.state.ingredientList];
    list[index][name] = value;
    this.setState({ ingredientList: list });
  };

  handleIngredientRemove = (index) => {
    const list = [...this.state.ingredientList];
    list.splice(index, 1);
    this.setState({ ingredientList: list });
  };

  handleIngredientAdd = () => {
    const list = [...this.state.ingredientList];
    this.setState({
      ingredientList: [...list, { ingredient: "" }],
    });
  };

  handleInstructionChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...this.state.instructionsList];
    list[index][name] = value;
    this.setState({ instructionsList: list });
  };

  handleInstructionRemove = (index) => {
    const list = [...this.state.instructionsList];
    list.splice(index, 1);
    this.setState({ instructionsList: list });
  };

  handleInstructionAdd = () => {
    const list = [...this.state.instructionsList];
    this.setState({
      instructionsList: [...list, { ingredient: "" }],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(this.state);
    let recipe = this.state;
    this.props.submitForm(recipe);
  };
  render() {
    let ingredientList = this.state.ingredientList;
    let instructionsList = this.state.instructionsList;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Form.Group controlId="formBasicName">
            <Form.Label>Recipe Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name of dish"
              name="name"
              onChange={this.handleChange}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Enter a short description of dish"
              name="description"
              onChange={this.handleChange}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group controlId="formBasicImage">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter image URL"
              name="image"
              onChange={this.handleChange}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group controlId="formBasicIngredients">
            <Form.Label>Ingredient(s)</Form.Label>

            {ingredientList.map((singleIngredient, index) => (
              <Row key={index} className="ingredients">
                <Col sm={11} className="first-division">
                  <Form.Control
                    name="ingredient"
                    type="text"
                    value={singleIngredient.ingredient}
                    onChange={(e) => this.handleIngredientChange(e, index)}
                    placeholder="Enter ingredient"
                    required
                  />
                  {ingredientList.length - 1 === index &&
                    ingredientList.length < 15 && (
                      <Button
                        type="button"
                        variant="primary"
                        onClick={this.handleIngredientAdd}
                        className="add-btn"
                      >
                        <span>Add an Ingredient</span>
                      </Button>
                    )}
                </Col>
                <Col className="second-division justify-content-around">
                  {ingredientList.length !== 1 && (
                    <Button
                      variant="danger"
                      type="button"
                      onClick={() => this.handleIngredientRemove(index)}
                      className="remove-btn"
                    >
                      <span>Remove</span>
                    </Button>
                  )}
                </Col>
              </Row>
            ))}
          </Form.Group>
        </Row>

        <Form.Group controlId="formBasicInstructions">
          <Form.Label>Instructions</Form.Label>

          {instructionsList.map((singleInstruction, index) => (
            <Row key={index} className="ingredients">
              <Col sm={11} className="first-division">
                <Form.Control
                  as="textarea"
                  name="instruction"
                  type="text"
                  value={singleInstruction.instruction}
                  onChange={(e) => this.handleInstructionChange(e, index)}
                  placeholder="Enter instruction"
                  required
                />
                {instructionsList.length - 1 === index &&
                  instructionsList.length < 15 && (
                    <Button
                      type="button"
                      variant="primary"
                      onClick={this.handleInstructionAdd}
                      className="add-btn"
                    >
                      <span>Add an Instruction</span>
                    </Button>
                  )}
              </Col>
              <Col className="second-division justify-content-around">
                {instructionsList.length !== 1 && (
                  <Button
                    variant="danger"
                    type="button"
                    onClick={() => this.handleInstructionRemove(index)}
                    className="remove-btn"
                  >
                    <span>Remove</span>
                  </Button>
                )}
              </Col>
            </Row>
          ))}
        </Form.Group>
        <Row>
          <Form.Group controlId="formBasicSource">
            <Form.Label>Source</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the source URL"
              name="source"
              onChange={this.handleChange}
            />
          </Form.Group>
        </Row>
        <Button variant="success" type="submit">
          Add Recipe
        </Button>
      </Form>
    );
  }
}
