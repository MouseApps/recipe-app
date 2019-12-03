import { HasName } from './has-name';

/**
 * recipe dto
 */
export class RecipeDTO implements HasName {

    /**
     * id of recipe
     */
    id: string;

    /**
     * name of recipe
     */
    name: string;

    /**
     * ingredients
     */
    ingredients: string[] = [];

    /**
     * directions
     */
    directions: string[] = [];

    /**
     * tags for recipe
     */
    tags: string[] = [];

    /**
     * version of recipe
     */
    version: number;

}
