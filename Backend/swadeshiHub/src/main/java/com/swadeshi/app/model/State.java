package com.swadeshi.app.model;


import java.sql.Blob;
import java.time.LocalDateTime;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;

import jakarta.persistence.Table;



@Entity
@Table(name = "states")
public class State {
    
  

	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

private String stateName;
    
    @Lob
    @Column(name = "state_image", columnDefinition = "MEDIUMBLOB")
    private byte[] image;
    
    private String stateDesc;
    private LocalDateTime add_date;
    
    private LocalDateTime update_date;
    
    
    
    

	public State() {}

	
	  public State(Long id, String stateName, byte[] image, String stateDesc, LocalDateTime add_date,
			LocalDateTime update_date) {
		super();
		this.id = id;
		this.stateName = stateName;
		this.image = image;
		this.stateDesc = stateDesc;
		this.add_date = add_date;
		this.update_date = update_date;
	}
	  


	public String getStateDesc() {
		return stateDesc;
	}


	public void setStateDesc(String stateDesc) {
		this.stateDesc = stateDesc;
	}


	public byte[] getImage() {
			return image;
		}

		public void setImage(byte[] image) {
			this.image = image;
		}

		public void setStateName(String stateName) {
			this.stateName = stateName;
		}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getStateName() {
		return stateName;
	}

	public void setState_name(String stateName) {
		this.stateName= stateName;
	}

	

	public LocalDateTime getAdd_date() {
		return add_date;
	}

	public void setAdd_date(LocalDateTime add_date) {
		this.add_date = add_date;
	}

	public LocalDateTime getUpdate_date() {
		return update_date;
	}

	public void setUpdate_date(LocalDateTime update_date) {
		this.update_date = update_date;
	}
    
    

}
