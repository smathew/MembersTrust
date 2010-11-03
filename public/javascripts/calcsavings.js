var i = 0; // interest
var m = 0; // months
var f = 0; // factor
var den = 0; 
var s = "0"; // string
var d = 0; // decimal place

	var brName 			= navigator.appName;
	var brVersion 	= navigator.appVersion;
	var brCode 			= navigator.appCodeName;
	var usPlatform 	= navigator.platform;
	var pvHistory  	= history.length;
	var scWidth 	 	= screen.width;
	var scHeight 		= screen.height;
	var scDepth 		= screen.colorDepth;
	var scColors 		= screen.colorDepth;
	var scColors 		= Math.pow (2, scColors);

		function isValidChar( strChar, strValidCharSet ) {
				var foundChar = "no";
				for ( s=0; s<strValidCharSet.length; s++ ) {
						var tempChar = strValidCharSet.charAt(s);
						if ( tempChar == strChar ) {
								foundChar = "yes";
								break;
						}
				}
				if ( foundChar == "yes" ) {
						return true;
				} else {
						return false;
				}			
		
		}
		function validate(strVal, fldName, chars, extraChars, minLen, maxLen, decimal, valType, formatCase ) {
				var validAlpha 				= "abcdefghijkklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
				var validNumeric			= "0123456789";
				var validAlphaNumeric = validAlpha + validNumeric;
				var strValue 					= strVal.toLowerCase();
				var lenValue					= strVal.length;
				var fieldName 				= fldName;
				var stringIsValid			= true;
				var invalidChars			= "";
				var invalidCharCnt		= 0;
				var returnStrValue 		= "";
				var decimalPlaces			= decimal;				
				var emailCheckAt			= strVal.indexOf("@");
				var emailCheckDot			= strVal.indexOf(".");		
				
				if ( chars == "a" ) {
						var validCharSet = validAlpha + extraChars;
						var charType = "characters";
				} else if ( chars == "an" ) {
						var validCharSet = validAlphaNumeric + extraChars;
						var charType = "characters/numbers";
				} else if ( chars == "n" ) {
						var validCharSet = validNumeric + extraChars;
						var charType = "numbers";
						if ( decimalPlaces >= 1 ) {
								decPoint = strValue.indexOf(".");
								valDecPlaces = (lenValue-1) - decPoint;
								if ( valDecPlaces != decimalPlaces ) {
										return ( "Invalid Decimal Places\n\n" + fieldName + " must have " + decimalPlaces + " decimal places." );
								}
						}
				} else {
						var validCharSet = extraChars;
						var charType = "characters";
				}

				// Validate Length of String first
				if ( lenValue < minLen || lenValue > maxLen ) {
						if ( minLen == maxLen ) {
								return ( "Invalid Length\n\n" +  fieldName + " must be " + minLen + " " + charType + " in length.");
						} else {
								return ( "Invalid Length\n\n" +  fieldName + " must be between " + minLen + " and " + maxLen + " " + charType + " in length.");
						}
				} else {
						var cntDash = 0;
						for ( i=0; i<lenValue; i++ ) {
						
								var charStrValue = strValue.charAt(i);
								var validChar = isValidChar( charStrValue, validCharSet );
								
								if ( !validChar ) {
												invalidCharCnt += 1;
												invalidChars  += charStrValue;
								}
								
								if ( charStrValue == "-" ) {
									cntDash = cntDash + 1;
								}
						}
						
						if ( invalidCharCnt > 0 ) {
							stringIsValid = false;
						} else {
							stringIsValid = true;
						}
						if ( valType == "email" ) {
								// Force @ and . in email address
								if ( emailCheckAt == -1 || emailCheckDot == -1 ) {
										return ( "Invalid Email Address\n\n" +  fieldName + " must contain both @ and . characters.");
								}
						}
						
						if ( stringIsValid ) {
								if ( formatCase == "upper" ) {
										returnStrValue = strValue.toUpperCase();
								} else if ( formatCase == "lower" ) {
										returnStrValue = strValue.toLowerCase();
								} else {
										for ( k=0; k<lenValue; k++ ) {
												var tempReturnStrChar = strValue.charAt(k);
												if ( k == 0 ) {
														returnStrValue += tempReturnStrChar.toUpperCase();
												} else {
														if ( strValue.charAt(k-1) == " " || strValue.charAt(k-1) == "'" ) {
																returnStrValue += tempReturnStrChar.toUpperCase();
														} else {
																returnStrValue += tempReturnStrChar.toLowerCase();
														}
												}
										}
								}
								return returnStrValue;
						} else {
								document.test.invalidChars.value = invalidChars;
								return false;
						}

				}

		}
		

function currency(anynum) {
        //returns number as string in $xxx,xxx.xx format.
        anynum = "" + eval(anynum)  //evaluate (in case an expression sent)
        intnum = parseInt(anynum)  //isolate integer portion
        intnum = Math.abs(intnum)
        intstr = ""+intnum
        //add comma in thousands place.
        if (intnum >= 1000) {
                intlen = intstr.length
                temp1=parseInt(""+(intnum/1000))
                temp2=intstr.substring(intlen-3,intlen)
                intstr = temp1+","+temp2

        }
        if (intnum >= 1000000) {
                intlen = intstr.length
                temp1=parseInt(""+(intnum/1000000))
                temp2=intstr.substring(intlen-7,intlen)
                intstr = temp1+","+temp2

        }

        decnum = Math.abs(parseFloat(anynum)-parseInt(anynum)) //isolate decimal portion
        decnum = decnum * 100 // multiply decimal portion by 100.
        decstr = "" + Math.abs(Math.round(decnum))
        while (decstr.length < 2) {decstr += "0"}
        retval = intstr + "." + decstr 
        if (anynum < 0) {
                retval="("+retval+")"
        }
        return "$"+retval
}
function CalcTotalSavings() {

				// Check Payment Amount
				var pymt 	= document.forms.savingsCalc.payment.value;
				var isValidPymt = validate ( pymt, "Total Invested Each Month", "n", ".", 2, 9, 0, "ssn", "upper");
				if ( !isValidPymt ) {
						alert("Total Invested Each Month is Invalid.  It cannot contain the following: " + document.test.invalidChars.value);
						document.forms.savingsCalc.payment.focus();
						document.forms.savingsCalc.payment.select();
						return false;
				} else if ( isValidPymt.substring(0,7) == "Invalid" ) {
						alert(isValidPymt);
						document.forms.savingsCalc.payment.focus();
						document.forms.savingsCalc.payment.select();
						return false;
				} else {
						document.forms.savingsCalc.payment.value = isValidPymt;
				}
				
				
				// Check Number of Months
				var numOfMonths 	= document.forms.savingsCalc.months.value;
				var isValidPymt = validate ( numOfMonths, "Number of Months/Years", "n", "", 1, 3, 0, "", "upper");
				if ( !isValidPymt ) {
						alert("Number of Months/Years is Invalid.  It cannot contain the following: " + document.test.invalidChars.value);
						document.forms.savingsCalc.months.focus();
						document.forms.savingsCalc.savingsCalc.months.select();
						return false;
				} else if ( isValidPymt.substring(0,7) == "Invalid" ) {
						alert(isValidPymt);
						document.forms.savingsCalc.months.focus();
						document.forms.savingsCalc.months.select();
						return false;
				} else {
						document.forms.savingsCalc.months.value = isValidPymt;
				}
				
				
				// Check Interest
				var interest 	= document.forms.savingsCalc.interest.value;
				var isValidPymt = validate ( interest, "Interest Amount", "n", ".", 1, 5, 0, "ssn", "upper");
				if ( !isValidPymt ) {
						alert("Interest Amount is Invalid.  It cannot contain the following: " + document.test.invalidChars.value);
						document.forms.savingsCalc.interest.focus();
						document.forms.savingsCalc.interest.select();
						return false;
				} else if ( isValidPymt.substring(0,7) == "Invalid" ) {
						alert(isValidPymt);
						document.forms.savingsCalc.interest.focus();
						document.forms.savingsCalc.interest.select();
						return false;
				} else {
						document.forms.savingsCalc.interest.value = isValidPymt;
				}
				
				

				if(document.forms.savingsCalc.interest.value=="" || document.forms.savingsCalc.months.value=="" || document.forms.savingsCalc.payment.value=="") {
					alert("Please fill in all of the required fields.");
				} else { 
					if(document.forms.savingsCalc.period.options[1].selected == true) {
						m = document.forms.savingsCalc.months.value * 12;
					} else {
						m = document.forms.savingsCalc.months.value;
					} 
					i = Math.pow(((document.forms.savingsCalc.interest.value/100)+1),.0833333)-1;
					den = i / (i+1);
					f = Math.pow((i+1),m)-1;
					f /= den;
					f *= document.forms.savingsCalc.payment.value;
					d = String(f).indexOf(".");
					s = String(f).substring(0,(d+3));
					document.forms.savingsCalc.total.value = "" + currency(s);  
			   }
}
