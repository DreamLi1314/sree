package com.dreamli.web.domain;

import java.util.List;

public class TableModel extends ObjectModel {

	public TableModel() {
		super();
		this.assemblyType = "Table";
	}

	public TableModel(List<TableRow> rows, Format format) {
		this();
		this.rows = rows;
		this.format = format;
	}

	public List<TableRow> getRows() {
		return rows;
	}

	public void setRows(List<TableRow> rows) {
		this.rows = rows;
	}

	public Format getFormat() {
		return format;
	}

	public void setFormat(Format format) {
		this.format = format;
	}

	private List<TableRow> rows;
	private Format format;
}
