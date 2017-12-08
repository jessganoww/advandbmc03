<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <link rel = "stylesheet" type="text/css" href="materialize/css/materialize.min.css">
        <link rel = "stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel = "stylesheet" type="text/css" href="css/home.css">
        
        <!-- JS -->
        <script type="text/javascript" src="jquery-3.2.1.min.js"></script>
        <script type="text/javascript" src="materialize/js/materialize.min.js"></script>
    </head>
    <body>
        <div id="wrapper">
            <form>
                <p>Username</p><input type="text" id="username">
                <p>Password</p><input type="password" id="password">
            </form>
            <br>
            <a class="waves-effect waves-light btn" id="btnlogin">login</a>  
            
        </div>
    </body>
</html>