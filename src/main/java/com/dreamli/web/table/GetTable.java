package com.dreamli.web.table;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.alibaba.fastjson.JSON;
import com.dreamli.service.TableService;
import com.dreamli.web.domain.TableModel;

@WebServlet({"/table/getModel"})
public class GetTable extends HttpServlet {
	private static final long serialVersionUID = 1L;

	private TableService tableService = new TableService();

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//禁用缓存，确保网页信息是最新数据  
        response.setHeader("Pragma","No-cache");      
        response.setHeader("Cache-Control","no-cache");      
        response.setDateHeader("Expires", -10);  
        
		TableModel tableModel = tableService.getTableModel();
		response.getWriter().write(JSON.toJSONString(tableModel));
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
