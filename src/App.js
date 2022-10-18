import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from "react-bootstrap";
import { RecipeList } from "./Components/RecipeList";
import { HeaderHeader } from "./Components/HeaderHeader";
import { RecipeForm } from "./Components/RecipeForm";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayRecipe: false,
      displayForm: false,
      recipeList: [
        {
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
        {
          name: "Okonomiyaki",
          description:
            "Okonomiyaki is a Japanese savory pancake dish consisting of wheat flour batter and other ingredients cooked on a teppan. Common additions include cabbage, meat, and seafood, and toppings include okonomiyaki sauce, aonori, katsuobushi, Japanese mayonnaise, and pickled ginger.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Okonomiyaki_001.jpg/800px-Okonomiyaki_001.jpg",

          ingredientList: [
            { ingredient: "200ml water" },
            { ingredient: "1 teaspoon konbu dashi stock powder" },

            { ingredient: "160g plain flour" },

            { ingredient: "4 eggs" },

            { ingredient: "¼ teaspoon salt" },
            { ingredient: "¼ teaspoon sugar" },
            { ingredient: "¼ cup okonomiyaki sauce" },
            { ingredient: "1 tablespoon olive oil" },
            { ingredient: "160g thinly sliced pork" },
            {
              ingredient: "To garnish: Aonori, Bonito flakes, Pickled ginger",
            },
          ],
          instructionsList: [
            {
              instruction:
                "Dissolve the dashi powder into the water to make the dashi stock.",
            },
            {
              instruction:
                "Place the flour in a large bowl and add salt, sugar, and pour the dashi stock in to mix. Set aside.",
            },
            {
              instruction:
                "Divide the chopped cabbage, green shallots, and tenkasu into 4 small mixing bowls.",
            },
            {
              instruction:
                "Add one egg each and 1/4 of flour and dashi mixture to each bowl.",
            },
            {
              instruction: "Mix them well together with a fork.",
            },
            {
              instruction:
                "Heat cooking plate to 200 degrees and pour the cabbage mixture onto the cooking plate to spread approximately 2cm thickness.",
            },
            {
              instruction:
                "Place the thinly sliced pork and bonito flake on top of the cabbage mixture.",
            },
            {
              instruction:
                "When the edge of the okonomiyaki has become firm and cooked, flip it over with two egg flippers.",
            },
            {
              instruction: "Put the lid on and steam grill for a few minutes.",
            },
            {
              instruction:
                "Turn the okonomiyaki over one more time to check whether the meat is cooked.",
            },
            {
              instruction:
                "Brush the okonomiyaki with Okonomiyaki sauce and garnish with pickled ginger, more bonito and sprinkle aonori to serve.",
            },
          ],
          source: "https://www.chopstickchronicles.com/osaka-okonomiyaki/",
        },
        {
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
        {
          name: "Okonomiyaki",
          description:
            "Okonomiyaki is a Japanese savory pancake dish consisting of wheat flour batter and other ingredients cooked on a teppan. Common additions include cabbage, meat, and seafood, and toppings include okonomiyaki sauce, aonori, katsuobushi, Japanese mayonnaise, and pickled ginger.",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Okonomiyaki_001.jpg/800px-Okonomiyaki_001.jpg",

          ingredientList: [
            { ingredient: "200ml water" },
            { ingredient: "1 teaspoon konbu dashi stock powder" },

            { ingredient: "160g plain flour" },

            { ingredient: "4 eggs" },

            { ingredient: "¼ teaspoon salt" },
            { ingredient: "¼ teaspoon sugar" },
            { ingredient: "¼ cup okonomiyaki sauce" },
            { ingredient: "1 tablespoon olive oil" },
            { ingredient: "160g thinly sliced pork" },
            {
              ingredient: "To garnish: Aonori, Bonito flakes, Pickled ginger",
            },
          ],
          instructionsList: [
            {
              instruction:
                "Dissolve the dashi powder into the water to make the dashi stock.",
            },
            {
              instruction:
                "Place the flour in a large bowl and add salt, sugar, and pour the dashi stock in to mix. Set aside.",
            },
            {
              instruction:
                "Divide the chopped cabbage, green shallots, and tenkasu into 4 small mixing bowls.",
            },
            {
              instruction:
                "Add one egg each and 1/4 of flour and dashi mixture to each bowl.",
            },
            {
              instruction: "Mix them well together with a fork.",
            },
            {
              instruction:
                "Heat cooking plate to 200 degrees and pour the cabbage mixture onto the cooking plate to spread approximately 2cm thickness.",
            },
            {
              instruction:
                "Place the thinly sliced pork and bonito flake on top of the cabbage mixture.",
            },
            {
              instruction:
                "When the edge of the okonomiyaki has become firm and cooked, flip it over with two egg flippers.",
            },
            {
              instruction: "Put the lid on and steam grill for a few minutes.",
            },
            {
              instruction:
                "Turn the okonomiyaki over one more time to check whether the meat is cooked.",
            },
            {
              instruction:
                "Brush the okonomiyaki with Okonomiyaki sauce and garnish with pickled ginger, more bonito and sprinkle aonori to serve.",
            },
          ],
          source: "https://www.chopstickchronicles.com/osaka-okonomiyaki/",
        },
      ],
    };

    this.handleDisplayForm = this.handleDisplayForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this);
  }

  handleDisplayForm() {
    if (this.state.displayForm) {
      this.setState({
        displayForm: false,
      });
    } else {
      this.setState({
        displayForm: true,
      });
    }
  }

  submitForm(recipe) {
    console.log(recipe);
    let recipeList = [...this.state.recipeList, recipe];
    this.setState({
      displayForm: false,
      recipeList,
    });
  }

  deleteRecipe(index) {
    let recipes = this.state.recipeList.slice();
    recipes.splice(index, 1);
    this.setState({ recipeList: recipes });
  }

  updateRecipe(index, recipe) {
    let recipes = this.state.recipeList.slice();
    recipes[index] = recipe;
    this.setState({ recipeList: recipes });
  }

  render() {
    return (
      <Container
        fluid
        className="p-0 react-container "
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/food_bg.jpg"})`,
        }}
      >
        <HeaderHeader
          displayForm={this.state.displayForm}
          handleDisplayForm={this.handleDisplayForm}
        />

        {this.state.displayForm ? (
          <RecipeForm submitForm={this.submitForm}> </RecipeForm>
        ) : (
          <RecipeList
            recipeList={this.state.recipeList}
            deleteRecipe={this.deleteRecipe}
            updateRecipe={this.updateRecipe}
          />
        )}
      </Container>
    );
  }
}

/*
TODO: Finish edit feature DONE
TODO: Minor CSS tweaks
TODO: Input validation
TODO: Streamlining Edit recipe and Create recipe
TODO: Cleaning up change handlers, refactor them (DRY)
TODO: More css polish
*/
