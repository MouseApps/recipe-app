package com.bobmalouf.recipes.util;

import java.util.List;
import java.util.NoSuchElementException;

import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.bobmalouf.recipes.model.DynamoIndexable;



public class RecipeDynamoDbClient<T extends DynamoIndexable> {

	private final AmazonDynamoDB client;
	private final DynamoDBMapper mapper;
	
	private final Class<T> type;

	public RecipeDynamoDbClient(Class<T> clazz) {
		this.client = AmazonDynamoDBClientBuilder.standard().build();
		this.mapper = new DynamoDBMapper(this.client);
		this.type = clazz;

	}
	
	public List<T> findAll() {
		return mapper.scan(this.type, new DynamoDBScanExpression());
	}

	public T findById(Object key) {
		return mapper.load(this.type, key);
	}
	
	public T create(T t) {
		mapper.save(t);
		return t;
	}
	
	public T update(final T t) throws NoSuchElementException{
		if(this.findById(t.getKey()) != null) {
			return this.create(t);
		} else {
			throw new NoSuchElementException("No item found by " + t.getKey());
		}
		
	}
	public boolean delete(Object key) {
		mapper.delete(this.findById(key));
		return true;
	}

}
