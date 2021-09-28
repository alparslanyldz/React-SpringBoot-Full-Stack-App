package com.example.LoginApp.ticket.controler;

import java.sql.Date;
import java.time.LocalDate;
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
import com.example.LoginApp.ticket.entities.Ticket;
import com.example.LoginApp.ticket.repository.TicketRepository;


@RestController
@RequestMapping("/api/")
@CrossOrigin("*")
public class TicketController {

	@Autowired
	private TicketRepository ticketRepository;



	@GetMapping("/tickets")
	public List<Ticket> getAllTickets() {
		return ticketRepository.findAll();
	}

	
	@PostMapping("/tickets")
	public Ticket createTicket(@RequestBody Ticket ticket) {
		return ticketRepository.save(ticket);
	}

	
	@GetMapping("/tickets/{id}")
	public ResponseEntity<Ticket> getTicketById(@PathVariable Long id) {
		Ticket ticket = ticketRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("ticket not exist with id :" + id));
		return ResponseEntity.ok(ticket);
	}


	@PutMapping("/tickets/{id}")
	public ResponseEntity<Ticket> updateTicket(@PathVariable Long id, @RequestBody Ticket ticketDetails) {
		Ticket ticket = ticketRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("ticket not exist with id :" + id));

		ticket.setCreatorname(ticketDetails.getCreatorname());
		ticket.setDetail(ticketDetails.getDetail());
		ticket.setPrioritylevel(ticketDetails.getPrioritylevel());
		// foundTicket.setStatus(newTicket.setStatus());
		ticket.setTopic(ticketDetails.getTopic());
		ticket.setStatus(ticketDetails.getStatus());
		ticket.setCreateddate(Date.valueOf(LocalDate.now()));
		

		Ticket updatedTicket = ticketRepository.save(ticket);
		return ResponseEntity.ok(updatedTicket);
	}

	
	@DeleteMapping("/tickets/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteTicket(@PathVariable Long id) {
		Ticket ticket = ticketRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Ticket not exist with id :" + id));

		ticketRepository.delete(ticket);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	
	
	/*service kullanmadan yazdım kullanmak isteyenler için kodlar buradadır....
	 * 
	 * @Autowired private TicketService ticketService;
	 * 
	 * public TicketController(TicketService ticketService) { this.ticketService =
	 * ticketService; }
	 * 
	 * @GetMapping public List<Ticket> getAllTicket() { return
	 * ticketService.getAllTickets(); }
	 * 
	 * @PostMapping public Ticket createTicket(@RequestBody Ticket newTicket) {
	 * return ticketService.saveOneTicket(newTicket); }
	 * 
	 * @GetMapping("/{id}") public Ticket getOneTicket(@PathVariable Long id) {
	 * return ticketService.getOneTicket(id); }
	 * 
	 * @PutMapping("/{id}") public Ticket updateOneTicket(@PathVariable Long
	 * id,@RequestBody Ticket newTicket) { return
	 * ticketService.updateOneTicket(id,newTicket); }
	 * 
	 * @DeleteMapping("/{id}") private void deleteOneTicket(@PathVariable Long id) {
	 * ticketService.deleteById(id); }
	 */
}
