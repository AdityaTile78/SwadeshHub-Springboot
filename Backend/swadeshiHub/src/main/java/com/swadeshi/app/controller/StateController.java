package com.swadeshi.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.swadeshi.app.dto.StateDTO;
import com.swadeshi.app.dto.UserDTO;
import com.swadeshi.app.exceptions.UserServiceException;
import com.swadeshi.app.model.Product;
import com.swadeshi.app.model.State;
import com.swadeshi.app.model.User;
import com.swadeshi.app.services.auth.StateService;

import io.jsonwebtoken.io.IOException;

@RestController
@CrossOrigin
public class StateController {

	@Autowired
	private StateService  stateService;
	
	@PostMapping("/api/addstate")
	public StateDTO addState(@ModelAttribute State state, @RequestParam("file") MultipartFile imageFile) throws java.io.IOException {
	    try {
	        // Validate or process the State object as needed

	    	
	        // Process the image file
	        byte[] img = imageFile.getBytes();
	        state.setImage(img);

	        // Add the state
	        State createdState = stateService.addState(state);

	        // Create and return a response DTO
	        StateDTO stateDTO = new StateDTO();
	        stateDTO.setStatus(true);
	        stateDTO.setId(createdState.getId());
	        stateDTO.setMessage("State added successfully");
	        return stateDTO;
	    } catch (UserServiceException e) {
	        // Handle UserServiceException
	        StateDTO stateDTO = new StateDTO();
	        stateDTO.setStatus(false);
	        stateDTO.setMessage("Error adding state: " + e.getMessage());
	        return stateDTO;
	    } catch (IOException e) {
	        // Handle IOException
	        StateDTO stateDTO = new StateDTO();
	        stateDTO.setStatus(false);
	        stateDTO.setMessage("Error while processing image: " + e.getMessage());
	        return stateDTO;
	    }
	}

	@PostMapping("/api/updatestate")
	public StateDTO updateState(@RequestBody State state) {
		State updatedState=stateService.addState(state);
		StateDTO stateDTO = new StateDTO();
		stateDTO.setStatus(true);
		stateDTO.setId(updatedState.getId());
		stateDTO.setMessage("State Updated successfully");
		return stateDTO;
	}
	
	@GetMapping("/api/States")
	public List<State> getStates(){
		List<State> list=stateService.getAllStates();
		return list;
	}
	
	@DeleteMapping("/{stateId}")
    public StateDTO deleteSubCategory(@PathVariable int subCategoryId) {
        stateService.deleteStateById(subCategoryId);
        StateDTO stateDTO = new StateDTO();
		stateDTO.setStatus(true);
	
		stateDTO.setMessage("State Deleted successfully");
		return stateDTO;
	}
	
	  @GetMapping("/{stateId}")
	    public ResponseEntity<State> getProductById(@PathVariable Long stateId) {
	        Optional<State> state = stateService.getstateById(stateId);
	        return ResponseEntity.of(state);
	    }
	
	
}