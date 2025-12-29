package com.e_com.productcatalog.model;

import jakarta.persistence.*;
import java.util.Set;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Category {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        private String name;

        // optional (nice to have): one category -> many products
        @OneToMany(mappedBy = "category",
                cascade = CascadeType.ALL,
                fetch = FetchType.LAZY)
        @JsonIgnoreProperties("category")
        private Set<Product> products;

        public Category() {}

        public Long getId() {
                return id;
        }

        public void setId(Long id) {
                this.id = id;
        }

        public String getName() {
                return name;
        }

        public void setName(String name) {
                this.name = name;
        }

        public Set<Product> getProducts() {
                return products;
        }

        public void setProducts(Set<Product> products) {
                this.products = products;
        }
}
