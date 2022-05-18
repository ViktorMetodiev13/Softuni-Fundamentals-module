function decrypt(input) {
    let count = input.shift()
    let regexp1 = /((.){1,})>(\d{3})\|([a-z]{3})\|([A-Z]{3})\|([^<>]{3})<\1/gm
    let regexp2 = /((.){1,})>(\d{3})\|([a-z]{3})\|([A-Z]{3})\|([^<>]{3})<\1/gm

    for (let i = 0; i < count; i++) {
        let execute;
        let currentLine = input[i];
        let match = currentLine.match(regexp1);

        if (match == null) {
            console.log(`Try another password!`)
            continue;
        }

        if (match[0] == currentLine) {
            execute = regexp2.exec(input)
            console.log(`Password: ${execute[3]}${execute[4]}${execute[5]}${execute[6]}`)
        } else {
            console.log(`Try another password!`)
            execute = regexp2.exec(input)
        }
    }
}

decrypt(["3",
    "##>00|no|NO|!!!?<###",
    "##>123|yes|YES|!!!<##",
    "$$<111|noo|NOPE|<<>$$"])

console.log('----------------');

decrypt(["5",
    "aa>111|mqu|BAU|mqu<aa",
    "()>111!aaa!AAA!^&*<()",
    "o>088|abc|AAA|***<o",
    "asd>asd|asd|ASD|asd<asd",
    "*>088|zzzz|ZzZ|123<*"])

