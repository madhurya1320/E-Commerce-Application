package com.e_com.productcatalog.config;

import com.e_com.productcatalog.model.Category;
import com.e_com.productcatalog.model.Product;
import com.e_com.productcatalog.repository.CategoryRepository;
import com.e_com.productcatalog.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class DataSeeder implements CommandLineRunner {
    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    public DataSeeder(ProductRepository productRepository, CategoryRepository categoryRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        productRepository.deleteAll();
        categoryRepository.deleteAll();

        Category electronics = new Category();
        electronics.setName("Electronics");

        Category clothing = new Category();
        clothing.setName("Clothing");

        Category home = new Category();
        home.setName("Home and Kitchen");

        categoryRepository.saveAll(Arrays.asList(electronics, clothing, home));

        Product phone = new Product();
        phone.setName("iPhone 17 Pro");
        phone.setDescription("Latest Apple smartphone with great camera.");
        phone.setPrice(699.99);
        phone.setImageUrl("https://images.unsplash.com/photo-1727013884184-b313982327f3?auto=format&fit=crop&w=600&h=400&q=80");
        phone.setCategory(electronics);

        Product laptop = new Product();
        laptop.setName("MacBook Pro 15");
        laptop.setDescription("Latest Apple MacBook Pro with great camera and Performance.");
        laptop.setPrice(1099.99);
        laptop.setImageUrl("https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&h=400&q=80");
        laptop.setCategory(electronics);

        Product jacket = new Product();
        jacket.setName("Winter Jacket");
        jacket.setDescription("Latest Winter Jacket.");
        jacket.setPrice(10.99);
        jacket.setImageUrl("https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&h=400&q=80");
        jacket.setCategory(clothing);

        Product Blender = new Product();
        Blender.setName("Blender");
        Blender.setDescription("Latest Blender.");
        Blender.setPrice(30.99);
        Blender.setImageUrl("https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=600&h=400&q=80");
        Blender.setCategory(home);


        productRepository.saveAll(Arrays.asList(phone, laptop, jacket, Blender));
    }
}
