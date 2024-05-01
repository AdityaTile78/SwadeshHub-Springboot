package com.swadeshi.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.swadeshi.app.dto.SellerFormDTO;
import com.swadeshi.app.model.SellerForm;
import com.swadeshi.app.services.auth.SellerFormService;

import java.util.List;

@RestController
@RequestMapping("/api/seller-forms")
public class SellerFormController {

    private final SellerFormService sellerFormService;

    @Autowired
    public SellerFormController(SellerFormService sellerFormService) {
        this.sellerFormService = sellerFormService;
    }

    @GetMapping
    public List<SellerForm> getAllSellerForms() {
        return sellerFormService.getAllSellerForms();
    }

    @GetMapping("/{id}")
    public ResponseEntity<SellerForm> getSellerFormById(@PathVariable Long id) {
        SellerForm sellerForm = sellerFormService.getSellerFormById(id);
        if (sellerForm != null) {
            return ResponseEntity.ok(sellerForm);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<SellerForm> createSellerForm(@RequestBody SellerFormDTO sellerFormDTO) {
        SellerForm createdSellerForm = sellerFormService.createSellerForm(sellerFormDTO);
        return ResponseEntity.ok(createdSellerForm);
    }

    @PutMapping("/{id}")
    public ResponseEntity<SellerForm> updateSellerForm(@PathVariable Long id, @RequestBody SellerFormDTO sellerFormDTO) {
        SellerForm updatedSellerForm = sellerFormService.updateSellerForm(id, sellerFormDTO);
        if (updatedSellerForm != null) {
            return ResponseEntity.ok(updatedSellerForm);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSellerForm(@PathVariable Long id) {
        sellerFormService.deleteSellerForm(id);
        return ResponseEntity.noContent().build();
    }
}