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

      if (!(navigator.onLine)) {
          $("#offlinemode").show();
      }
		
		var searchFeed = document.getElementById("tableDetails");

    	while (searchFeed.secondChild) 
    		searchFeed.removeChild(searchFeed.secondChild);
    	
    	var loggedInUser   =  sessionStorage.getItem("loggedUser");    

		dbRef.on("child_added", snap => {

			// Filter here
			if(loggedInUser == "admin"  || (loggedInUser== "user1" && 
		       snap.child("Region").val().indexOf("Europe & Central Asia") != -1 )||
		       (loggedInUser == "user2" && snap.child("Region").val().indexOf("Sub-Saharan Africa") != -1 )){
					
				    var tableRow = document.createElement("tr");
				    var tableDataCN = document.createElement("td");
				    var tableDataD = document.createElement("td");
				    var tableDataR = document.createElement("td");
				    var tableDataSN = document.createElement("td");
				    var tableDataA = document.createElement("td");
				    var anchorEdit = document.createElement("a");  
				    var anchorRemove = document.createElement("a");  
				    
				    $(tableDataCN).addClass("tableData center-align");
				    $(tableDataD).addClass("tableData center-align");
				    $(tableDataR).addClass("tableData center-align");
				    $(tableDataSN).addClass("tableData center-align");
				    $(tableDataA).addClass("tableData center-align");
				    $(anchorEdit).addClass('modal-trigger');
				    $(anchorRemove).addClass('modal-trigger');
		
					tableRow.id    = "tableRow"    + snap.key;
				    tableDataCN.id = "tableDataCN" + snap.key;
					tableDataD.id  = "tableDataD"  + snap.key;
					tableDataSN.id = "tableDataSN" + snap.key;
					
				    tableDataCN.innerText  = snap.child("CountryName").val();
				    tableDataD.innerText   = snap.child("Data").val();
				    tableDataR.innerText   = snap.child("Region").val();
				    tableDataSN.innerText  = snap.child("SeriesName").val();
				    
				    anchorEdit.innerHTML = "		<a class='modal-trigger' href = '#updateData' onClick = '(function(){"+
											  "				    document.getElementById(\"updateData\"" +
									          ").setAttribute(\"dataId\", \"" + snap.key + "\");" +
											  "   				$(\"#updateCN\").val(\"" + snap.child("CountryName").val() + "\");" +
											  "   				$(\"#updateD\").val(\"" + snap.child("Data").val() + "\");" +
											  "   				$(\"#updateR\").val(\"" + snap.child("Region").val() + "\");" +
											  "   				$(\"#updateSN\").val(\"" + snap.child("SeriesName").val() + "\");" +
											  (loggedInUser == "user1" || loggedInUser == "user2" ? 
													  "document.getElementById(\"updateR\").disabled = true;" :
													  "document.getElementById(\"updateR\").disabled = false;") +
										  	  "				    return false;" +
											  "				})();return false;'>" +
											  "	<i class='material-icons editbtn'>edit</i></a>";
				    anchorRemove.innerHTML =  "<a class='modal-trigger'><i class='material-icons rmvbtn'>remove</i></a>";
				    
				    tableDataA.append(anchorEdit);
				    tableDataA.append(anchorRemove);
					tableRow.append(tableDataCN);
					tableRow.append(tableDataD);
					tableRow.append(tableDataR);
					tableRow.append(tableDataSN);
					tableRow.append(tableDataA);
					
					$(searchFeed).prepend(tableRow);
					
					anchorRemove.onclick = function(){
						  dbRef.child(snap.key).remove();
					}
				
			}
    	});
			
	    	dbRef.on('child_changed', function(data) {
	    		  document.getElementById("tableDataCN"+data.key).innerText = data.child("CountryName").val();
	    		  document.getElementById("tableDataD"+data.key).innerText = data.child("Data").val();
	    		  document.getElementById("tableDataSN"+data.key).innerText = data.child("SeriesName").val();
			});
	
	    	dbRef.on('child_removed', function(data) {
	    		$("#tableRow"+data.key).remove();
			});
  };
  
  
	$("document").ready(function() {
	    $('.modal').modal();
	    
	    var loggedInUser   =  sessionStorage.getItem("loggedUser");    


	    if(loggedInUser == null || loggedInUser != "admin" && 
	       loggedInUser != "user1" && loggedInUser != "user2"){
	    	sessionStorage.removeItem("loggedUser");
	    	document.location.href = 'Home.html';
	    }
	    loadData();


	    $("#addButton").click(function() {
		    if(loggedInUser == "user1" || loggedInUser == "user2"){ 
		    	document.getElementById("newR").disabled = true;
				$("#newR").val(loggedInUser == "user1" ? 
											   "Europe & Central Asia" :
											   "Sub-Saharan Africa");
		    } else {
		    	document.getElementById("newR").disabled = false;
			    $("#newR").val("");
		    }

		    $("#newCN").val("");
		    $("#newD").val("");
		    $("#newSN").val("");
		    $('#newData').modal('open');
	    })
  
					  
	    $("#transactNewDataButton").click(function() {
				
			var countryName = document.getElementById('newCN').value;
			var data = document.getElementById('newD').value;
			var region = document.getElementById('newR').value;
			var seriesName = document.getElementById('newSN').value;
			
			// A post entry.
			var newData = {
				CountryName: countryName,
				Data: data,
				Region: region, 
				SeriesName: seriesName
			};
			
			// Get a key for a new Post.
			var newPostKey = dbRef.push().key;
			
			// Write the new post's data simultaneously in the posts list and the user's post list.
			var updates = {};
			updates[newPostKey] = newData;
			
			if(dbRef.update(updates))
				 console.log("Added a new data!");
			else console.log("Error: Unable to add a new data!");
			
			$('.modal-overlay').trigger('click');
	  })
	  
	  $("#transactUpdateDataButton").click(function() {

	    var dataId   = document.getElementById('updateData').getAttribute("dataId");
		var countryName = document.getElementById('updateCN').value;
		var seriesName = document.getElementById('updateSN').value;
		var region = document.getElementById('updateR').value;
		var data = document.getElementById('updateD').value;

		dbRef.child(dataId).child("CountryName").set(countryName);
		dbRef.child(dataId).child("SeriesName").set(seriesName);
		dbRef.child(dataId).child("Data").set(data);
		dbRef.child(dataId).child("Region").set(region);

    	$('.modal-overlay').trigger('click');
	  })
	  

	    $("#logoutButton").click(function(event){
	    	sessionStorage.removeItem("loggedUser");
	        window.location.href = "home.html";
	    });
  });