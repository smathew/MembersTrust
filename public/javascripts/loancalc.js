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

function checkNumber(input, min, max, msg) {

        msg = msg + " field has invalid data: " + input.value;

        var str = input.value;
        for (var i = 0; i < str.length; i++) {
            var ch = str.substring(i, i + 1)
            if ((ch < "0" || "9" < ch) && ch != '.') {
                alert(msg);
                return false;
            }
        }
        var num = 0 + str
        if (num < min || max < num) {
            alert(msg + " not in range [" + min + ".." + max + "]");
            return false;
        }
        input.value = str;
        return true;
    }

function computeField(input) {

        if (input.value != null && input.value.length != 0)
            input.value = "" + eval(input.value);
        computeForm(input.form);
    }

function computeForm(form) {

        if ((form.payments.value == null || form.payments.value.length == 0) ||
            (form.interest.value == null || form.interest.value.length == 0) ||
            (form.principal.value == null || form.principal.value.length == 0)) {
            return;
        }

        if (!checkNumber(form.payments, 1, 480, "# of payments") ||
            !checkNumber(form.interest, .001, 99, "Interest") ||

            !checkNumber(form.principal, 100, 10000000, "Principal")) {
            form.payment.value = "Invalid";
            return;
        }

        var i = form.interest.value;
        
        if (i > 1.0) {
            i = i / 100.0;
            form.interest.value = i;
        }
        i /= 12;

        var pow = 1;
        for (var j = 0; j < form.payments.value; j++)
            pow = pow * (1 + i);
        var payAmt = (form.principal.value * pow * i) / (pow - 1)
        form.payment.value=currency(payAmt)
    }

function clearForm(form) {
        form.payments.value = "";
        form.interest.value = "";
        form.principal.value = "";
    }