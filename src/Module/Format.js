function tryParse(str) {
    let regex = /\d/

    if (regex.test(str)) {
        let res = parseInt(str)
        return res >= 0 ? res : 0
    }

    return 0;
}

export function format(e) {
    if (e >= 510) {
        return 510
    } else {
        let parsed = tryParse(e) <= 30 ? 30 : tryParse(e)
        let fixed = parsed % 30 === 0 ? parsed : 30
        return fixed
    }
}

export function generateHexCode(format) {
    let letters = format
    let hex = "#"

    for (let i = 0; i < 6; i++) {
        hex += letters[(Math.floor(Math.random() * letters.length))]; 
    }
    return hex
}

export function generateObfuscation(length) {
    let letters = "0̸͕̣̀̐͐͑̂̐̓̚̚1̴̺̔̽̽̀̎̀̏͛̎́̕̕̕͝2̶̡͉̻̯̦̣̗̖͉̲̤̑͂͂͌͋́͠ͅ3̸̧̫̲͎̜͌͂̆̀͗4̸̯͉̦͆̈́̇̾̂̅̕͝5̸̦͙́͊̄̓̏̓̽͐͐̉̚6̸̖͕͉̭̒̉͆̒7̷̨̭̬̜̥̭̮͚̩̦̔͛͐́̈͆8̶̙̲͓̙̲̮̗̳̰̹̠̈́̀͒̏̆̀̔͋̈́͘9̷̡̯̺͖̝͍̤̩̰̥̰̌̌̌͆̉͌͊̂̆̎͠"
    let num = ""

    for (let i = 0; i < length; i++) {
        num += letters[(Math.floor(Math.random() * letters.length))]; 
    }
    return num
}