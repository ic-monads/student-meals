import React from "react";
import { Recipe } from "../../interfaces/recipes/Recipe";

interface RecipeProps {
    recipe: Recipe,
    onSave: () => void,
    onCancel: () => void
}

function RecipeForm(props: RecipeProps) {
    const { recipe, onSave, onCancel } = props;
}