/**
 * 
 */
package com.bobmalouf.recipes.dto;

import java.util.List;


/**
 * @author bmalouf
 *
 */
public class RecipeDTO {
	
	/**
	 * @return the id
	 */
	public String getId() {
		return id;
	}
	@Override
	public String toString() {
		return "Recipe [id=" + id + ", name=" + name + ", ingredients=" + ingredients + ", directions=" + directions
				+ ", tags=" + tags + ", revision=" + version + "]";
	}
	/**
	 * @param id the id to set
	 */
	public void setId(String id) {
		this.id = id;
	}

	private String id;
	private String name;
	private List<String> ingredients;
	private List<String> directions;
	private List<String> tags;
	private Long version;
	

	/**
	 * @return the version
	 */
	public Long getVersion() {
		return version;
	}
	/**
	 * @param version the version to set
	 */
	public void setVersion(Long version) {
		this.version = version;
	}
	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}
	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the directions
	 */
	public List<String> getDirections() {
		return directions;
	}
	/**
	 * @param directions the directions to set
	 */
	public void setDirections(List<String> directions) {
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
