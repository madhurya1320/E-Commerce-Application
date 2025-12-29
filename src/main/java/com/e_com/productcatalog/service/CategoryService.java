package com.e_com.productcatalog.service;

import com.e_com.productcatalog.model.Category;
import com.e_com.productcatalog.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<Category>getAllCategories() {
        return categoryRepository.findAll();
    }
}

