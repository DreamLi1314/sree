package com.dreamli.web.domain;

public class Format {

	public String getTextColor() {
		return textColor;
	}

	@Override
	public String toString() {
		return "Format [textColor=" + textColor + ", backgroundColor=" + backgroundColor + "]";
	}

	public Format() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Format(String textColor, String backgroundColor) {
		super();
		this.textColor = textColor;
		this.backgroundColor = backgroundColor;
	}

	public void setTextColor(String textColor) {
		this.textColor = textColor;
	}

	public String getBackgroundColor() {
		return backgroundColor;
	}

	public void setBackgroundColor(String backgroundColor) {
		this.backgroundColor = backgroundColor;
	}

	private String textColor;
	private String backgroundColor;
}
