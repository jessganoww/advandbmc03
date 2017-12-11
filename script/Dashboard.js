  // Initialize Firebase
	var config = {
		apiKey: "AIzaSyAbtwYMPjgQFHknOnMszcekupyisYX1JmA",
		authDomain: "advandb-5532d.firebaseapp.com",
		databaseURL: "https://advandb-5532d.firebaseio.com",
		projectId: "advandb-5532d",
		storageBucket: "advandb-5532d.appspot.com",
		messagingSenderId: "274266367112"
	};
	
	var configUser1 = {
		    apiKey: "AIzaSyB5v2jT93GmJT0yAGHfB0AhqP2ja2GDMWg",
		    authDomain: "user1-838f1.firebaseapp.com",
		    databaseURL: "https://user1-838f1.firebaseio.com",
		    projectId: "user1-838f1",
		    storageBucket: "user1-838f1.appspot.com",
		    messagingSenderId: "1044843494753"
		  };
	
	 var configUser2 = {
			    apiKey: "AIzaSyDFkaMBJtesyHOap9De6j09f9U3fI1EtWc",
			    authDomain: "user2-ba47a.firebaseapp.com",
			    databaseURL: "https://user2-ba47a.firebaseio.com",
			    projectId: "user2-ba47a",
			    storageBucket: "user2-ba47a.appspot.com",
			    messagingSenderId: "433731954990"
			  };
	var mainFirebase = firebase.initializeApp(config, "main");
	var user1Firebase = firebase.initializeApp(configUser1, "user1");
	var user2Firebase = firebase.initializeApp(configUser2, "user2");
	
	// Get a reference to the database service
	var dbRef = mainFirebase.database().ref();
	var user1Ref = user1Firebase.database().ref();
	var user2Ref = user2Firebase.database().ref();


	/********************************************/

	var json = JSON.parse("[\n" +
    " {\n" +
    "   \"CountryName\": \"Afghanistan\",\n" +
    "   \"Data\": 8249.379883,\n" +
    "   \"Region\": \"South Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Afghanistan\",\n" +
    "   \"Data\": 8334374,\n" +
    "   \"Region\": \"South Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Angola\",\n" +
    "   \"Data\": 21357.98047,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Angola\",\n" +
    "   \"Data\": 8844204,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Albania\",\n" +
    "   \"Data\": 25433.65039,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Albania\",\n" +
    "   \"Data\": 1292576,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"United Arab Emirates\",\n" +
    "   \"Data\": 93187.28125,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"United Arab Emirates\",\n" +
    "   \"Data\": 6302492,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Argentina\",\n" +
    "   \"Data\": 31734.80078,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Argentina\",\n" +
    "   \"Data\": 19540451,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Armenia\",\n" +
    "   \"Data\": 18376.18945,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Armenia\",\n" +
    "   \"Data\": 1559971,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Australia\",\n" +
    "   \"Data\": 86972.46875,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Australia\",\n" +
    "   \"Data\": 12416897,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Austria\",\n" +
    "   \"Data\": 87198.47656,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Austria\",\n" +
    "   \"Data\": 4466361,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Azerbaijan\",\n" +
    "   \"Data\": 34885.98828,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Azerbaijan\",\n" +
    "   \"Data\": 4950969,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Burundi\",\n" +
    "   \"Data\": 1778.550049,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Burundi\",\n" +
    "   \"Data\": 4952060,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Belgium\",\n" +
    "   \"Data\": 98644.17188,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Belgium\",\n" +
    "   \"Data\": 4975258,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Benin\",\n" +
    "   \"Data\": 4288.290039,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Benin\",\n" +
    "   \"Data\": 4444955,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Burkina Faso\",\n" +
    "   \"Data\": 3711.040039,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Burkina Faso\",\n" +
    "   \"Data\": 7942183,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Bangladesh\",\n" +
    "   \"Data\": 5433.240234,\n" +
    "   \"Region\": \"South Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Bangladesh\",\n" +
    "   \"Data\": 78976778,\n" +
    "   \"Region\": \"South Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Bulgaria\",\n" +
    "   \"Data\": 40287.21875,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Bulgaria\",\n" +
    "   \"Data\": 3318342,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Bahrain\",\n" +
    "   \"Data\": 82563.72656,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Bahrain\",\n" +
    "   \"Data\": 750065,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Bahamas, The\",\n" +
    "   \"Data\": 45522.67969,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Bahamas, The\",\n" +
    "   \"Data\": 223955,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Bosnia and Herzegovina\",\n" +
    "   \"Data\": 33497.35938,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Bosnia and Herzegovina\",\n" +
    "   \"Data\": 1496651,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Belarus\",\n" +
    "   \"Data\": 39153.67188,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Belarus\",\n" +
    "   \"Data\": 4489036,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Belize\",\n" +
    "   \"Data\": 20961.08008,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Belize\",\n" +
    "   \"Data\": 154602,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Bolivia\",\n" +
    "   \"Data\": 13276.20996,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Bolivia\",\n" +
    "   \"Data\": 5145858,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Brazil\",\n" +
    "   \"Data\": 29169.82031,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Brazil\",\n" +
    "   \"Data\": 109842906,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Barbados\",\n" +
    "   \"Data\": 29424.56055,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Barbados\",\n" +
    "   \"Data\": 162318,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Brunei Darussalam\",\n" +
    "   \"Data\": 156737.5938,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Brunei Darussalam\",\n" +
    "   \"Data\": 203304,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Bhutan\",\n" +
    "   \"Data\": 15188.09961,\n" +
    "   \"Region\": \"South Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Bhutan\",\n" +
    "   \"Data\": 404127,\n" +
    "   \"Region\": \"South Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Botswana\",\n" +
    "   \"Data\": 37480.80078,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Botswana\",\n" +
    "   \"Data\": 1155963,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Central African Republic\",\n" +
    "   \"Data\": 1311.969971,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Central African Republic\",\n" +
    "   \"Data\": 2291727,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Canada\",\n" +
    "   \"Data\": 82523.84375,\n" +
    "   \"Region\": \"North America\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Canada\",\n" +
    "   \"Data\": 19726591,\n" +
    "   \"Region\": \"North America\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Switzerland\",\n" +
    "   \"Data\": 93490.63281,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Switzerland\",\n" +
    "   \"Data\": 4753196,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Channel Islands\",\n" +
    "   \"Data\": 81607,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Chile\",\n" +
    "   \"Data\": 47811.23828,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Chile\",\n" +
    "   \"Data\": 8745002,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"China\",\n" +
    "   \"Data\": 21630.08008,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"China\",\n" +
    "   \"Data\": 806498521,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Cote d'Ivoire\",\n" +
    "   \"Data\": 8124.089844,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Cote d'Ivoire\",\n" +
    "   \"Data\": 8540700,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Cameroon\",\n" +
    "   \"Data\": 6973.870117,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Cameroon\",\n" +
    "   \"Data\": 9176788,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Congo, Rep.\",\n" +
    "   \"Data\": 15452.33008,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Congo, Rep.\",\n" +
    "   \"Data\": 1827861,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Colombia\",\n" +
    "   \"Data\": 28119.34961,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Colombia\",\n" +
    "   \"Data\": 12.52242,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Average working hours of children, study and work, female, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Colombia\",\n" +
    "   \"Data\": 15.25631,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Average working hours of children, study and work, male, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Colombia\",\n" +
    "   \"Data\": 14.34622,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Average working hours of children, study and work, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Colombia\",\n" +
    "   \"Data\": 18.46561,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Average working hours of children, working only, female, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Colombia\",\n" +
    "   \"Data\": 32.0232,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Average working hours of children, working only, male, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Colombia\",\n" +
    "   \"Data\": 29.18947,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Average working hours of children, working only, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Colombia\",\n" +
    "   \"Data\": 24290685,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Comoros\",\n" +
    "   \"Data\": 4883.850098,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Comoros\",\n" +
    "   \"Data\": 263991,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Cabo Verde\",\n" +
    "   \"Data\": 14157.51953,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Cabo Verde\",\n" +
    "   \"Data\": 244001,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Costa Rica\",\n" +
    "   \"Data\": 30870.91992,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Costa Rica\",\n" +
    "   \"Data\": 2316957,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Cuba\",\n" +
    "   \"Data\": 43992.32031,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Cuba\",\n" +
    "   \"Data\": 5383687,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Cyprus\",\n" +
    "   \"Data\": 45834.82031,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Cyprus\",\n" +
    "   \"Data\": 613733,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Czech Republic\",\n" +
    "   \"Data\": 55939.75,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Czech Republic\",\n" +
    "   \"Data\": 5341662,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Germany\",\n" +
    "   \"Data\": 84050.24219,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Germany\",\n" +
    "   \"Data\": 42213451,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Djibouti\",\n" +
    "   \"Data\": 307005,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Denmark\",\n" +
    "   \"Data\": 87166.90625,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Denmark\",\n" +
    "   \"Data\": 2920484,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Dominican Republic\",\n" +
    "   \"Data\": 30508.93945,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Dominican Republic\",\n" +
    "   \"Data\": 4710194,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Algeria\",\n" +
    "   \"Data\": 45664.35938,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Algeria\",\n" +
    "   \"Data\": 12355028,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Ecuador\",\n" +
    "   \"Data\": 22493.33008,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Ecuador\",\n" +
    "   \"Data\": 7720071,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Egypt, Arab Rep.\",\n" +
    "   \"Data\": 36556.53906,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Egypt, Arab Rep.\",\n" +
    "   \"Data\": 29596846,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Eritrea\",\n" +
    "   \"Data\": 2553.879883,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Spain\",\n" +
    "   \"Data\": 82548.11719,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Spain\",\n" +
    "   \"Data\": 23345028,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Estonia\",\n" +
    "   \"Data\": 53117.64844,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Estonia\",\n" +
    "   \"Data\": 687168,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Ethiopia\",\n" +
    "   \"Data\": 3007.959961,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Ethiopia\",\n" +
    "   \"Data\": 47012009,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Finland\",\n" +
    "   \"Data\": 82024.63281,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Finland\",\n" +
    "   \"Data\": 2714587,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Fiji\",\n" +
    "   \"Data\": 22002.00977,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Fiji\",\n" +
    "   \"Data\": 347161,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"France\",\n" +
    "   \"Data\": 89700.70313,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"France\",\n" +
    "   \"Data\": 30183767,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Gabon\",\n" +
    "   \"Data\": 63381.53125,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Gabon\",\n" +
    "   \"Data\": 645573,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"United Kingdom\",\n" +
    "   \"Data\": 76160.71875,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"United Kingdom\",\n" +
    "   \"Data\": 33021739,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Georgia\",\n" +
    "   \"Data\": 16292.07031,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Georgia\",\n" +
    "   \"Data\": 2017915,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Ghana\",\n" +
    "   \"Data\": 9398.830078,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Ghana\",\n" +
    "   \"Data\": 11372106,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Guinea\",\n" +
    "   \"Data\": 2961.350098,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Guinea\",\n" +
    "   \"Data\": 5060746,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Gambia, The\",\n" +
    "   \"Data\": 4299.740234,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Gambia, The\",\n" +
    "   \"Data\": 801157,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Guinea-Bissau\",\n" +
    "   \"Data\": 3001.290039,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Guinea-Bissau\",\n" +
    "   \"Data\": 780016,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Equatorial Guinea\",\n" +
    "   \"Data\": 63220.80078,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Equatorial Guinea\",\n" +
    "   \"Data\": 431124,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Greece\",\n" +
    "   \"Data\": 72823.75781,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Greece\",\n" +
    "   \"Data\": 4937216,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Guatemala\",\n" +
    "   \"Data\": 18030.15039,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Guatemala\",\n" +
    "   \"Data\": 26.94339,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Average working hours of children, study and work, female, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Guatemala\",\n" +
    "   \"Data\": 32.84649,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Average working hours of children, study and work, male, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Guatemala\",\n" +
    "   \"Data\": 31.0951,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Average working hours of children, study and work, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Guatemala\",\n" +
    "   \"Data\": 31.77454,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Average working hours of children, working only, female, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Guatemala\",\n" +
    "   \"Data\": 41.30458,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Average working hours of children, working only, male, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Guatemala\",\n" +
    "   \"Data\": 38.76818,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Average working hours of children, working only, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Guatemala\",\n" +
    "   \"Data\": 6827724,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Guam\",\n" +
    "   \"Data\": 77646,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Guyana\",\n" +
    "   \"Data\": 18515.08984,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Guyana\",\n" +
    "   \"Data\": 328686,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Hong Kong SAR, China\",\n" +
    "   \"Data\": 104616.2969,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Hong Kong SAR, China\",\n" +
    "   \"Data\": 3745415,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Honduras\",\n" +
    "   \"Data\": 11394.07031,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Honduras\",\n" +
    "   \"Data\": 15.76629,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Average working hours of children, study and work, female, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Honduras\",\n" +
    "   \"Data\": 13.60987,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Average working hours of children, study and work, male, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Honduras\",\n" +
    "   \"Data\": 14.29735,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Average working hours of children, study and work, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Honduras\",\n" +
    "   \"Data\": 37.08308,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Average working hours of children, working only, female, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Honduras\",\n" +
    "   \"Data\": 32.27877,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Average working hours of children, working only, male, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Honduras\",\n" +
    "   \"Data\": 33.24963,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Average working hours of children, working only, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Honduras\",\n" +
    "   \"Data\": 3373490,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Croatia\",\n" +
    "   \"Data\": 53601.73828,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Croatia\",\n" +
    "   \"Data\": 1845114,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Haiti\",\n" +
    "   \"Data\": 4192.220215,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Haiti\",\n" +
    "   \"Data\": 4594342,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Hungary\",\n" +
    "   \"Data\": 56301.35938,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Hungary\",\n" +
    "   \"Data\": 4384465,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Indonesia\",\n" +
    "   \"Data\": 21182.61914,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Indonesia\",\n" +
    "   \"Data\": 124061112,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"India\",\n" +
    "   \"Data\": 14681.12988,\n" +
    "   \"Region\": \"South Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"India\",\n" +
    "   \"Data\": 496960163,\n" +
    "   \"Region\": \"South Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Ireland\",\n" +
    "   \"Data\": 103879.8984,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Ireland\",\n" +
    "   \"Data\": 2185058,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Iran, Islamic Rep.\",\n" +
    "   \"Data\": 50217.37109,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Iran, Islamic Rep.\",\n" +
    "   \"Data\": 27133460,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Iraq\",\n" +
    "   \"Data\": 64320.73047,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Iraq\",\n" +
    "   \"Data\": 8801559,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Iceland\",\n" +
    "   \"Data\": 70670.90625,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Iceland\",\n" +
    "   \"Data\": 192535,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Israel\",\n" +
    "   \"Data\": 76833.85938,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Israel\",\n" +
    "   \"Data\": 3738337,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Italy\",\n" +
    "   \"Data\": 87013.04688,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Italy\",\n" +
    "   \"Data\": 25785202,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Jamaica\",\n" +
    "   \"Data\": 20895.94922,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Jamaica\",\n" +
    "   \"Data\": 1306181,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Jordan\",\n" +
    "   \"Data\": 41084.62109,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Jordan\",\n" +
    "   \"Data\": 1988636,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Japan\",\n" +
    "   \"Data\": 72523.17969,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Japan\",\n" +
    "   \"Data\": 65302348,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Kazakhstan\",\n" +
    "   \"Data\": 46768.82031,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Kazakhstan\",\n" +
    "   \"Data\": 9284810,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Kenya\",\n" +
    "   \"Data\": 6335.97998,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Kenya\",\n" +
    "   \"Data\": 17500228,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Kyrgyz Republic\",\n" +
    "   \"Data\": 7610.430176,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Kyrgyz Republic\",\n" +
    "   \"Data\": 2727997,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Cambodia\",\n" +
    "   \"Data\": 5475.600098,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Cambodia\",\n" +
    "   \"Data\": 8623857,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Korea, Rep.\",\n" +
    "   \"Data\": 68415.75781,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Korea, Rep.\",\n" +
    "   \"Data\": 26356229,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Kuwait\",\n" +
    "   \"Data\": 158302.2969,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Kuwait\",\n" +
    "   \"Data\": 1992954,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Lao PDR\",\n" +
    "   \"Data\": 9803.849609,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Lao PDR\",\n" +
    "   \"Data\": 3377525,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Lebanon\",\n" +
    "   \"Data\": 42497.58984,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Lebanon\",\n" +
    "   \"Data\": 2037245,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Liberia\",\n" +
    "   \"Data\": 2500.100098,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Liberia\",\n" +
    "   \"Data\": 1554233,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Libya\",\n" +
    "   \"Data\": 54821.28906,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Libya\",\n" +
    "   \"Data\": 2324217,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"St. Lucia\",\n" +
    "   \"Data\": 97306,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Sri Lanka\",\n" +
    "   \"Data\": 24560.93945,\n" +
    "   \"Region\": \"South Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Sri Lanka\",\n" +
    "   \"Data\": 8576325,\n" +
    "   \"Region\": \"South Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Lesotho\",\n" +
    "   \"Data\": 8256.549805,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Lesotho\",\n" +
    "   \"Data\": 889178,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Lithuania\",\n" +
    "   \"Data\": 54296.03125,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Lithuania\",\n" +
    "   \"Data\": 1537729,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Luxembourg\",\n" +
    "   \"Data\": 201747.7969,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Luxembourg\",\n" +
    "   \"Data\": 266117,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Latvia\",\n" +
    "   \"Data\": 48646.76953,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Latvia\",\n" +
    "   \"Data\": 1036589,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Macao SAR, China\",\n" +
    "   \"Data\": 231316.9063,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Macao SAR, China\",\n" +
    "   \"Data\": 360841,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Morocco\",\n" +
    "   \"Data\": 22027.83008,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Morocco\",\n" +
    "   \"Data\": 12498273,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Moldova\",\n" +
    "   \"Data\": 14229.59961,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Moldova\",\n" +
    "   \"Data\": 1236917,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Madagascar\",\n" +
    "   \"Data\": 2739.189941,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Madagascar\",\n" +
    "   \"Data\": 12077140,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Maldives\",\n" +
    "   \"Data\": 27294.49023,\n" +
    "   \"Region\": \"South Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Maldives\",\n" +
    "   \"Data\": 195149,\n" +
    "   \"Region\": \"South Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Mexico\",\n" +
    "   \"Data\": 39052.75,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Mexico\",\n" +
    "   \"Data\": 55561477,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Macedonia, FYR\",\n" +
    "   \"Data\": 37181.58984,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Macedonia, FYR\",\n" +
    "   \"Data\": 952721,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Mali\",\n" +
    "   \"Data\": 5117.27002,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Mali\",\n" +
    "   \"Data\": 5924862,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Malta\",\n" +
    "   \"Data\": 70785.65625,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Malta\",\n" +
    "   \"Data\": 189081,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Myanmar\",\n" +
    "   \"Data\": 3089.26001,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Myanmar\",\n" +
    "   \"Data\": 30217049,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Montenegro\",\n" +
    "   \"Data\": 44144.98047,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Montenegro\",\n" +
    "   \"Data\": 251741,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Mongolia\",\n" +
    "   \"Data\": 22450.34961,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Mongolia\",\n" +
    "   \"Data\": 1328054,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Mozambique\",\n" +
    "   \"Data\": 3002.679932,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Mozambique\",\n" +
    "   \"Data\": 12471084,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Mauritania\",\n" +
    "   \"Data\": 10503.78027,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Mauritania\",\n" +
    "   \"Data\": 1280621,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Mauritius\",\n" +
    "   \"Data\": 40924.25,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Mauritius\",\n" +
    "   \"Data\": 592300,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Malawi\",\n" +
    "   \"Data\": 1837.030029,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Malawi\",\n" +
    "   \"Data\": 5.236679,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Average working hours of children, study and work, female, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Malawi\",\n" +
    "   \"Data\": 5.872073,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Average working hours of children, study and work, male, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Malawi\",\n" +
    "   \"Data\": 5.571661,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Average working hours of children, study and work, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Malawi\",\n" +
    "   \"Data\": 9.07021,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Average working hours of children, working only, female, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Malawi\",\n" +
    "   \"Data\": 12.71756,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Average working hours of children, working only, male, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Malawi\",\n" +
    "   \"Data\": 11.31903,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Average working hours of children, working only, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Malawi\",\n" +
    "   \"Data\": 7571373,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Malaysia\",\n" +
    "   \"Data\": 54169.48047,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Malaysia\",\n" +
    "   \"Data\": 13300027,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Namibia\",\n" +
    "   \"Data\": 30733.53906,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Namibia\",\n" +
    "   \"Data\": 901859,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"New Caledonia\",\n" +
    "   \"Data\": 117852,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Niger\",\n" +
    "   \"Data\": 2948.600098,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Niger\",\n" +
    "   \"Data\": 6132741,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Nigeria\",\n" +
    "   \"Data\": 19511.46094,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Nigeria\",\n" +
    "   \"Data\": 55784248,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Nicaragua\",\n" +
    "   \"Data\": 11122.49023,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Nicaragua\",\n" +
    "   \"Data\": 2657353,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Netherlands\",\n" +
    "   \"Data\": 85121.46094,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Netherlands\",\n" +
    "   \"Data\": 9019299,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Norway\",\n" +
    "   \"Data\": 124554.5,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Norway\",\n" +
    "   \"Data\": 2727176,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Nepal\",\n" +
    "   \"Data\": 4228.709961,\n" +
    "   \"Region\": \"South Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Nepal\",\n" +
    "   \"Data\": 15584793,\n" +
    "   \"Region\": \"South Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"New Zealand\",\n" +
    "   \"Data\": 65439.96094,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"New Zealand\",\n" +
    "   \"Data\": 2433510,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Oman\",\n" +
    "   \"Data\": 85342.61719,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Oman\",\n" +
    "   \"Data\": 2215647,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Pakistan\",\n" +
    "   \"Data\": 13512.55957,\n" +
    "   \"Region\": \"South Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Pakistan\",\n" +
    "   \"Data\": 65361409,\n" +
    "   \"Region\": \"South Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Panama\",\n" +
    "   \"Data\": 43690.14063,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Panama\",\n" +
    "   \"Data\": 8.449981,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Average working hours of children, study and work, female, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Panama\",\n" +
    "   \"Data\": 8.986771,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Average working hours of children, study and work, male, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Panama\",\n" +
    "   \"Data\": 8.786139,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Average working hours of children, study and work, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Panama\",\n" +
    "   \"Data\": 16.94303,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Average working hours of children, working only, female, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Panama\",\n" +
    "   \"Data\": 22.68266,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Average working hours of children, working only, male, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Panama\",\n" +
    "   \"Data\": 21.2865,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Average working hours of children, working only, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Panama\",\n" +
    "   \"Data\": 1837203,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Peru\",\n" +
    "   \"Data\": 22259.07031,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Peru\",\n" +
    "   \"Data\": 16973529,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Philippines\",\n" +
    "   \"Data\": 16456.2793,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Philippines\",\n" +
    "   \"Data\": 43807158,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Papua New Guinea\",\n" +
    "   \"Data\": 5795.259766,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Papua New Guinea\",\n" +
    "   \"Data\": 3365826,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Poland\",\n" +
    "   \"Data\": 53736.69141,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Poland\",\n" +
    "   \"Data\": 18280161,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Puerto Rico\",\n" +
    "   \"Data\": 113956.2031,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Puerto Rico\",\n" +
    "   \"Data\": 1225637,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Korea, Dem. People’s Rep.\",\n" +
    "   \"Data\": 4067.449951,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Korea, Dem. People’s Rep.\",\n" +
    "   \"Data\": 15335855,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Portugal\",\n" +
    "   \"Data\": 56078.07813,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Portugal\",\n" +
    "   \"Data\": 5379280,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Paraguay\",\n" +
    "   \"Data\": 17443.85938,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Paraguay\",\n" +
    "   \"Data\": 29.24757,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Average working hours of children, study and work, female, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Paraguay\",\n" +
    "   \"Data\": 29.35977,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Average working hours of children, study and work, male, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Paraguay\",\n" +
    "   \"Data\": 29.33432,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Average working hours of children, study and work, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Paraguay\",\n" +
    "   \"Data\": 23.87527,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Average working hours of children, working only, female, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Paraguay\",\n" +
    "   \"Data\": 47.247,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Average working hours of children, working only, male, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Paraguay\",\n" +
    "   \"Data\": 43.94261,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Average working hours of children, working only, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Paraguay\",\n" +
    "   \"Data\": 3202754,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"French Polynesia\",\n" +
    "   \"Data\": 121038,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Qatar\",\n" +
    "   \"Data\": 173966.7969,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Qatar\",\n" +
    "   \"Data\": 1593886,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Romania\",\n" +
    "   \"Data\": 37818.41016,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Romania\",\n" +
    "   \"Data\": 9529932,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Russian Federation\",\n" +
    "   \"Data\": 46902.87109,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Russian Federation\",\n" +
    "   \"Data\": 76754167,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Rwanda\",\n" +
    "   \"Data\": 2937.669922,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Rwanda\",\n" +
    "   \"Data\": 5694092,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Saudi Arabia\",\n" +
    "   \"Data\": 143967.5,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Saudi Arabia\",\n" +
    "   \"Data\": 12134929,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Sudan\",\n" +
    "   \"Data\": 12190.04004,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Sudan\",\n" +
    "   \"Data\": 12474754,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Senegal\",\n" +
    "   \"Data\": 5715.450195,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Senegal\",\n" +
    "   \"Data\": 6316988,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Singapore\",\n" +
    "   \"Data\": 138814.7969,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Singapore\",\n" +
    "   \"Data\": 3110343,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Solomon Islands\",\n" +
    "   \"Data\": 5135.430176,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Solomon Islands\",\n" +
    "   \"Data\": 227975,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Sierra Leone\",\n" +
    "   \"Data\": 5162.740234,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Sierra Leone\",\n" +
    "   \"Data\": 2440884,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"El Salvador\",\n" +
    "   \"Data\": 18404.50977,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"El Salvador\",\n" +
    "   \"Data\": 2749893,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Somalia\",\n" +
    "   \"Data\": 2617.25,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Somalia\",\n" +
    "   \"Data\": 3132863,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Serbia\",\n" +
    "   \"Data\": 26573.75977,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Serbia\",\n" +
    "   \"Data\": 3.675061,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Average working hours of children, study and work, female, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Serbia\",\n" +
    "   \"Data\": 4.283582,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Average working hours of children, study and work, male, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Serbia\",\n" +
    "   \"Data\": 4.050813,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Average working hours of children, study and work, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Serbia\",\n" +
    "   \"Data\": 3132558,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Sao Tome and Principe\",\n" +
    "   \"Data\": 65384,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Suriname\",\n" +
    "   \"Data\": 42671.25,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Suriname\",\n" +
    "   \"Data\": 213762,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Slovak Republic\",\n" +
    "   \"Data\": 59745.76172,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Slovak Republic\",\n" +
    "   \"Data\": 2738420,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Slovenia\",\n" +
    "   \"Data\": 61022.01953,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Slovenia\",\n" +
    "   \"Data\": 1012624,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Sweden\",\n" +
    "   \"Data\": 87961.29688,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Sweden\",\n" +
    "   \"Data\": 5146596,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Swaziland\",\n" +
    "   \"Data\": 23255.34961,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Swaziland\",\n" +
    "   \"Data\": 457000,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Syrian Arab Republic\",\n" +
    "   \"Data\": 192559.0938,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Syrian Arab Republic\",\n" +
    "   \"Data\": 5171715,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Chad\",\n" +
    "   \"Data\": 6206.459961,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Chad\",\n" +
    "   \"Data\": 5060290,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Togo\",\n" +
    "   \"Data\": 3153.280029,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Togo\",\n" +
    "   \"Data\": 3318091,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Thailand\",\n" +
    "   \"Data\": 23853.18945,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Thailand\",\n" +
    "   \"Data\": 40055849,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Tajikistan\",\n" +
    "   \"Data\": 6465.819824,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Tajikistan\",\n" +
    "   \"Data\": 3676342,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Turkmenistan\",\n" +
    "   \"Data\": 37228.42969,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Turkmenistan\",\n" +
    "   \"Data\": 2348403,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Timor-Leste\",\n" +
    "   \"Data\": 12005.12988,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Timor-Leste\",\n" +
    "   \"Data\": 264426,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Tonga\",\n" +
    "   \"Data\": 42390,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Trinidad and Tobago\",\n" +
    "   \"Data\": 61845.41016,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Trinidad and Tobago\",\n" +
    "   \"Data\": 686710,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Tunisia\",\n" +
    "   \"Data\": 34055.85938,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Tunisia\",\n" +
    "   \"Data\": 4023313,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Turkey\",\n" +
    "   \"Data\": 56665.62109,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Turkey\",\n" +
    "   \"Data\": 28360682,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Tanzania\",\n" +
    "   \"Data\": 3639.76001,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Tanzania\",\n" +
    "   \"Data\": 13.72715,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Average working hours of children, study and work, female, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Tanzania\",\n" +
    "   \"Data\": 14.59925,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Average working hours of children, study and work, male, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Tanzania\",\n" +
    "   \"Data\": 14.17376,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Average working hours of children, study and work, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Tanzania\",\n" +
    "   \"Data\": 30.16287,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Average working hours of children, working only, female, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Tanzania\",\n" +
    "   \"Data\": 32.86476,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Average working hours of children, working only, male, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Tanzania\",\n" +
    "   \"Data\": 31.64403,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Average working hours of children, working only, ages 7-14 (hours per week)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Tanzania\",\n" +
    "   \"Data\": 25284702,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Uganda\",\n" +
    "   \"Data\": 3623.469971,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Uganda\",\n" +
    "   \"Data\": 15111603,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Ukraine\",\n" +
    "   \"Data\": 17156.7207,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Ukraine\",\n" +
    "   \"Data\": 23089480,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Uruguay\",\n" +
    "   \"Data\": 40528.98047,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Uruguay\",\n" +
    "   \"Data\": 1763727,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"United States\",\n" +
    "   \"Data\": 109314.1016,\n" +
    "   \"Region\": \"North America\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"United States\",\n" +
    "   \"Data\": 161074378,\n" +
    "   \"Region\": \"North America\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Uzbekistan\",\n" +
    "   \"Data\": 13913.58984,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Uzbekistan\",\n" +
    "   \"Data\": 13606265,\n" +
    "   \"Region\": \"Europe & Central Asia\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"St. Vincent and the Grenadines\",\n" +
    "   \"Data\": 54985,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Venezuela, RB\",\n" +
    "   \"Data\": 39440.33984,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Venezuela, RB\",\n" +
    "   \"Data\": 14304546,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Virgin Islands (U.S.)\",\n" +
    "   \"Data\": 51495,\n" +
    "   \"Region\": \"Latin America & Caribbean\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Vietnam\",\n" +
    "   \"Data\": 8914.320313,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Vietnam\",\n" +
    "   \"Data\": 54206654,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Vanuatu\",\n" +
    "   \"Data\": 115716,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"West Bank and Gaza\",\n" +
    "   \"Data\": 23558.59961,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"West Bank and Gaza\",\n" +
    "   \"Data\": 1056569,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Samoa\",\n" +
    "   \"Data\": 49879,\n" +
    "   \"Region\": \"East Asia & Pacific\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Yemen, Rep.\",\n" +
    "   \"Data\": 15608.42969,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Yemen, Rep.\",\n" +
    "   \"Data\": 7628379,\n" +
    "   \"Region\": \"Middle East & North Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"South Africa\",\n" +
    "   \"Data\": 44046.67969,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"South Africa\",\n" +
    "   \"Data\": 20001038,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Congo, Dem. Rep.\",\n" +
    "   \"Data\": 2090.23999,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Congo, Dem. Rep.\",\n" +
    "   \"Data\": 29023417,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Zambia\",\n" +
    "   \"Data\": 8622.610352,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Zambia\",\n" +
    "   \"Data\": 6720673,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Zimbabwe\",\n" +
    "   \"Data\": 3289.47998,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"GDP per person employed (constant 2011 PPP $)\"\n" +
    " },\n" +
    " {\n" +
    "   \"CountryName\": \"Zimbabwe\",\n" +
    "   \"Data\": 7721545,\n" +
    "   \"Region\": \"Sub-Saharan Africa\",\n" +
    "   \"SeriesName\": \"Labor force, total\"\n" +
    " }\n" +
    "]");

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
						  user1Ref.child(snap.key).remove();
						  user2Ref.child(snap.key).remove();
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
  

  function initDB(){
	  var i = 0;
	  for(i = 0; i < json.length; i++){
		var countryName = json[i].CountryName;
		var data = json[i].Data;
		var region = json[i].Region;
		var seriesName = json[i].SeriesName;
		
		// A post entry.
		var newData = {
			CountryName: countryName,
			Data: math.eval(data),
			Region: region, 
			SeriesName: seriesName
		};
		
		// Get a key for a new Post.
		var newPostKey = i;
		
		// Write the new post's data simultaneously in the posts list and the user's post list.
		var updates = {};
		updates[newPostKey] = newData;
		
//		console.log(newPostKey + " || " + region.toString() + " " + region.toString().localeCompare("Europe & Central Asia"));
		if(dbRef.update(updates)){
			if(region.toString().localeCompare("Europe & Central Asia") == 0)
				user1Ref.update(updates);
			else if (region.toString().localeCompare("Sub-Saharan Africa") == 0)
				user2Ref.update(updates);
			 console.log("Added a new data!");
			
		}
		else console.log("Error: Unable to add a new data!");
		
		$('.modal-overlay').trigger('click');
  	}
  };
  
	$("document").ready(function() {
	    $('.modal').modal();

//	    initDB();
	    
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
				Data: math.eval(data),
				Region: region, 
				SeriesName: seriesName
			};
			
			// Get a key for a new Post.
			var newPostKey = dbRef.push().key;
			
			// Write the new post's data simultaneously in the posts list and the user's post list.
			var updates = {};
			updates[newPostKey] = newData;
			

			if(dbRef.update(updates)){
				 console.log("Updated data!");
				 if(loggedInUser == "user1")
					 user1Ref.update(updates);
				 else (loggedInUser == "user2")
				 	user2Ref.update(updates);
			}else console.log("Error: Unable to add a new data!");
			
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
		dbRef.child(dataId).child("Data").set(math.eval(data));
		dbRef.child(dataId).child("Region").set(region);
		

		user1Ref.child(dataId).child("CountryName").set(countryName);
		user1Ref.child(dataId).child("SeriesName").set(seriesName);
		user1Ref.child(dataId).child("Data").set(math.eval(data));
		user1Ref.child(dataId).child("Region").set(region);
		

		user2Ref.child(dataId).child("CountryName").set(countryName);
		user2Ref.child(dataId).child("SeriesName").set(seriesName);
		user2Ref.child(dataId).child("Data").set(math.eval(data));
		user2Ref.child(dataId).child("Region").set(region);

    	$('.modal-overlay').trigger('click');
	  })
	  

	    $("#logoutButton").click(function(event){
	    	sessionStorage.removeItem("loggedUser");
	        window.location.href = "home.html";
	    });
  });