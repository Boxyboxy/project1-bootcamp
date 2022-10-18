import React from "react";

import Card from "react-bootstrap/Card";
import { Row, Col, Container } from "react-bootstrap";
import { DisplayRecipe } from "./DisplayRecipe";

export class RecipeList extends React.Component {
  render() {
    const { recipeList, deleteRecipe, updateRecipe } = this.props;
    let recipeCards = recipeList.map((singleRecipe, index) => (
      <Col key={index}>
        <Card
          bg="primary"
          style={{ width: "20rem", height: "35rem" }}
          key={index}
          text="white"
          className="recipeCards"
        >
          <Card.Img
            variant="top"
            style={{ width: "20rem", height: "15rem" }}
            src={singleRecipe["image"]}
          />
          <Card.Body>
            <Card.Title>{singleRecipe["name"]}</Card.Title>
            <Card.Text>{singleRecipe["description"]}</Card.Text>
            {
              // Have not added functionality for edit button
            }
            <DisplayRecipe
              recipe={recipeList[index]}
              index={index}
              deleteRecipe={deleteRecipe}
              updateRecipe={updateRecipe}
            />
          </Card.Body>
        </Card>
      </Col>
    ));

    return (
      <Container>
        <Row className="g-4">{recipeCards}</Row>
      </Container>
    );
  }
}
