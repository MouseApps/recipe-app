/**
 * 
 */
package com.bobmalouf.recipes.model;

import com.google.cloud.firestore.annotation.DocumentId;
import org.springframework.cloud.gcp.data.firestore.Document;

import java.util.List;

/**
 * @author bmalouf
 *
 */
@Document(collectionName = "recipes")
public class Recipe {
	
	@DocumentId
	private String title;
	private List<String> ingredients;
	private String directions;
	private List<String> tags;
	
	@Override
	public String toString() {
		return "Recipe [title=" + title + ", ingredients=" + ingredients + ", directions=" + directions + ", tags="
				+ tags + "]";
	}
	/**
	 * @return the title
	 */
	public String getTitle() {
		return title;
	}
	/**
	 * @param title the title to set
	 */
	public void setTitle(final String title) {
		this.title = title;
	}

	/**
	 * @return the directions
	 */
	public String getDirections() {
		return directions;
	}
	/**
	 * @param directions the directions to set
	 */
	public void setDirections(final String directions) {
		this.directions = directions;
	}
	/**
	 * @return the ingredients
	 */
	public List<String> getIngredients() {
		return ingredients;
	}
	/**
	 * @param ingredients the ingredients to set
	 */
	public void setIngredients(List<String> ingredients) {
		this.ingredients = ingredients;
	}
	/**
	 * @return the tags
	 */
	public List<String> getTags() {
		return tags;
	}
	/**
	 * @param tags the tags to set
	 */
	public void setTags(List<String> tags) {
		this.tags = tags;
	}


}
