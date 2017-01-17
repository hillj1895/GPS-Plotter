function addSlider(fileData) {
	minDateMillis = parseInt(fileData.data[0].senseStartTimeMillis);
	maxDateMillis = parseInt(fileData.data[data.data.length - 2].senseStartTimeMillis);
	var minDate = new Date(minDateMillis);
	var maxDate = new Date(maxDateMillis);
	console.log(fileData.data[data.data.length - 2].senseStartTimeMillis);

	$("#slider").dateRangeSlider({
	  arrows: false,
	  bounds: {
		  min: minDate,
		  max: maxDate
	  },
	  defaultValues: {
		  min: minDate,
		  max: maxDate
	  },
    formatter:function(val){
      var days = val.getDate();
      var month = val.getMonth() + 1;
      var year = val.getFullYear();
      var hours = val.getHours();
      var minutes = val.getMinutes();
      var time = val.getTime();
      return month + "/" + days + "/" + year + " " + addZero(hours) + ":" +  addZero(minutes);
    }
	});

	function addZero(val) {
    if (val < 10) {
      return "0" + val;
  	}
  	else {
  		return val;
  	}
  }

	document.getElementById("sliderHeading").innerHTML = "Specify a Date Range:";

	$("#slider").bind("valuesChanged", function(e, data) {
		updateMarkers(data.values.min, data.values.max);
	});
}
