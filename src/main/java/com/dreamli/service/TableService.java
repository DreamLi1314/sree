package com.dreamli.service;

import java.util.ArrayList;
import java.util.List;

import com.dreamli.web.domain.Format;
import com.dreamli.web.domain.TableCell;
import com.dreamli.web.domain.TableModel;
import com.dreamli.web.domain.TableRow;

public class TableService implements BaseService {

	private static TableModel tableModel;
	
	static {
		Format format1 = new Format("#FFFFFF", "#000000");
		TableCell cell1 = new TableCell(format1, 0, 0, 30, 50, "DreamLi");
		TableCell cell2 = new TableCell(format1, 0, 0, 30, 50, "Hehehe");
		TableCell cell3 = new TableCell(format1, 0, 0, 30, 50, "Danyan");
		TableCell cell4 = new TableCell(format1, 0, 0, 30, 50, "KaiLe");
		List<TableCell> cols1 = new ArrayList<>();
		cols1.add(cell1);
		cols1.add(cell2);
		List<TableCell> cols2 = new ArrayList<>();
		cols2.add(cell3);
		cols2.add(cell4);
		TableRow row1 = new TableRow(format1, 0, cols1);
		TableRow row2 = new TableRow(format1, 1, cols2);
		
		List<TableRow> rows = new ArrayList<>();
		rows.add(row1);
		rows.add(row2);
		
		tableModel = new TableModel(rows, format1);
	}
	
	public TableModel getTableModel() {
		return tableModel;
	}
	
}
