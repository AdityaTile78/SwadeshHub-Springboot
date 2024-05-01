package com.swadeshi.app.services.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.swadeshi.app.dto.SellerFormDTO;
import com.swadeshi.app.model.SellerForm;
import com.swadeshi.app.repositories.SellerFormRepository;

import java.util.Date;
import java.util.List;

@Service
public class SellerFormService {

    private final SellerFormRepository sellerFormRepository;

    @Autowired
    public SellerFormService(SellerFormRepository sellerFormRepository) {
        this.sellerFormRepository = sellerFormRepository;
    }

    public List<SellerForm> getAllSellerForms() {
        return sellerFormRepository.findAll();
    }

    public SellerForm getSellerFormById(Long id) {
        return sellerFormRepository.findById(id).orElse(null);
    }

    public SellerForm createSellerForm(SellerFormDTO sellerFormDTO) {
        SellerForm sellerForm = convertDTOToEntity(sellerFormDTO);
        sellerForm.setAddDate(new Date());
        return sellerFormRepository.save(sellerForm);
    }

    public SellerForm updateSellerForm(Long id, SellerFormDTO sellerFormDTO) {
        SellerForm existingSellerForm = sellerFormRepository.findById(id).orElse(null);

        if (existingSellerForm != null) {
            // Update fields excluding primary key and add_date
            existingSellerForm.setGstNo(sellerFormDTO.getGstNo());
            existingSellerForm.setUsername(sellerFormDTO.getUsername());
            existingSellerForm.setPassword(sellerFormDTO.getPassword());
            existingSellerForm.setCompanyName(sellerFormDTO.getCompanyName());
            existingSellerForm.setOwnerName(sellerFormDTO.getOwnerName());
            existingSellerForm.setCity(sellerFormDTO.getCity());
            existingSellerForm.setState(sellerFormDTO.getState());
            existingSellerForm.setPincode(sellerFormDTO.getPincode());
            existingSellerForm.setCategory(sellerFormDTO.getCategory());
            existingSellerForm.setAccountNo(sellerFormDTO.getAccountNo());
            existingSellerForm.setBankName(sellerFormDTO.getBankName());
            existingSellerForm.setIfscCode(sellerFormDTO.getIfscCode());
            existingSellerForm.setStatus(sellerFormDTO.getStatus());

            return sellerFormRepository.save(existingSellerForm);
        }

        return null; // Handle non-existing form
    }

    public void deleteSellerForm(Long id) {
        sellerFormRepository.deleteById(id);
    }

    private SellerForm convertDTOToEntity(SellerFormDTO sellerFormDTO) {
        SellerForm sellerForm = new SellerForm();
        sellerForm.setGstNo(sellerFormDTO.getGstNo());
        sellerForm.setUsername(sellerFormDTO.getUsername());
        sellerForm.setPassword(sellerFormDTO.getPassword());
        sellerForm.setCompanyName(sellerFormDTO.getCompanyName());
        sellerForm.setOwnerName(sellerFormDTO.getOwnerName());
        sellerForm.setCity(sellerFormDTO.getCity());
        sellerForm.setState(sellerFormDTO.getState());
        sellerForm.setPincode(sellerFormDTO.getPincode());
        sellerForm.setCategory(sellerFormDTO.getCategory());
        sellerForm.setAccountNo(sellerFormDTO.getAccountNo());
        sellerForm.setBankName(sellerFormDTO.getBankName());
        sellerForm.setIfscCode(sellerFormDTO.getIfscCode());
        sellerForm.setStatus(sellerFormDTO.getStatus());
        return sellerForm;
    }
}