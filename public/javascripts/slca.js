// **************************************************************
// Copyright © Share One
// **************************************************************

	var ZZZ = getValue(passed, 'calculate_option');
	if (ZZZ == 1) {

	document.write("");
	document.write("<table class="calculator">");

	document.write("<tr>");
	document.write("<td colspan=4>");
	document.write("");
	document.write("");
	document.write("Amortization Schedule");
	document.write("</CENTER>");
	document.write("");
	document.write("</td>");
	document.write("</tr>");

	document.write("<tr>");
	document.write("<td BGCOLOR=#EEEEEE>");
	document.write("");
	document.write("");
	document.write("Payment");
	document.write("</CENTER>");
	document.write("");
	document.write("</td>");
		
	document.write("<td BGCOLOR=#EEEEEE>");
	document.write("");
	document.write("");
	document.write("Principal");
	document.write("</CENTER>");
	document.write("");
	document.write("</td>");
		
	document.write("<td BGCOLOR=#EEEEEE>");
	document.write("");
	document.write("");
	document.write("Interest");
	document.write("</CENTER>");
	document.write("");
	document.write("</td>");
		
	document.write("<td BGCOLOR=#EEEEEE>");
	document.write("");
	document.write("");
	document.write("Loan Balance");
	document.write("</CENTER>");
	document.write("");
	document.write("</td>");
	document.write("</tr>");

	document.write("<tr>");
	document.write("<td BGCOLOR=#FFFFFF>");
	document.write("");
	document.write("");
	document.write("-");
	document.write("</CENTER>");
	document.write("");
	document.write("</td>");
		
	document.write("<td BGCOLOR=#FFFFFF>");
	document.write("");
	document.write("");
	document.write("-");
	document.write("</CENTER>");
	document.write("");
	document.write("</td>");
		
	document.write("<td BGCOLOR=#EEFFEE>");
	document.write("");
	document.write("");
	document.write(""+roundingPad((B*100.00)/100)+"%");
	document.write("</CENTER>");
	document.write("");
	document.write("</td>");
		
	document.write("<td BGCOLOR=#EEFFEE>");
	document.write("");
	document.write("");
	document.write(currencyPad(A));
	document.write("</CENTER>");
	document.write("");
	document.write("</td>");
	document.write("</tr>");
		
	var KK = 0;
	var JJ = 0;
	var HH = 0;
						
	for (var I = 1; I <= TOTPER; I++) {

		HH = I;
			
		KK = INT * A;

		JJ = PMT - KK;
					
		A = A - JJ;
			
		if (A <= .25) { A = 0 }
		if (KK <= 0) { A = 0 }

	document.write("<tr BGCOLOR=#EEFFEE>");
	document.write("<td>");
	document.write("");
	document.write("");
	document.write(HH);
	document.write("</CENTER>");
	document.write("");
	document.write("</td>");
		
	document.write("<td>");
	document.write("");
	document.write("");
	document.write(currencyPad(JJ));
	document.write("</CENTER>");
	document.write("");
	document.write("</td>");
		
	document.write("<td>");
	document.write("");
	document.write("");
	document.write(currencyPad(KK));
	document.write("</CENTER>");
	document.write("");
	document.write("</td>");
		
	document.write("<td>");
	document.write("");
	document.write("");
	document.write(currencyPad(A));
	document.write("</CENTER>");
	document.write("");
	document.write("</td>");
	document.write("</tr>");

	}

	document.write("</TABLE>");
	document.write("<br />");
	document.write("<br />");

	}

// **************************************************************

