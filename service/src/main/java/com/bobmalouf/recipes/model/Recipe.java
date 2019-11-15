/**
 * 
 */
package com.bobmalouf.recipes.model;

import java.util.List;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAutoGeneratedKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBIgnore;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBVersionAttribute;
import com.fasterxml.jackson.annotation.JsonIgnore;


/**
 * @author bmalouf
 *
 */
@DynamoDBTable(tableName = "recipe")
public class Recipe implements DynamoIndexable {
	
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
	@DynamoDBHashKey
	@DynamoDBAutoGeneratedKey
	private String id;
	@DynamoDBAttribute
	private String name;
	@DynamoDBAttribute
	private List<String> ingredients;
	@DynamoDBAttribute
	private String directions;
	@DynamoDBAttribute
	private List<String> tags;
	@DynamoDBVersionAttribute
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
	@Override
	@DynamoDBIgnore
	@JsonIgnore
	public Object getKey() {
		return this.getId();
	}


}
