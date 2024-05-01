package com.swadeshi.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import com.swadeshi.app.dto.PaymentRequestDTO;
import com.swadeshi.app.model.Order;
import com.swadeshi.app.model.Product;
import com.swadeshi.app.services.auth.OrderService;
import com.swadeshi.app.services.auth.ProductService;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import javax.print.attribute.standard.DateTimeAtCompleted;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderService orderService;
    @Autowired
    private ProductService productService;
    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long id) {
        Order order = orderService.getOrderById(id);
        if (order != null) {
            return ResponseEntity.ok(order);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping
    public ResponseEntity<?> createOrder(@RequestBody PaymentRequestDTO order) {

        // Order with payment ID does not exist, create a new order
        Optional<Product> productOptional = productService.getProductById(order.getProductId());
        if (productOptional.isPresent()) {
            Product product = productOptional.get();

            // Check if there are enough products in stock
            if (product.getQuantity() >= 1) {
                // Reduce the product quantity by 1
                product.setQuantity(product.getQuantity() - 1);

                // Update the product in the database
                productService.updateProduct(product.getId(),product);

                Order newOrder = new Order();
                newOrder.setProduct(product);
                newOrder.setSellerId(product.getSellerId());
                newOrder.setUserId(order.getUserId());
                newOrder.setMobile(order.getMobile());
                newOrder.setEmail(order.getEmail());
                newOrder.setAddress(order.getAddress());
                newOrder.setCity(order.getCity());
                newOrder.setFirstName(order.getFirstName());
                newOrder.setLastName(order.getLastName());
                newOrder.setOrderDate(LocalDateTime.now());
                newOrder.setPaymentId(order.getPaymentId());
                newOrder.setPaymentMode(order.getPaymentMode());
                newOrder.setPincode(order.getPincode());
                newOrder.setTotalAmount(order.getTotalAmount());
                newOrder.setQuantity(1);
                newOrder.setOrderStatus("Ordered");

                try {
                    Order createdOrder = orderService.createOrder(newOrder);
                    if (createdOrder != null) {
                        return ResponseEntity.ok(createdOrder);
                    } else {
                        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to create order");
                    }
                } catch (Exception e) {
                    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to create order: " + e.getMessage());
                }
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Not enough products in stock");
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product not found");
        }
    }



//    @PutMapping("/updateOrder")
//    public ResponseEntity<Order> updateOrder(@RequestBody Order updatedOrder ,
//    		 @RequestParam(name = "id") Long id ,
//             @RequestParam(name = "orderStatus") String orderStatus) {
//    		if(orderStatus == "Shipped") {
//    			updatedOrder.setShippedDate(LocalDateTime.now());
//    		}
//    		if(orderStatus == "Delivered") {
//    			updatedOrder.setDeliveredDate(LocalDateTime.now());
//    		}
//        Order result = orderService.updateOrder(id, updatedOrder);
//        
//        if (result != null) {
//            return ResponseEntity.ok(result);
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }

    @PutMapping("/updateOrder")
    public ResponseEntity<Order> updateOrder(
            @RequestParam(name = "id") Long id,
            @RequestParam(name = "orderStatus") String orderStatus) {
        // Retrieve the existing order from the database
        Optional<Order> optionalOrder = orderService.getOrderByOrderId(id);
        
        if (optionalOrder.isPresent()) {
            Order existingOrder = optionalOrder.get();
            
            // Update 'orderStatus'
            existingOrder.setOrderStatus(orderStatus);
            
            // Update 'shippedDate' if the order is shipped
            if ("Shipped".equals(orderStatus)) {
                existingOrder.setShippedDate(LocalDateTime.now());
            }
            if ("Delivered".equals(orderStatus)) {
                existingOrder.setDeliveredDate(LocalDateTime.now());
            }
            // Save the updated order
            Order updatedOrder = orderService.updateOrder(id,existingOrder);
            
            return ResponseEntity.ok(updatedOrder);
        } else {
            // If order with the given id doesn't exist, return 404 Not Found
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Long id) {
        orderService.deleteOrder(id);
        return ResponseEntity.noContent().build();
    }
    
    @GetMapping("/orderByUserIdAndorderStatus")
    public List<Order> getUserOrders(
            @RequestParam(name = "userId") Long userId ,
            @RequestParam(name = "orderStatus") String orderStatus)
    {
        return orderService.getAllOrdersByUserIdAndOrderStatus(userId, orderStatus);
    }
    
    @GetMapping("/orderBySellerIdAndorderStatus")
    public List<Order> getSellerOrders(
            @RequestParam(name = "sellerId") String sellerId ,
            @RequestParam(name = "orderStatus") String orderStatus)
    {
        return orderService.getAllOrdersBySellerIdAndOrderStatus(sellerId, orderStatus);
    }
    
    @GetMapping("/orderByUserId")
    public List<Order> getOrdersForUser(
            @RequestParam(name = "userId") Long userId)
    {
        return orderService.getNotDeliveredOrdersByUserId(userId);
    }
    
    @GetMapping("/orderBySellerId")
    public List<Order> getOrdersForSeller(
            @RequestParam(name = "sellerId") String sellerId)
    {
        return orderService.getAllOrdersBySellerId(sellerId);
    }
    
    @GetMapping("/notDelivered/{id}")
    public ResponseEntity<List<Order>> getNotDeliveredOrdersByUserId(@RequestParam Long userId) {
        List<Order> notDeliveredOrders = orderService.getNotDeliveredOrdersByUserId(userId);
        return new ResponseEntity<>(notDeliveredOrders, HttpStatus.OK);
    }
}