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
			    var anchorEdit = document.createElement("a");  
			    var anchorRemove = document.createElement("a");  
			    
			    $(tableDataCK).addClass("tableData center-align");
			    $(tableDataCN).addClass("tableData center-align");
			    $(tableDataD).addClass("tableData center-align");
			    $(tableDataR).addClass("tableData center-align");
			    $(tableDataSN).addClass("tableData center-align");
			    $(tableDataYC).addClass("tableData center-align");
			    $(tableDataA).addClass("tableData center-align");
			    $(anchorEdit).addClass('modal-trigger');
			    $(anchorRemove).addClass('modal-trigger');

    			tableRow.id    = "tableRow"    + snap.key;
			    tableDataCN.id = "tableDataCN" + snap.key;
    			tableDataD.id  = "tableDataD"  + snap.key;
    			tableDataSN.id = "tableDataSN" + snap.key;
    			tableDataYC.id = "tableDataY"  + snap.key;
    			
			    tableDataCK.innerText  = snap.child("CountryKey").val();
			    tableDataCN.innerText  = snap.child("CountryName").val();
			    tableDataD.innerText   = snap.child("Data").val();
			    tableDataR.innerText   = snap.child("Region").val();
			    tableDataSN.innerText  = snap.child("SeriesName").val();
			    tableDataYC.innerText  = snap.child("YearC").val();
			    
			    anchorEdit.innerHTML = "		<a class='modal-trigger' href = '#updateData' onClick = '(function(){"+
										  "				    document.getElementById(\"updateData\"" +
								          ").setAttribute(\"dataId\", \"" + snap.key + "\");" +
										  "   				$(\"#updateCN\").val(\"" + snap.child("CountryName").val() + "\");" +
										  "   				$(\"#updateD\").val(\"" + snap.child("Data").val() + "\");" +
										  "   				$(\"#updateSN\").val(\"" + snap.child("SeriesName").val() + "\");" +
										  "   				$(\"#updateY\").val(\"" + snap.child("YearC").val() + "\");" +
									  	  "				    return false;" +
										  "				})();return false;'>" +
										  "	<i class='material-icons editbtn'>edit</i></a>";
			    anchorRemove.innerHTML =  "<a class='modal-trigger'><i class='material-icons rmvbtn'>remove</i></a>";
			    
			    tableDataA.append(anchorEdit);
			    tableDataA.append(anchorRemove);
			    tableRow.append(tableDataCK);
				tableRow.append(tableDataCN);
				tableRow.append(tableDataD);
				tableRow.append(tableDataR);
				tableRow.append(tableDataSN);
				tableRow.append(tableDataYC);
				tableRow.append(tableDataA);
				
				searchFeed.prepend(tableRow);
				
				anchorRemove.onclick = function(){
					  dbRef.child(snap.key).remove();
				}
	    	});
			
    	dbRef.on('child_changed', function(data) {
    		  document.getElementById("tableDataCN"+data.key).innerText = data.child("CountryName").val();
    		  document.getElementById("tableDataD"+data.key).innerText = data.child("Data").val();
    		  document.getElementById("tableDataSN"+data.key).innerText = data.child("SeriesName").val();
    		  document.getElementById("tableDataY"+data.key).innerText = data.child("YearC").val();
		});

    	dbRef.on('child_removed', function(data) {
    		$("#tableRow"+data.key).remove();
		});
  };
  
  
	$("document").ready(function() {
	    $('.modal').modal();
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

    	$('.modal-overlay').trigger('click');
	  })
	  
	  $("#transactUpdateDataButton").click(function() {

	    var dataId   = document.getElementById('updateData').getAttribute("dataId");
		var countryName = document.getElementById('updateCN').value;
		var seriesName = document.getElementById('updateSN').value;
		var data = document.getElementById('updateD').value;
		var year = document.getElementById('updateY').value;

		dbRef.child(dataId).child("CountryName").set(countryName);
		dbRef.child(dataId).child("SeriesName").set(seriesName);
		dbRef.child(dataId).child("Data").set(data);
		dbRef.child(dataId).child("YearC").set(year);

    	$('.modal-overlay').trigger('click');
	  })
  });