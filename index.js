(function(){

	let AM_PM="";
	opactiyValue=true;

	setInterval(()=>{
	
		let date = new Date();
		let hr =date.getHours();
		let min = date.getMinutes();
		let sec = date.getSeconds()
		let secDeg = sec*6;
		let minDeg=0;
		const secDial = document.getElementById("sec");
		const minDial = document.getElementById("min");
		const hrDial = document.getElementById("hr");
		secDial.style.transform=`rotateZ(${sec*6}deg)`
		minDial.style.transform=`rotateZ(${min*6}deg)`
		hrDial.style.transform=`rotateZ(${hr*30+(min*0.5)}deg)`;
		AM_PM = getAmPm(hr);
		const digitalClock=document.getElementById('digital-clock');
		hr=getHour(hr);
		digitalClock.children[0].innerHTML=hr<10? `0${hr}` : hr ;
		digitalClock.children[2].innerHTML=min<10? `0${min}` : min ;
		digitalClock.children[4].innerHTML=sec<10? `0${sec}` : sec;
		document.getElementById("am-pm").innerHTML=`${AM_PM}`;

	},1000)

	function getAmPm(hr){
		return hr<=12?"AM":"PM"
	}

	function getHour(hr){
		return hr>12? hr-12 : hr;
	}
})()