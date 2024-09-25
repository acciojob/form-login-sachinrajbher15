function getFormvalue() {
    //Write your code here
	const form = document.getElementById("form1");
	const fname = form.elements["fname"].value;
	const lname = form.elements["lname"].value;
	alert(fname+" "+lname);
}
