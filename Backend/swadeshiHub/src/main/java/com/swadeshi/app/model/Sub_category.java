package com.swadeshi.app.model;


import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;


@Entity
@Table(name = "Sub_category")
public class Sub_category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Sctr_id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "cat_id", nullable = true )
    private Category category;
    
    @Column
    private String mainCategory;

	@Column
    private String Sctr_name;

    @Column
    private long ctr_id;

    @Column
    private LocalDate add_date;

    @Column
    private LocalDate Upd_date;

    public Sub_category() {}
    
    

	


	public Sub_category(long sctr_id, Category category, String mainCategory, String sctr_name, long ctr_id,
			LocalDate add_date, LocalDate upd_date) {
		super();
		this.Sctr_id = sctr_id;
		this.category = category;
		this.mainCategory = mainCategory;
		this.Sctr_name = sctr_name;
		this.ctr_id = ctr_id;
		this.add_date = add_date;
		this.Upd_date = upd_date;
	}






	public long getSctr_id() {
		return Sctr_id;
	}

	public void setSctr_id(long sctr_id) {
		Sctr_id = sctr_id;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public String getMainCategory() {
		return mainCategory;
	}

	public void setMainCategory(String mainCategory) {
		this.mainCategory = mainCategory;
	}

	public String getSctr_name() {
		return Sctr_name;
	}

	public void setSctr_name(String sctr_name) {
		Sctr_name = sctr_name;
	}

	public long getCtr_id() {
		return ctr_id;
	}

	public void setCtr_id(long ctr_id) {
		this.ctr_id = ctr_id;
	}

	public LocalDate getAdd_date() {
		return add_date;
	}

	public void setAdd_date(LocalDate add_date) {
		this.add_date = add_date;
	}

	public LocalDate getUpd_date() {
		return Upd_date;
	}

	public void setUpd_date(LocalDate upd_date) {
		Upd_date = upd_date;
	};
	

	


	

	
	
	
}

