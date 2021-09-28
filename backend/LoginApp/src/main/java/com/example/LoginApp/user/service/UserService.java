package com.example.LoginApp.user.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.LoginApp.user.entities.User;
import com.example.LoginApp.user.repository.UserRepository;

@Service
public class UserService {
	private UserRepository userRepository;

	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;

	}

	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	public User saveOneUser(User newUser) {
		return userRepository.save(newUser);
	}

	public User getOneUser(Long id) {
		return userRepository.findById(id).orElse(null);
	}

	public User updateOneUser(Long id, User newUser) {
		Optional<User> user = userRepository.findById(id);
		if (user.isPresent()) {
			User foundUser = user.get();
			foundUser.setUsername(newUser.getUsername());
			foundUser.setPassword(newUser.getPassword());
			foundUser.setPhonenumber(newUser.getPhonenumber());
			foundUser.setEmail(newUser.getEmail());
			foundUser.setUsername(newUser.getUsername());
			userRepository.save(foundUser);
			return foundUser;

		} else
			return null;
	}

	public void deleteById(Long id) {
		userRepository.deleteById(id);
	}

}
