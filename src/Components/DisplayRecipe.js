import React from "react";
import { Button, Modal, Row, Container, Image } from "react-bootstrap";

export class DisplayRecipe extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.recipe.name);
    this.state = {
      recipe: {
        name: "Puttanesca",
        description:
          "Spaghetti alla puttanesca is an Italian pasta dish invented in Naples in the mid-20th century and made typically with tomatoes, olive oil, olives, anchovies, chili peppers, capers, and garlic—with vermicelli or spaghetti pasta.",
        image:
          "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/puttanesca-cfb4e42.jpg",

        ingredientList: [
          { ingredient: "Salt to taste" },
          { ingredient: "Freshly ground black pepper to taste" },

          { ingredient: "Crushed red pepper flakes to taste" },

          { ingredient: "3 tablespoons of olive oil" },

          { ingredient: "3 or more anchovy fillets" },
          { ingredient: "1 28-ounce can whole plum tomatoes" },
          { ingredient: "½ cup pitted black olives, preferably oil-cured" },
          { ingredient: "3 or more anchovy fillets" },
          { ingredient: "2 tablespoons capers" },
          { ingredient: "1 pound spaghetti or other long pasta" },
        ],
        instructionsList: [
          {
            instruction:
              "Bring pot of water to boil and salt it. Warm 2 tablespoons oil with garlic and anchovies in skillet over medium-low heat. Cook, stirring occasionally, until garlic is lightly golden.",
          },
          {
            instruction:
              "Drain tomatoes and crush with fork or hands. Add to skillet, with some salt and pepper. Raise heat to medium-high and cook, stirring occsaionally until tomatoes break down and mixture becomnes saucy, about 10 minutes. Stir in olives, capers and red pepper flakes and continue to simmer.",
          },
          {
            instruction:
              "Cook pasta, stirring occasionally, until it is tender but not mushy. Drain quickly and toss with sauce and remaining tablespoon of oil. Taste and adjust seasonings as necessary, garnish with herbs if you like, and serve.",
          },
        ],
        source: "https://cooking.nytimes.com/recipes/11583-pasta-puttanesca",
      },
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
    let ingredientListDisplay = ingredientList.map((singleIngredient) => (
      <li>{singleIngredient.ingredient}</li>
    ));

    let instructionsList = this.props.recipe.instructionsList;
    let instructionsListDisplay = instructionsList.map((singleInstruction) => (
      <li>{singleInstruction.instruction}</li>
    ));
    return (
      <Container>
        <Button variant="primary" onClick={this.handleShow}>
          To flavourtown
        </Button>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
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
                    "border-radius": "4px",
                    padding: "5px",
                    width: "400px",
                    display: "block",
                    "margin-left": "auto",
                    "margin-right": "auto",
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
                <ul style={{ "margin-left": "5px" }}>
                  {ingredientListDisplay}
                </ul>
              </Row>
              <Row>
                <h5>Instructions</h5>
                <ol style={{ "margin-left": "10px" }}>
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
            <Button variant="primary">Edit Recipe</Button>
            <Button variant="danger" onClick={this.deleteRecipe}>
              Delete Recipe
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}
