
package com.example.deployapp.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins="*")
public class HelloController {

 @GetMapping("/message")
 public String message(){
  return "Backend API is running successfully!";
 }

}
