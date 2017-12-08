  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAbtwYMPjgQFHknOnMszcekupyisYX1JmA",
    authDomain: "advandb-5532d.firebaseapp.com",
    databaseURL: "https://advandb-5532d.firebaseio.com",
    projectId: "advandb-5532d",
    storageBucket: "advandb-5532d.appspot.com",
    messagingSenderId: "274266367112"
  };
  firebase.initializeApp(config);
  
  // Get a reference to the database service
  var dbRef = firebase.database().ref();
  
/********************************************/
  
  function loadData(studentName, collegeVal){
		
		var searchFeed = document.getElementById("tableDetails");

    	while (searchFeed.firstChild) 
    		searchFeed.removeChild(searchFeed.firstChild);
    	
    	dbRef.on("child_added", snap => {

		    var tableRow = document.createElement("tr");
		    var tableDataCK = document.createElement("td");
		    var tableDataCN = document.createElement("td");
		    var tableDataD = document.createElement("td");
		    var tableDataR = document.createElement("td");
		    var tableDataSN = document.createElement("td");
		    var tableDataYC = document.createElement("td");
		    
		    $(tableDataCK).addClass("tableData center-align");
		    $(tableDataCN).addClass("tableData center-align");
		    $(tableDataD).addClass("tableData center-align");
		    $(tableDataR).addClass("tableData center-align");
		    $(tableDataSN).addClass("tableData center-align");
		    $(tableDataYC).addClass("tableData center-align");
		    

		    tableDataCK.innerText  = snap.child("CountryKey").val();
		    tableDataCN.innerText  = snap.child("CountryName").val();
		    tableDataD.innerText   = snap.child("Data").val();
		    tableDataR.innerText   = snap.child("Region").val();
		    tableDataSN.innerText  = snap.child("SeriesName").val();
		    tableDataYC.innerText  = snap.child("YearC").val();

		    tableRow.append(tableDataCK);
			tableRow.append(tableDataCN);
			tableRow.append(tableDataD);
			tableRow.append(tableDataR);
			tableRow.append(tableDataSN);
			tableRow.append(tableDataYC);
			
			searchFeed.append(tableRow);	
    	});
			

  };
  
  
  $("document").ready(function() {
	  loadData();
//	  dbRef.child(0).child("CountryKey").set(1);
  });