package com.swadeshi.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.swadeshi.app.dto.SellerDTO;
import com.swadeshi.app.model.Seller;
import com.swadeshi.app.services.auth.SellerService;

import java.util.List;

@RestController
@RequestMapping("/api/sellers")
public class SellerController {

    private final SellerService sellerService;

    @Autowired
    public SellerController(SellerService sellerService) {
        this.sellerService = sellerService;
    }

    @GetMapping
    public List<Seller> getAllSellers() {
        return sellerService.getAllSellers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Seller> getSellerById(@PathVariable Long id) {
        Seller seller = sellerService.getSellerById(id);
       // if (seller != null) // {
            return ResponseEntity.ok(seller);
//        } else {
//            return ResponseEntity.notFound().build();
//        }
    }

    @PostMapping
    public ResponseEntity<Seller> createSeller(@RequestBody SellerDTO sellerDTO) {
        Seller createdSeller = sellerService.createSeller(sellerDTO);
        return ResponseEntity.ok(createdSeller);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Seller> updateSeller(@PathVariable Long id, @RequestBody SellerDTO sellerDTO) {
        Seller updatedSeller = sellerService.updateSeller(id, sellerDTO);
        if (updatedSeller != null) {
            return ResponseEntity.ok(updatedSeller);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSeller(@PathVariable Long id) {
        sellerService.deleteSeller(id);
        return ResponseEntity.noContent().build();
    }
}
