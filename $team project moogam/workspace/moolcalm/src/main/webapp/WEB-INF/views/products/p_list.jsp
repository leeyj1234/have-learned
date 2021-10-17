<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>moolcalm</title>
</head>
<body>
	ㅎㅇ 이건 리스트임여
	<c:forEach var="item" items="${list}">
		${item}<br>
	</c:forEach>
</body>
</html>