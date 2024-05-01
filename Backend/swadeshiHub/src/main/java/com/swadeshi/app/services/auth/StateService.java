package com.swadeshi.app.services.auth;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.swadeshi.app.exceptions.UserServiceException;
import com.swadeshi.app.model.Product;
import com.swadeshi.app.model.State;
import com.swadeshi.app.model.User;
import com.swadeshi.app.repositories.StateRepository;

@Service
public class StateService {

	@Autowired
	private StateRepository  stateRepository;
	
	public State addState(State state) {
		Optional<State> isstate = stateRepository.findFirstByStateName(state.getStateName());
		if(isstate.isEmpty()) {
			state.setAdd_date(LocalDateTime.now());
	        
			state.setUpdate_date(LocalDateTime.now());
		State addedstate =stateRepository.save(state);		
		return addedstate;
	 }
		else {
			throw new UserServiceException("State already exist");
		}
		
	}
	
	public State updateSate(State state) {
		state.setUpdate_date(LocalDateTime.now());
		State updatedstate =stateRepository.save(state);		
		return updatedstate;			
	}
	
	public List<State> getAllStates(){
		List<State> list= new ArrayList<State>();
		list=stateRepository.findAll();
		
		return list;
	}
	
	// Delete a state by ID
    public void deleteStateById(long stateId) {
        stateRepository.deleteById(stateId);
        }
    
    public Optional<State> getstateById(Long id) {
        return stateRepository.findById(id);
    }

}
