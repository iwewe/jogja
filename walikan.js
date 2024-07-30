function walik() {
    var result = walikString(document.f.original.value);
    document.f.kewalik.value = result;
}

function walikString(aString) {
    aString = aString.toLowerCase();
    var last = aString.length;
    var result = "";
    for (var i = 0; i < last ; i++) {
        var pertama = 'n';
        var keketelu = '';
        var ketelu = '';
        var mbalik = '';
        var mandeg = 'n';

        keketelu = aString.charAt(i);
        if (i == 0) {
            if (keketelu == 'a') {
                mbalik = 'pa';
                pertama = 'y';
                mandeg = 'y';
            }
            if (keketelu == 'e') {
                mbalik = 'pe';
                pertama = 'y';
                mandeg = 'y';
            }
            if (keketelu == 'i') {
                mbalik = 'pi';
                pertama = 'y';
                mandeg = 'y';
            }
            if (keketelu == 'o') {
                mbalik = 'po';
                pertama = 'y';
                mandeg = 'y';
            }
            if (keketelu == 'u') {
                mbalik = 'pu';
                pertama = 'y';
                mandeg = 'y';
            }
            if (keketelu == 'p') {
                mbalik = 'h';
                pertama = 'y';
                mandeg = 'y';
            }
        }

        if (i < last-1) {
            ketelu = aString.charAt(i+1);
            if (keketelu == 'n' && ketelu == 'y') {
                mbalik = 'k';
                pertama = 'y';
            }
            if (keketelu == 'n' && ketelu == 'g') {
                mbalik = 'l';
                pertama = 'y';
            }
            if (keketelu == 'd' && ketelu == 'h') {
                mbalik = 'n';
                pertama = 'y';
            }
            if (keketelu == 't' && ketelu == 'h') {
                mbalik = 'w';
                pertama = 'y';
            }
        }

        if (i == last-1) {
            if (keketelu == 't') {
                mbalik = 'n';
                pertama = 'y';
            }
        }

        if (pertama == 'y') {
            result += mbalik;
            if (mandeg == 'n')
                i++;
        } else {
            result += walikChar(aString.charAt(i));
        }
    }
    return result;
}

function walikChar(c) {
    if (c == 'a') {
        return 'a';
    } else if (c == 'ng') {
        return 'l';
    } else if (c == 'dh') {
        return 'n';
    } else if (c == 'th') {
        return 'w';
    } else if (c == 'ny') {
        return 'k';
    } else if (c == 'b') {
        return 's';
    } else if (c == 'c') {
        return 'j';
    } else if (c == 'd') {
        return 'm';
    } else if (c == 'e') {
        return 'e';
    } else if (c == 'f') {
        return 'h';
    } else if (c == 'g') {
        return 't';
    } else if (c == 'h') {
        return 'p';
    } else if (c == 'i') {
        return 'i';
    } else if (c == 'j') {
        return 'c';
    } else if (c == 'k') {
        return 'ny';
    } else if (c == 'l') {
        return 'ng';
    } else if (c == 'm') {
        return 'd';
    } else if (c == 'n') {
        return 'dh';
    } else if (c == 'o') {
        return 'o';
    } else if (c == 'p') {
        return 'h';
    } else if (c == 'q') {
        return 's';
    } else if (c == 'r') {
        return 'y';
    } else if (c == 's') {
        return 'b';
    } else if (c == 't') {
        return 'g';
    } else if (c == 'u') {
        return 'u';
    } else if (c == 'v') {
        return 'h';
    } else if (c == 'w') {
        return 'th';
    } else if (c == 'x') {
        return 'x';
    } else if (c == 'y') {
        return 'r';
    } else if (c == 'z') {
        return 'z';
    }
    return c;
}

function SelectAll(id) {
    document.getElementById(id).focus();
    document.getElementById(id).select();
}

document.f.original.focus();
