package com.swadeshi.app.model;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "Category")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long cat_id;

    @ManyToOne
    @JoinColumn(name = "state_id", nullable = true)
    private State state;

    @Column(name = "cat_name") // Corrected the column name
    private String catName;

    @Column
    private LocalDate add_date;

    @Column
    private LocalDate upd_date;

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Sub_category> subCategories;

	public Category(long cat_id, State state, String catName, LocalDate add_date, LocalDate upd_date,
			List<Sub_category> subCategories) {
		super();
		this.cat_id = cat_id;
		this.state = state;
		this.catName = catName;
		this.add_date = add_date;
		this.upd_date = upd_date;
		this.subCategories = subCategories;
	}

	public Category() {
		super();
		// TODO Auto-generated constructor stub
	}

	public long getCat_id() {
		return cat_id;
	}

	public void setCat_id(long cat_id) {
		this.cat_id = cat_id;
	}

	public State getState() {
		return state;
	}

	public void setState(State state) {
		this.state = state;
	}

	public String getCatName() {
		return catName;
	}

	public void setCatName(String catName) {
		this.catName = catName;
	}

	public LocalDate getAdd_date() {
		return add_date;
	}

	public void setAdd_date(LocalDate add_date) {
		this.add_date = add_date;
	}

	public LocalDate getUpd_date() {
		return upd_date;
	}

	public void setUpd_date(LocalDate upd_date) {
		this.upd_date = upd_date;
	}

	public List<Sub_category> getSubCategories() {
		return subCategories;
	}

	public void setSubCategories(List<Sub_category> subCategories) {
		this.subCategories = subCategories;
	}

    // Constructors, getters, and setters
    
}
