/**
 * 
 */
package com.bobmalouf.recipes.service.impl;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.bobmalouf.recipes.dbo.RecipeDBO;
import com.bobmalouf.recipes.dto.RecipeDTO;
import com.bobmalouf.recipes.service.RecipeService;
import com.bobmalouf.recipes.util.RecipeDynamoDbClient;

import ma.glasnost.orika.MapperFacade;
import ma.glasnost.orika.MapperFactory;
import ma.glasnost.orika.impl.DefaultMapperFactory;

/**
 * @author bmalouf
 *
 */
@Service
public class RecipeServiceImpl implements RecipeService {

	private final RecipeDynamoDbClient<RecipeDBO> db;
	
	private final MapperFactory mapperFactory;

	public RecipeServiceImpl() {
		this.db = new RecipeDynamoDbClient<RecipeDBO>(RecipeDBO.class);
		this.mapperFactory = new DefaultMapperFactory.Builder().build();
	}

	public List<RecipeDTO> getRecipes() {
		return this.db.findAll().stream().map(obj -> this.dboToDTO(obj))
				.collect(Collectors.toList());
	}

	public RecipeDTO getRecipe(final String idIn) throws NoSuchElementException {
		return this.dboToDTO(this.db.findById(idIn));
	}

	public RecipeDTO createRecipe(final RecipeDTO r) {
		return this.dboToDTO(this.db.create(this.dtoToDBO(r)));
	}

	public RecipeDTO updateRecipe(final RecipeDTO r) {
		return this.dboToDTO(this.db.update(this.dtoToDBO(r)));
	}

	@Override
	public boolean deleteRecipe(final String idIn) {
		return this.db.delete(idIn);
	}
	
	private RecipeDTO dboToDTO(RecipeDBO dbo) {
		MapperFacade mapper = mapperFactory.getMapperFacade();
		return mapper.map(dbo, RecipeDTO.class);
	}
	
	private RecipeDBO dtoToDBO(RecipeDTO dto) {
		MapperFacade mapper = mapperFactory.getMapperFacade();
		return mapper.map(dto, RecipeDBO.class);
	}


}
