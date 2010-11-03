function initLoginForm( formId ) {
	var frm = document.forms[formId];

	if ( frm != null ) {
		window.loginFormElement = frm;
		setupHandler( frm.elements["account"], "keypress", checkNumeric );
		setupHandler( frm, "submit", onLoginSubmit );
		frm.elements["account"].focus();
	}
}

function onLoginSubmit( event ) {
	var frm = window.loginFormElement;

	if ( frm == null ) {
		return false;
	} else {
		var acct = frm.elements["account"].value;
		if ( acct.length == 0 ) {
			stopEvent( event );
			alert( sprintf( "%s is required.", frm.elements["account"].label.firstChild.nodeValue ) );
			frm.elements["account"].focus();
			return false;
		}

		var pin = frm.elements["pin"].value;
		if ( pin.length == 0 ) {
			stopEvent( event );
			alert( sprintf( "%s is required.", frm.elements["pin"].label.firstChild.nodeValue ) );
			frm.elements["pin"].focus();
			return false;
		}

		var firstChar = acct.substring(0,1);
		if ( firstChar == "0" ) {
			stopEvent( event );
			alert( sprintf( "Invalid %s.\n%s cannot begin with a zero.",
				frm.elements["account"].label.firstChild.nodeValue,
				frm.elements["account"].label.firstChild.nodeValue
			) );
			frm.elements["account"].select();
			frm.elements["account"].focus();
			return false;
		}

		return true;
	}
}