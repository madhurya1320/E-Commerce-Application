package com.e_com.productcatalog.service;

import com.e_com.productcatalog.model.Product;
import com.e_com.productcatalog.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    public final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public List<Product> getProductByCategory(Long categoryId) {
        return productRepository.findByCategoryId(categoryId);
    }
}
