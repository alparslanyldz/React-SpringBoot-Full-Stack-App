package com.example.LoginApp.ticket.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.LoginApp.ticket.entities.Ticket;



@Repository
public interface TicketRepository extends JpaRepository<Ticket, Long>{

}
