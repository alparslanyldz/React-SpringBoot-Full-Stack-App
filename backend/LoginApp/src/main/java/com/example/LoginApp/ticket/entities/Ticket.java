package com.example.LoginApp.ticket.entities;



import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.CreatedDate;

import com.example.LoginApp.ticket.enums.Status;
import com.example.LoginApp.ticket.enums.priorityLevel;

import lombok.Data;

@Entity
@Table(name = "ticket")
@Data
public class Ticket {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(nullable = false, length = 256)
	private String creatorname;

	
	@CreatedDate
	private Date createddate;

	@Column(nullable = false, length = 256)
	private String topic;

	@NotNull
	@Enumerated(EnumType.ORDINAL)
	@Size(min = 0, max = 2)
	@Column(nullable = false, columnDefinition = "INT")
	private priorityLevel prioritylevel;

	@NotNull
	@Enumerated(EnumType.ORDINAL)
	@Column(nullable = false, columnDefinition = "TINYINT")
	private Status status;

	@Column(nullable = false, columnDefinition = "TEXT")
	private String detail;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTopic() {
		return topic;
	}

	public void setTopic(String topic) {
		this.topic = topic;
	}

	public priorityLevel getPrioritylevel() {
		return prioritylevel;
	}

	public void setPrioritylevel(priorityLevel prioritylevel) {
		this.prioritylevel = prioritylevel;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public String getDetail() {
		return detail;
	}

	public void setDetail(String detail) {
		this.detail = detail;
	}

	public String getCreatorname() {
		return creatorname;
	}

	public void setCreatorname(String creatorname) {
		this.creatorname = creatorname;
	}

	public Date getCreateddate() {
		return createddate;
	}

	public void setCreateddate(Date createddate) {
		this.createddate = createddate;
	}

}