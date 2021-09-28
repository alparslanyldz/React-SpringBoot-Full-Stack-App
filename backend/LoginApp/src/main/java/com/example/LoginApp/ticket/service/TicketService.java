package com.example.LoginApp.ticket.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.LoginApp.ticket.entities.Ticket;
import com.example.LoginApp.ticket.repository.TicketRepository;

@Service
public class TicketService {
	private TicketRepository ticketRepository;

	public TicketService(TicketRepository ticketrepository) {
		this.ticketRepository = ticketrepository;
	}

	public List<Ticket> getAllTickets() {

		return ticketRepository.findAll();
	}

	public Ticket saveOneTicket(Ticket newTicket) {
		return ticketRepository.save(newTicket);
	}

	public Ticket getOneTicket(Long id) {
		
		return ticketRepository.findById(id).orElse(null);
	}

	public Ticket updateOneTicket(Long id, Ticket newTicket) {
		
		Optional<Ticket> ticket =ticketRepository.findById(id);
		if(ticket.isPresent()) {
			Ticket foundTicket=ticket.get();
			foundTicket.setCreatorname(newTicket.getCreatorname());
			foundTicket.setDetail(newTicket.getCreatorname());
			foundTicket.setPrioritylevel(newTicket.getPrioritylevel());
			//foundTicket.setStatus(newTicket.setStatus());
			foundTicket.setTopic(newTicket.getTopic());
			ticketRepository.save(foundTicket);
			return foundTicket;
		
		}else
			return null;
	}

	public void deleteById(Long id) {
		ticketRepository.deleteById(id);
		
	}

}
