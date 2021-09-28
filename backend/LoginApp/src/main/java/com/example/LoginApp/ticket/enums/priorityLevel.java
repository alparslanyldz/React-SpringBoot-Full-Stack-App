package com.example.LoginApp.ticket.enums;

public enum priorityLevel {
	LessPrimarily(0), MediumPriority(1), Urgent(2);

	private int value;

	priorityLevel(int value) {
		this.value = value;
	}

	public int getValue() {
		return value;
	}

}
