package com.swadeshi.app.services.auth;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.swadeshi.app.dto.SellerDTO;
import com.swadeshi.app.model.Seller;
import com.swadeshi.app.repositories.SellerRepository;

import java.util.Date;
import java.util.List;

@Service
public class SellerService {

    private final SellerRepository sellerRepository;

    @Autowired
    public SellerService(SellerRepository sellerRepository) {
        this.sellerRepository = sellerRepository;
    }

    public List<Seller> getAllSellers() {
        return sellerRepository.findAll();
    }

    public Seller getSellerById(Long id) {
        return sellerRepository.findById(id).orElse(null);
    }

    public Seller createSeller(SellerDTO sellerDTO) {
        Seller seller = convertDTOToEntity(sellerDTO);
        seller.setAddDate(new Date());
        seller.setUpdDate(new Date());
        return sellerRepository.save(seller);
    }

    public Seller updateSeller(Long id, SellerDTO sellerDTO) {
        Seller existingSeller = sellerRepository.findById(id).orElse(null);

        if (existingSeller != null) {
            BeanUtils.copyProperties(sellerDTO, existingSeller, "sId", "addDate", "updDate");
            existingSeller.setUpdDate(new Date());
            return sellerRepository.save(existingSeller);
        }

        return null; // Handle non-existing seller
    }

    public void deleteSeller(Long id) {
        sellerRepository.deleteById(id);
    }

    private Seller convertDTOToEntity(SellerDTO sellerDTO) {
        Seller seller = new Seller();
        seller.setGstNo(sellerDTO.getGstNo());
        seller.setUsername(sellerDTO.getUsername());
        seller.setPassword(sellerDTO.getPassword());
        seller.setCompanyName(sellerDTO.getCompanyName());
        seller.setOwnerName(sellerDTO.getOwnerName());
        seller.setCity(sellerDTO.getCity());
        seller.setState(sellerDTO.getState());
        seller.setPincode(sellerDTO.getPincode());
        seller.setCategory(sellerDTO.getCategory());
        seller.setAccountNo(sellerDTO.getAccountNo());
        seller.setBankName(sellerDTO.getBankName());
        seller.setIfscCode(sellerDTO.getIfscCode());
        seller.setStatus(sellerDTO.getStatus());
        return seller;
    }
}