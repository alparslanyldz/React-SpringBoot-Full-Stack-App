package com.example.LoginApp.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.LoginApp.user.entities.User;

public interface UserRepository extends JpaRepository<User,Long> {

}
