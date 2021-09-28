package com.example.LoginApp.user.controler;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.LoginApp.exception.ResourceNotFoundException;
import com.example.LoginApp.user.entities.User;
import com.example.LoginApp.user.repository.UserRepository;


@RestController
@RequestMapping("/api/")
@CrossOrigin("*")
public class UserController {
	@Autowired
	private UserRepository userRepository;
	
	
	@GetMapping("/users")
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	
	@PostMapping("/users")
	public User createUser(@RequestBody User user) {
		return userRepository.save(user);
	}

	
	@GetMapping("/users/{id}")
	public ResponseEntity<User> getUserById(@PathVariable Long id) {
		User user = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("user not exist with id :" + id));
		return ResponseEntity.ok(user);
	}


	@PutMapping("/users/{id}")
	public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
		User user = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));
		user.setUsername(userDetails.getUsername());
		user.setPassword(userDetails.getUsername());
		user.setEmail(userDetails.getEmail());
		user.setPhonenumber(userDetails.getPhonenumber());
		

		User updatedUser = userRepository.save(user);
		return ResponseEntity.ok(updatedUser);
	}

	
	@DeleteMapping("/users/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id) {
		User user = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("user not exist with id :" + id));

		userRepository.delete(user);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}


}

/*SERVİCE KULANMADIĞIMDAN YAZDIM KULLANMAK İSTEYENLER ALABİLİR...
public UserController(UserService userService){
	this.userService = userService;

}

@GetMapping
public List<User> getAllUser() {
	return userService.getAllUsers();

}

@PostMapping
public User creatUser(@RequestBody User newUser) {
	return userService.saveOneUser(newUser);
}

@GetMapping("/{id}")
public User getOneUser(@PathVariable Long id) {
	return userService.getOneUser(id);

}

@PutMapping("/{id}")
public User updateOneUser(@PathVariable Long id, @RequestBody User newUser) {
return userService.updateOneUser(id,newUser);
}

@DeleteMapping("/{id}")
private void deleteOneUser(@PathVariable Long id) {
	userService.deleteById(id);

}*/
