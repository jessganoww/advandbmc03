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
		    var tableDataA = document.createElement("td");
		    var anchorActions = document.createElement("a");
//		    <a class='navButtons dropdown-button btn' id = 'addButton'></a>    
		    
		    $(tableDataCK).addClass("tableData center-align");
		    $(tableDataCN).addClass("tableData center-align");
		    $(tableDataD).addClass("tableData center-align");
		    $(tableDataR).addClass("tableData center-align");
		    $(tableDataSN).addClass("tableData center-align");
		    $(tableDataYC).addClass("tableData center-align");
		    $(tableDataA).addClass("tableData center-align");
		    $(anchorActions).addClass('modal-trigger');
		    

		    tableDataCK.innerText  = snap.child("CountryKey").val();
		    tableDataCN.innerText  = snap.child("CountryName").val();
		    tableDataD.innerText   = snap.child("Data").val();
		    tableDataR.innerText   = snap.child("Region").val();
		    tableDataSN.innerText  = snap.child("SeriesName").val();
		    tableDataYC.innerText  = snap.child("YearC").val();
		    
		    anchorActions.innerHTML = "		<a class='modal-trigger' href = '#updateData' onClick = '(function(){"+
									  /*"				    document.getElementById(\"updateTitle\"" +
							          ").setAttribute(\"postId\", \"" + p.getPostId() + "\");" +*/ //Get key from snap.child("key") store it here
									  "   				$(\"#updateCN\").val(\"" + snap.child("CountryName").val() + "\");" +
									  "   				$(\"#updateD\").val(\"" + snap.child("Data").val() + "\");" +
									  "   				$(\"#updateSN\").val(\"" + snap.child("SeriesName").val() + "\");" +
									  "   				$(\"#updateY\").val(\"" + snap.child("YearC").val() + "\");" +
								  	  "				    return false;" +
									  "				})();return false;'>" +
									  "	<i class='material-icons editbtn'>edit</i></a>" /*Add another anchor button (Delete)*/;

		    tableDataA.append(anchorActions);
		    tableRow.append(tableDataCK);
			tableRow.append(tableDataCN);
			tableRow.append(tableDataD);
			tableRow.append(tableDataR);
			tableRow.append(tableDataSN);
			tableRow.append(tableDataYC);
			tableRow.append(tableDataA);
			
			searchFeed.append(tableRow);	
    	});
			

  };
  
  
	$("document").ready(function() {
	loadData();

	  $("#transactNewDataButton").click(function() {
				
		var countryName = document.getElementById('newCN').value;
		var data = document.getElementById('newD').value;
		var seriesName = document.getElementById('newSN').value;
		var year = document.getElementById('newY').value;
		
		// A post entry.
		var newData = {
			CountryName: countryName,
			Data: data,
			SeriesName: seriesName,
			YearC: year
		};
		
		// Get a key for a new Post.
		var newPostKey = dbRef.push().key;
		
		// Write the new post's data simultaneously in the posts list and the user's post list.
		var updates = {};
		updates[newPostKey] = newData;
		
		if(dbRef.update(updates))
			 console.log("Added a new data!");
		else console.log("Error: Unable to add a new data!");
	  })
	  
	  $("#transactUpdateDataButton").click(function() {
				
		var countryName = document.getElementById('updateCN').value;
		var data = document.getElementById('updateD').value;
		var seriesName = document.getElementById('updateSN').value;
		var year = document.getElementById('updateY').value;
		
		dbRef.child(0).child("CountryKey").set(1);
		
	  })
  });