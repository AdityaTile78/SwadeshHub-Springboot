package com.swadeshi.app.repositories;

import com.swadeshi.app.model.State;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface StateRepository extends JpaRepository<State,Long> {
 
	Optional<State> findFirstByStateName(String stateName);
}
