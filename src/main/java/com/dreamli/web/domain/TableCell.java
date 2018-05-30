package com.dreamli.web.domain;

public class TableCell {

	public TableCell(Format format, int row, int col, int height, int width, String text) {
		super();
		this.format = format;
		this.row = row;
		this.col = col;
		this.height = height;
		this.width = width;
		this.text = text;
	}

	@Override
	public String toString() {
		return "TableCell [format=" + format + ", row=" + row + ", col=" + col + ", height=" + height + ", width="
				+ width + ", text=" + text + "]";
	}

	public TableCell() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Format getFormat() {
		return format;
	}

	public void setFormat(Format format) {
		this.format = format;
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public int getWidth() {
		return width;
	}

	public void setWidth(int width) {
		this.width = width;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public int getRow() {
		return row;
	}

	public void setRow(int row) {
		this.row = row;
	}

	public int getCol() {
		return col;
	}

	public void setCol(int col) {
		this.col = col;
	}

	private Format format;
	private int row;
	private int col;
	private int height;
	private int width;
	private String text;
}
