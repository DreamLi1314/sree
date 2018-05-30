package com.dreamli.web.domain;

import java.util.List;

public class TableRow {

	public Format getFormat() {
		return format;
	}

	public void setFormat(Format format) {
		this.format = format;
	}

	public int getRow() {
		return row;
	}

	public void setRow(int row) {
		this.row = row;
	}

	public List<TableCell> getCols() {
		return cols;
	}

	public void setCols(List<TableCell> cols) {
		this.cols = cols;
	}

	@Override
	public String toString() {
		return "TableRow [format=" + format + ", row=" + row + ", cols=" + cols + "]";
	}

	public TableRow(Format format, int row, List<TableCell> cols) {
		super();
		this.format = format;
		this.row = row;
		this.cols = cols;
	}

	public TableRow() {
		super();
		// TODO Auto-generated constructor stub
	}

	private Format format;
	private int row;
	private List<TableCell> cols;
}
