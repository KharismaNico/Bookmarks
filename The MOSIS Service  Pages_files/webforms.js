
function trimspace(s) {
	if (s == null) {
		return "";
	}
	while (s.substring(0,1) == ' ') {
		s = s.substring(1);
     	}
     	while (s.substring(s.length - 1,s.length) == ' ') {
		s = s.substring(0, s.length - 1);
    	}
	return s;
}

function removespec(s) {
    var i, c, new_s;

    new_s = "";
    for (i = 0; i < s.length; i++) {
      c = s.charAt(i);
      if (c == '&') {
      	new_s = new_s + '&amp;';
      } else if (c == '"') {
      	new_s = new_s + '&quot;';
      } else if (c == '<') {
      	new_s = new_s + '&lt;';
      } else if (c == '>') {
      	new_s = new_s + '&gt;';
      } else {
      	new_s = new_s + c;
      }
    }
    return new_s;
}

function snippet(s, pos, quotechar) {
	var last, rest;

	last = pos + 30;
	rest = " ...";
	if (last > s.length) {
		last = s.length;
		rest = "";
	}
	if (pos < s.length) {
		return quotechar + s.substring(pos, last) + rest + quotechar;
	} else {
		return "end of text";
	}
}

function isempty(val) {
   return ((val == null) || (val == ""));
}

function isinteger(s) {
   var i, c;
   var digits = "0123456789";

   if (s == null) {
	return false;
   } else if (s == "") {
	return false;
   } else {
	c = s.charAt(0);
	i = 0;
	if (c == '-') { i = 1; }
	if (i >= s.length) { return false; }
    	for (  ; i < s.length; i++) {
      		c = s.charAt(i);
		if (digits.indexOf(c) == -1) { return false; }
    	}
    	return (i >= s.length);
   }
}

function isreal(s) {
   var i, c;
   var digits = "0123456789";
   var saw_period, saw_digit;

   if (s == null) {
	return false;
   } else if (s == "") {
	return false;
   } else {
	saw_period = false;
	saw_digit = false;
	c = s.charAt(0);
	i = 0;
	if (c == '-') { i = 1; }
    	for (  ; i < s.length; i++) {
      		c = s.charAt(i);
		if (c == '.') {
			if (saw_period) {
				return false;
			} else {
				saw_period = true;
			}
		} else if (digits.indexOf(c) != -1) {
			saw_digit = true;
		} else {
			return false;
		}
    	}
    	return saw_digit;
   }
}

function isfabid(s) {
   var c1, c2, c3, c4, c5, c6;
   var first_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var digits = "0123456789";
   var months = "123456789ABC";
   var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

   if (s.length != 6) {
	return false;
   } else {
	s = s.toUpperCase();
	c1 = s.charAt(0);
	c2 = s.charAt(1);
	c3 = s.charAt(2);
	c4 = s.charAt(3);
	c5 = s.charAt(4);
	c6 = s.charAt(5);
	if (first_letters.indexOf(c1) == -1) { return false; }
	if (digits.indexOf(c2) == -1) { return false; }
	if (months.indexOf(c3) == -1) { return false; }
	if (alphabet.indexOf(c4) == -1) { return false; }
	if (alphabet.indexOf(c5) == -1) { return false; }
	if (alphabet.indexOf(c6) == -1) { return false; }
	return true;
   }
}

function isMonth(s) {
   	s = s.toUpperCase();
	return s == 'JAN' || s == 'FEB' || s == 'MAR' || s == 'APR' ||
		s == 'MAY' || s == 'JUN' || s == 'JUL' || s == 'AUG' ||
		s == 'SEP' || s == 'OCT' || s == 'NOV' || s == 'DEC';
}

function is_leap_year(year) {
	return (year % 4) == 0 && ((year % 100) != 0 || (year % 400) == 0);
}

function max_days_in_month(month, year) {
	var result;

   	if (month == 'SEP' || month == 'APR' || month == 'JUN' || month == 'NOV') {
		result = 30;
	} else if (month == 'FEB') {
		if (is_leap_year(year)) {
			result = 29;
		} else {
			result = 28;
		}
	} else {
		result = 31;
	}
	return result;
}

function isValidDate(s) {
   	var i, c, val, state, sep_count, day, month, year, max_days;

   	val = trimspace(s);
   	val = val.toUpperCase();
   	sep_count = 0;
   	day = '';
   	month = '';
   	year = '';
   	state = 1;
   	for (i = 0; i < val.length; i++) {
		c = val.charAt(i);
		if (c == '-') {
			state++;
		} else if (state == 1) {
			day = day + c;
		} else if (state == 2) {
			month = month + c;
		} else if (state == 3) {
			year = year + c;
		}
	}
	if (isMonth(month) && isinteger(year)) {
		max_days = max_days_in_month(month, year);
	} else {
		max_days = -1;
	}
	return (state == 3) && isinteger(day) && (day.length > 0) &&
		(day.length <= 2) && (year.length == 2 || year.length == 4) &&
		(day >= 1) && (day <= 31) && (day <= max_days) &&
		isinteger(year) && (year >= 0) && (year < 10000) &&
		isMonth(month);
}

function isValidHost(s) {
	var i, c, state, len, saw_dot;
   	var endchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
   	var allchars = endchars + '-.';

	if (s.length > 255) { return false; }
	for (i = 0; i < s.length; i++) {
		c = s.charAt(i);
		if (allchars.indexOf(c) == -1) { return false; }
	}
	state = 0;
	len = 0;
	saw_dot = 0;
	for (i = 0; i < s.length; i++) {
		c = s.charAt(i);
		len++;
		if (state == 0) {
			if (endchars.indexOf(c) == -1) { return false; }
			state = 1;
		} else if (state == 1) {
			if (endchars.indexOf(c) >= 0) {
				state = 1;
			} else if (c == '-') {
				state = 2;
			} else if (len >= 64) {	// Saw '.'
				return false;
			} else {
				state = 0;
				len = 0;
				saw_dot = 1;
			}
		} else if (state == 2) {
			if (c == '.') {
				return false;
			} else if (c == '-') {
				state = 2;
			} else {
				state = 1;
			}
		}
	}
	return ((state == 1) && (len < 64) && saw_dot);
}

var error_text;
var error_text_len = 40;

function skipLwsp(s, pos) {
	var i, c;

	for (i = pos; i < s.length; i++) {
		c = s.charAt(i);
		if (c == ' ' || c == '\t') {
		} else {
			return i;
		}
	}
	return i;
}

function skipCommas(s, pos) {
	var i, c;

	for (i = pos; i < s.length; i++) {
		c = s.charAt(i);
		if (c == ' ' || c == '\t' || c == ',') {
		} else {
			return i;
		}
	}
	return i;
}

function matchComment(s, pos) {
	var i, c, depth, in_escape;

	if (s.charAt(pos) != '(') { return pos; }
	depth = 1;
	in_escape = false;
	for (i = pos + 1; i < s.length; i++) {
		c = s.charAt(i);
		if (in_escape) {
			in_escape = false;
		} else if (c == '\\') {
			in_escape = true;
		} else if (c == '(') {
			depth++;
		} else if (c == ')') {
			depth--;
			if (depth == 0) { return i + 1; }
		}
	}
	error_text = 'Comment starting with ' +
		snippet(s, pos, '"') + ' not properly closed';
	return -1;
}

function skipWhiteComment(s, pos) {
	var i, c, len;

	len = s.length;
	while (pos >= 0 && pos < len) {
		pos = skipLwsp(s, pos);
		if (pos < len) {
			c = s.charAt(pos);
			if (c == '(') {
				pos = matchComment(s, pos);
			} else {
				return pos;
			}
		}
	}
	return pos;
}

function matchQuoted(s, pos) {
	var i, c, in_escape;

	if (pos >= s.length || s.charAt(pos) != '"') {
		error_text = 'Cannot match quoted string at end of text';
		return -1;
	}
	in_escape = false;
	for (i = pos + 1; i < s.length; i++) {
		c = s.charAt(i);
		if (in_escape) {
			in_escape = false;
		} else if (c == '\\') {
			in_escape = true;
		} else if (c == '"') {
			return i + 1;
		}
	}
	error_text = 'Quoted string starting with ' +
		snippet(s, pos, "'") + ' not properly closed\n';
	return -1;
}

function matchAtom(s, pos) {
	var i, c;
	var atomchars = "!#$%&'*+-/0123456789=?ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz{|}~";

	for (i = pos; i < s.length; i++) {
		c = s.charAt(i);
		if (atomchars.indexOf(c) == -1) {
			break;
		}
	}
	if (i > pos) {
		return i;
	} else if (i == pos && pos == s.length) {
		error_text = 'Cannot match Atom at end of text';
		return -1;
	} else {
		error_text = 'Cannot match Atom in ' +
			snippet(s, pos, '"');
		return -1;
	}
}

function matchWord(s, pos) {
	var c;

	if (pos >= s.length) {
		error_text = 'Cannot match Word at end of text';
		return -1;
	}
	c = s.charAt(pos);
	if (c == '"') {
		pos = matchQuoted(s, pos);
	} else {
		pos = matchAtom(s, pos);
	}
	return pos;
}

function matchPhrase(s, pos) {
	var c, cnt, len, orig_pos;
	var atomchars = "!#$%&'*+-/0123456789=?ABCDEFGHIJKLMNOPQRSTUVWXYZ^_`abcdefghijklmnopqrstuvwxyz{|}~";

	if (pos >= s.length) {
		error_text = 'Cannot match Phrase at end of text';
		return -1;
	}
	len = s.length;
	cnt = 0;
	orig_pos = pos;
	while (pos >= 0 && pos < len) {
		pos = skipWhiteComment(s, pos);
		if (pos >= 0 && pos < len) {
			c = s.charAt(pos);
			if ((c != '"') && (atomchars.indexOf(c) == -1)) { break; }
			pos = matchWord(s, pos);
			if (pos >= 0) {
				cnt++;
			} else {
				return pos;
			}
		}
	}
	if (pos < 0 || cnt > 0) {
		return pos;
	} else {
		error_text = 'Cannot match Phrase in ' +
			snippet(s, orig_pos, '"');
		return -1;
	}
}

function matchAddrSpec(s, pos) {
	var cnt, len, orig_pos, first;

	if (pos >= s.length) {
		error_text = 'Cannot match Addr-Spec at end of text';
		return -1;
	}
	len = s.length;
	cnt = 0;
	orig_pos = pos;
	first = true;
	while (pos >= 0 && pos < len) {
		pos = skipWhiteComment(s, pos);
		if (pos < 0) { return pos; }
		else if (pos >= len) { break; }
		if (!first) {
			if (s.charAt(pos) == '.') {
				pos++;
				pos = skipWhiteComment(s, pos);
				if (pos < 0) { return pos; }
			} else {
				break;
			}
		}
		pos = matchWord(s, pos);
		if (pos < 0) {
			return pos;
		} else {
			first = false;
			cnt++;
		}
	}

	if (cnt == 0) {
		error_text = 'Cannot match Word in ' +
			snippet(s, pos, '"');
		return -1;
	} else if (pos >= len) {
		error_text = 'Expecting "@" but end of text encountered';
		return -1;
	} else if (s.charAt(pos) != '@') {
		error_text = 'Expecting "@" at start of ' +
			snippet(s, pos, '"');
		return -1;
	} else {
		pos++;
	}

	cnt = 0;
	first = true;
	while (pos >= 0 && pos < len) {
		pos = skipWhiteComment(s, pos);
		if (pos < 0) { return pos; }
		else if (pos >= len) { break; }
		if (!first) {
			if (s.charAt(pos) == '.') {
				pos++;
				pos = skipWhiteComment(s, pos);
				if (pos < 0) { return pos; }
			} else {
				break;
			}
		}
		pos = matchAtom(s, pos);
		if (pos < 0) {
			return pos;
		} else {
			first = false;
			cnt++;
		}
	}

	if (cnt == 0) {
		error_text = 'Cannot match Atom in ' +
			snippet(s, pos, '"');
		return -1;
	} else {
		return pos;
	}

}

function matchNamedAddrSpec(s, pos) {
	var orig_pos, len;

	len = s.length;
	if (pos >= len) {
		error_text = 'Cannot match Addr-Spec at end of text';
		return -1;
	}
	orig_pos = pos;
	pos = matchPhrase(s, pos);
	if (pos < 0) { pos = orig_pos; }

	if (pos >= len) {
		error_text = 'Expecting "<" but end of text encountered';
		return -1;
	} else if (s.charAt(pos) != '<') {
		error_text = 'Expecting "<" at start of ' +
			snippet(s, pos, '"');
		return -1;
	} else {
		pos++;
	}

	pos = matchAddrSpec(s, pos);
	if (pos < 0) { return pos; }

	if (pos >= len) {
		error_text = 'Expecting ">" but end of text encountered';
		return -1;
	} else if (s.charAt(pos) != '>') {
		error_text = 'Expecting ">" at start of ' +
			snippet(s, pos, '"');
		return -1;
	} else {
		pos++;
		pos = skipWhiteComment(s, pos);
		return pos;
	}

}

function matchMailbox(s, pos) {
	var orig_pos, len;

	len = s.length;
	if (pos >= len) {
		error_text = 'Cannot match E-mail address at end of text';
		return -1;
	}
	pos = skipWhiteComment(s, pos);
	if (pos < 0) { return pos; }
	orig_pos = pos;
	pos = matchAddrSpec(s, pos);
	if (pos >= 0) { return pos; }
	pos = orig_pos;

	pos = matchNamedAddrSpec(s, pos);
	return pos;
}

function requiredField(frm, fname, descr) {
   var val;

   val = trimspace(frm[fname].value);
   if (isempty(val)) {
     	return "Required field " + descr + " is empty\n";
   } else {
     	return "";
   }
}

function integerField(frm, fname, descr) {
   var val;

   val = trimspace(frm[fname].value);
   if (! isinteger(val)) {
     	return "Value for " + descr + ' must be an integer - "' + val + '" not allowed\n';
   } else {
     	return "";
   }
}

function requiredIntField(frm, fname, descr, lowlim, highlim) {
	var val;

	val = trimspace(frm[fname].value);
	if (isempty(val)) {
     		return requiredField(frm, fname, descr);
	} else {
     		return optionalIntField(frm, fname, descr, lowlim, highlim);
	}
}

function optionalIntField(frm, fname, descr, lowlim, highlim) {
	var val;

	val = trimspace(frm[fname].value);
	if (isempty(val)) {
     		return "";
	} else if (! isinteger(val)) {
     		return integerField(frm, fname, descr);
	} else if (val < lowlim) {
     		return "Value for " + descr + ' must be at least ' + lowlim + '  ("' + val + '" is too small)\n';
	} else if (val > highlim) {
     		return "Value for " + descr + ' cannot exceed ' + highlim + ' ("' + val + '" is too big)\n';
   	} else {
     		return "";
	}
}

function optionalIntAllField(frm, fname, descr, lowlim, highlim) {
	var val;

	val = trimspace(frm[fname].value);
	if (isempty(val) || isinteger(val)) {
     		return optionalIntField(frm, fname, descr, lowlim, highlim);
	} else if (val.toUpperCase() == "ALL") {
     		return "";
	} else {
     		return "Value for " + descr + ' must be an integer or the word ALL ("' + val + '" not allowed)\n';
	}
}

function greaterIntField(frm, fname1, descr1, fname2, descr2) {
	var val1, val2;

	val1 = trimspace(frm[fname1].value);
	val2 = trimspace(frm[fname2].value);
	if (isinteger(val1) && isinteger(val2) && (val2 - 0 > val1 - 0)) {
     		return "Value for " + descr2 + ' (' + val2 + ') cannot be greater than ' + descr1 + ' (' + val1 + ')\n';
	} else {
     		return "";
	}
}

function realField(frm, fname, descr) {
   var val;

   val = trimspace(frm[fname].value);
   if (! isreal(val)) {
     	return "Value for " + descr + ' must be a real number - "' + val + '" not allowed\n';
   } else {
     	return "";
   }
}

function requiredRealField(frm, fname, descr, lowlim, highlim) {
	var val;

	val = trimspace(frm[fname].value);
	if (isempty(val)) {
     		return requiredField(frm, fname, descr);
	} else {
     		return optionalRealField(frm, fname, descr, lowlim, highlim);
	}
}

function optionalRealField(frm, fname, descr, lowlim, highlim) {
	var val;

	val = trimspace(frm[fname].value);
	if (isempty(val)) {
     		return "";
	} else if (! isreal(val)) {
     		return realField(frm, fname, descr);
	} else if (val < lowlim) {
     		return "Value for " + descr + ' must be at least ' + lowlim + '  ("' + val + '" is too small)\n';
	} else if (val > highlim) {
     		return "Value for " + descr + ' cannot exceed ' + highlim + ' ("' + val + '" is too big)\n';
   	} else {
     		return "";
	}
}

function requiredExportField(frm, fname, descr) {
	var val;

	val = trimspace(frm[fname].value);
	if (isempty(val) || (val.toUpperCase() == "NOT SPECIFIED")) {
     		return "Required field " + descr + " not specified\n";
   	} else {
     		return "";
	}
}

function fieldPair(frm, fname1, descr1, fname2, descr2) {
	var val1, val2;

	val1 = trimspace(frm[fname1].value);
	val2 = trimspace(frm[fname2].value);
	if (isempty(val1) && !isempty(val2)) {
     		return "Value for " + descr2 + ' specified but ' + descr1 + ' is empty\n';
	} else if (isempty(val2) && !isempty(val1)) {
     		return "Value for " + descr1 + ' specified but ' + descr2 + ' is empty\n';
	} else {
     		return "";
	}
}

function oneNonempty(frm, fname1, descr1, fname2, descr2) {
	var val1, val2;

	val1 = trimspace(frm[fname1].value);
	val2 = trimspace(frm[fname2].value);
	if (isempty(val1) && isempty(val2)) {
     		return "Must specify " + descr1 + ' or ' + descr2 + ' (or both)\n';
	} else {
     		return "";
	}
}

function sameValues(frm, fname1, descr1, fname2, descr2) {
	var val1, val2;

	val1 = trimspace(frm[fname1].value);
	val2 = trimspace(frm[fname2].value);
	if (!isempty(val1) && ! isempty(val2) && (val1 != val2)) {
     		return "Values for " + descr1 + ' and ' + descr2 + ' must be identical\n';
	} else {
     		return "";
	}
}

function anyNonEmpty(frm) {
	var s, val, i, arg_count, msg;

	arg_count = anyNonEmpty.arguments.length;
    	for (i = 1; i < arg_count; i++) {
		s = anyNonEmpty.arguments[i];
		val = trimspace(frm[s].value);
		if (! isempty(val)) {
			return true;
		}
	}
	return false;
}

function requiredIfEmpty(frm, fname, descr) {
	var s, val, i, arg_count, msg;

	arg_count = requiredIfEmpty.arguments.length;
    	for (i = 3; i < arg_count; i++) {
		s = requiredIfEmpty.arguments[i];
		val = trimspace(frm[s].value);
		if (! isempty(val)) {
			return "";
		}
		i++;
	}

	val = trimspace(frm[fname].value);
	if (isempty(val)) {
		msg= descr + " is required when ";
		for (i = 3; i < arg_count; i++) {
			if (i != 3) {
				msg += " and ";
			}
			i++;
			msg += requiredIfEmpty.arguments[i];
		}
		msg += " are empty\n";
		return msg;
	} else {
		return "";
	}
}

function optionalEmailField(frm, fname, descr) {
	var val, pos;

	val = trimspace(frm[fname].value);
	if (isempty(val)) {
     		return "";
	} else {
		pos = matchMailbox(val, 0);
		if (pos < 0) {
			return "Invalid " + descr + ' "' + val + '"\n(' + error_text + ')\n';
		} else if (pos < val.length) {
			return "Invalid " + descr + ' "' + val + '"\n(Extra trailing text "' + val.substring(pos, val.length) + '")\n';
		} else {
			return "";
		}
	}
}

function emailListField(frm, fname, descr) {
	var val, pos, cnt, len, orig_pos, new_pos, valid_part, first;

	val = trimspace(frm[fname].value);
	if (isempty(val)) {
     		return "";
	} else {
		len = val.length;
		cnt = 0;
		pos = 0;
		orig_pos = 0;
		first = true;
		while (pos >= 0 && pos < len) {
			new_pos = skipCommas(val, pos);
			if (!first && new_pos < len) {
				pos = skipLwsp(val, pos);
				if (val.charAt(pos) != ',') {
					valid_part = "";
					if (pos > 0) {
						valid_part = '\nValid addresses are: ' + val.substring(0, pos) + '\n';
					}
					return descr + " is missing comma before text " + snippet(val, pos, '"') + valid_part + '\n';
				}
			}
			pos = skipCommas(val, pos);
			if (pos >= len) { break; }
			orig_pos = pos;
			pos = matchMailbox(val, pos);
			if (pos < 0) {
				break;
			} else {
				first = false;
				cnt++;
			}
		}

		if (pos < 0) {
			valid_part = "";
			if (orig_pos > 0) {
				valid_part = '\nValid addresses are: ' + val.substring(0, orig_pos) + '\n';
			}
			return "Invalid " + descr + " in text starting " + snippet(val, orig_pos, '"') + '\n(' + error_text + ')' + valid_part + '\n';
		} else if (cnt == 0) {
			return descr + " does not contain any valid E-mail addresses\n";
		} else {
			return "";
		}

	}
}

function optionalFabidField(frm, fname, descr) {
	var val;

	val = trimspace(frm[fname].value);
	if (isempty(val) || isfabid(val)) {
     		return "";
	} else {
     		return "Value for " + descr + ' must be a valid fab id - "' + val + '" not allowed\n';
	}
}

function optionalDateField(frm, fname, descr) {
	var val;

	val = trimspace(frm[fname].value);
	if (isempty(val) || isValidDate(val)) {
     		return "";
	} else {
     		return "Value for " + descr + ' must be a valid date in format DD-MON-YYYY - "' + val + '" not allowed\n';
	}
}

function validTargetRun(frm, fname1, descr1, fname2, fname21, descr2, fname3, descr3) {
	var run_type, run_date, run_name, msg;

	run_type = trimspace(frm[fname1].value);
	run_name = trimspace(frm[fname3].value);
	msg = "";
	if (run_type == "DEDICATED") {
		if (isempty(run_name)) {
     			msg += 'Field ' + descr3 + ' is required when ' + descr1 + ' is ' + run_type + '\n';
		}
		if (!isempty(run_date)) {
     			msg += 'Field ' + descr2 + ' must be empty when ' + descr1 + ' is ' + run_type + '\n';
		}
	} else if (run_type == "") {
		run_date = trimspace(frm[fname2].value);
		if (!isempty(run_date) && !isempty(run_name)) {
     			msg += 'Cannot specify both ' + descr2 + ' and ' + descr3 + '\n';
		}
	} else {
		run_date = trimspace(frm[fname21].value);
		if (isempty(run_date)) {
     			msg += 'Field ' + descr2 + ' is required when ' + descr1 + ' is ' + run_type + '\n';
		} else {
     			msg += optionalDateField(frm, fname21, descr2);
		}
		if (!isempty(run_name)) {
     			msg += 'Field ' + descr3 + ' must be empty when ' + descr1 + ' is ' + run_type + '\n';
		}
	}

	return msg;
}

function optionalTargetRun(frm, fname1, descr1, fname2, descr2, fname3, descr3) {
	var run_type, run_date, run_name, msg;

	run_type = trimspace(frm[fname1].options[frm[fname1].selectedIndex].value);
	run_date = trimspace(frm[fname2].value);
	run_name = trimspace(frm[fname3].value);
	msg = "";
	if (run_type == "") {
		if (!isempty(run_date) && !isempty(run_name)) {
     			msg += 'Cannot specify both ' + descr2 + ' and ' + descr3 + '\n';
		}
	} else if (run_type == "DEDICATED") {
		if (!isempty(run_date)) {
     			msg += 'Field ' + descr2 + ' must be empty when ' + descr1 + ' is ' + run_type + '\n';
		}
	} else {
		msg += optionalDateField(frm, fname2, descr2);
		if (!isempty(run_name)) {
     			msg += 'Field ' + descr3 + ' must be empty when ' + descr1 + ' is ' + run_type + '\n';
		}
	}

	return msg;
}

function validPackaging(frm, fname1, descr1, fname2, descr2, fname3, descr3, fname4, descr4) {
	var quantity, pkg, diagram, downbond, msg;

	quantity = trimspace(frm[fname1].value);
	pkg = trimspace(frm[fname2].value);
	diagram = trimspace(frm[fname3].options[frm[fname3].selectedIndex].value);
	downbond = trimspace(frm[fname4].options[frm[fname4].selectedIndex].value);
	msg = "";
	if (! empty_or_none(pkg) && (!isinteger(quantity) || quantity != 0) && isempty(diagram)) {
     		msg += descr3 + ' is required when ' + descr2 + ' is filled in\n';
	} else if (! isempty(quantity) && (!isinteger(quantity) || quantity != 0) && isempty(diagram)) {
     		msg += descr3 + ' is required when ' + descr1 + ' is filled in and not 0\n';
	}
	if (! isempty(quantity) && isinteger(quantity) && quantity != 0 && empty_or_none(pkg)) {
     		msg += descr2 + ' is required and cannot be "NONE" when ' + descr1 + ' is filled in and not 0\n';
	}
	if (isempty(quantity) && empty_or_none(pkg) && !isempty(diagram)) {
     		msg += descr3 + ' cannot be specified when ' + descr1 + ' and ' + descr2 + ' are empty or "NONE"\n';
	}
	if (isinteger(quantity) && quantity == 0 && !isempty(diagram)) {
     		msg += descr3 + ' cannot be specified when ' + descr1 + ' is 0\n';
	}
	if (pkg.toUpperCase() == "DEFAULT" && diagram == "CUSTOMER") {
     		msg += descr3 + ' cannot be CUSTOMER when ' + descr1 + ' is DEFAULT\n';
	}
	if (downbond != "" && downbond != "NONE") {
		if (empty_or_none(pkg)) {
     			msg += descr2 + ' is required and cannot be "NONE" when ' + descr4 + ' is not None\n';
		}
		if (diagram != "CUSTOMER") {
     			msg += descr3 + ' must be CUSTOMER when ' + descr4 + ' is not None\n';
		}
	}
	return msg;
}

function empty_or_none(s) {
	return (isempty(s) || s.toUpperCase() == "NONE" || s.toUpperCase() == "N/A");
}

function validQuantities(frm, fname1, descr1, fname2, descr2, fname3, descr3) {
	var packaged, unpackaged, ordered, msg;

	packaged = trimspace(frm[fname1].value).toUpperCase();
	unpackaged = trimspace(frm[fname2].value).toUpperCase();
	ordered = trimspace(frm[fname3].value);
	msg = "";
	if (packaged == "ALL" && unpackaged == "ALL") {
     		msg += descr1 + ' and ' + descr2 + ' cannot both be ALL\n';
	} else if (packaged == "ALL" && !isempty(unpackaged) && (!isinteger(unpackaged) || unpackaged != 0)) {
     		msg += descr2 + ' must be empty or 0 when ' + descr1 + ' is ALL\n';
	} else if (unpackaged == "ALL" && !isempty(packaged) && (!isinteger(packaged) || packaged != 0)) {
     		msg += descr1 + ' must be empty or 0 when ' + descr2 + ' is ALL\n';
	} else {
		if (isinteger(packaged) && isinteger(unpackaged) && packaged == 0 && unpackaged == 0) {
     			msg += descr1 + ' and ' + descr2 + ' cannot both be 0\n';
		}
		if (isinteger(packaged) && isinteger(ordered) && (packaged - 0 > ordered - 0)) {
     			msg += descr1 + ' (' + packaged + ') is greater than ' + descr3 + ' (' + ordered + ')\n';
		}
		if (isinteger(unpackaged) && isinteger(ordered) && (unpackaged - 0 > ordered - 0)) {
     			msg += descr2 + ' (' + unpackaged + ') is greater than ' + descr3 + ' (' + ordered + ')\n';
		}
		if (isinteger(packaged) && isinteger(unpackaged) && isinteger(ordered) && (packaged - 0 != ordered - 0 - unpackaged  - 0)) {
     			msg += "Sum of " + descr1 + ' (' + packaged + ') and ' + descr2 + ' (' + unpackaged + ') does not equal ' + descr3 + ' (' + ordered + ')\n';
		}
	}
	return msg;
}

function techIfLambda(frm, fname1, descr1, fname2, descr2) {
	var tech, lambda;

	tech = trimspace(frm[fname1].value);
	lambda = trimspace(frm[fname2].options[frm[fname2].selectedIndex].value);
	if (! isempty(lambda) && isempty(tech)) {
     		return "Value for " + descr2 + ' specified but ' + descr1 + ' is empty\n';
	} else {
     		return "";
	}
}

function topStructFormat(frm, fname1, descr1, fname2, descr2) {
	var topstruct, layoutformat;

	topstruct = trimspace(frm[fname1].value);
	layoutformat = trimspace(frm[fname2].options[frm[fname2].selectedIndex].value);
	if (layoutformat == "CIF" && ! isempty(topstruct)) {
     		return descr1 + ' must be empty when ' + descr2 + ' is CIF\n';
	} else if ((layoutformat == "GDS") && isempty(topstruct)) {
     		return descr1 + ' is required when ' + descr2 + ' is GDS\n';
	} else {
     		return "";
	}
}

function validSumCount(frm, fname1, descr1, fname2, descr2) {
	var val1, val2;

	val1 = trimspace(frm[fname1].value);
	val2 = trimspace(frm[fname2].value);
	if (isinteger(val1) && isinteger(val2) && (val1 >= 0) && (val2 >= 0) &&
	    ((val1 < (32 * val2)) || (val1 == 0 && val2 > 0))) {
     		return 'Value for ' + descr1 + ' (' + val1 + ') too small for ' + descr2 + ' of ' + val2 + '\n';
	} else {
     		return "";
	}
}

function validSum(frm, fname1, descr1, fname2, descr2, lowlim) {
	var val1, val2;

	val1 = trimspace(frm[fname1].value);
	val2 = trimspace(frm[fname2].value);
	if (isinteger(val1) && isinteger(val2) && (val1 + val2) < lowlim) {
     		return 'Value for ' + descr1 + ' (' + val1 + ') plus value for ' + descr2 + ' must be at least ' + lowlim + '\n';
	} else {
     		return "";
	}
}

function validHostName(frm, fname, descr) {
	var val, state;

	val = trimspace(frm[fname].value);
	if (isempty(val) || isValidHost(val)) {
     		return "";
	} else {
     		return 'Value "' + val + '" is not a valid ' + descr + '\n';
	}
}

function questionDescription(name) {
	var val, section, part, question, result;

	val = name.substring(1);
	section = val.substring (0, 5);
	part = val.substring (5, 6);
	question = val.substring (6);
	result = "Section " + section + ", part " + part;
	if (question != "") {
		result += ", question " + question;
	}
	return result;
}

function addHtml(m, fname) {
	if (m != "") {
		m = 'The form was not submitted.  Please correct the following errors and try again.\n\n' + m;
     		// m = '<html><body bgcolor="#ffffcc"><br /><center><h1>' + fname + ' Form Errors</h1></center><ul>' + m + '</ul><br />Use the Back button on your browser to return to the form for correction.</body></html>';
   	}
	return m;
}

function exclusiveFields(frm, fname1, fname2, fname3, msg1, msg2) {
	var val1, val2, val3;

	val1 = trimspace(frm[fname1].value);
	val2 = trimspace(frm[fname2].value);
	val3 = trimspace(frm[fname3].value);
	if (isempty(val1) && isempty(val2) && isempty(val3)) {
     		return msg1;
	} else if  ((!isempty(val1) && !isempty(val2)) ||
	            (!isempty(val1) && !isempty(val3)) ||
	            (!isempty(val2) && !isempty(val3))
	           ) {
     		return msg2;
	} else {
     		return "";
	}
}

function m_reset_element (id) {
    $('#'+id).html($('#'+id).html());
}

