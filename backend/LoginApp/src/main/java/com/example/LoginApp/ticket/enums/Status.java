package com.example.LoginApp.ticket.enums;

public enum Status {

	WaitingForAnswer(0), InTheProcess(1), Closed(2);

	private int value;

	Status(int value) {
		this.value = value;
	}

	public int getValue() {
		return value;
	}

}
