
function CopyResult(button: HTMLButtonElement)
{
    button.innerText = "Copied!";
    navigator.clipboard.writeText((<HTMLTextAreaElement>document.getElementById('result_text')).value);
}

let zalgoLevel = 3;
function slider_zalgoLevel(e: HTMLInputElement)
{
    document.getElementById("zalgo_level_text")!.textContent = "Zalgo level: " + e.value;
    zalgoLevel = Number(e.value);
}

let variableNameLength = 5;
function slider_variableLength(e: HTMLInputElement)
{
    document.getElementById("variable_name_length_text")!.textContent = "Variable name length: " + e.value;
    variableNameLength = Number(e.value);
}

function ShowOptions(show: boolean)
{
    document.getElementById("options_overlay")!.style.display = show ? "flex" : "none";
    document.getElementById("main_page")!.style.filter = show ? "blur(3px)" : "";
}

// unused, contains all characters which are combining / not standalone characters, but most of them cannot be shown together, you'll just see the character not found rectangle ▯ character
/* const validChars =
[
    "\u0300", "\u0301", "\u0303", "\u0304", "\u0305", "\u0307", "\u0309", "\u030a",
    "\u030d", "\u030e", "\u030f", "\u0310", "\u0311", "\u0312", "\u0313", "\u0314",
    "\u0315", "\u0316", "\u0317", "\u0318", "\u0319", "\u031a", "\u031b", "\u031c",
    "\u031d", "\u031e", "\u031f", "\u0320", "\u0321", "\u0322", "\u0323", "\u0324",
    "\u0325", "\u0327", "\u0328", "\u0329", "\u032a", "\u032b", "\u032c", "\u032d",
    "\u032e", "\u032f", "\u0330", "\u0331", "\u0332", "\u0333", "\u0334", "\u0335",
    "\u0336", "\u0337", "\u0338", "\u0339", "\u033a", "\u033b", "\u033c", "\u033d",
    "\u033e", "\u033f", "\u0340", "\u0341", "\u0342", "\u0343", "\u0345", "\u0346",
    "\u0347", "\u0348", "\u0349", "\u034a", "\u034b", "\u034c", "\u034d", "\u034e",
    "\u034f", "\u0350", "\u0351", "\u0352", "\u0353", "\u0354", "\u0355", "\u0356",
    "\u0357", "\u0359", "\u035a", "\u035b", "\u035c", "\u035d", "\u035e", "\u035f",
    "\u0360", "\u0361", "\u0362", "\u0363", "\u0364", "\u0365", "\u0366", "\u0367",
    "\u0368", "\u0369", "\u036a", "\u036b", "\u036c", "\u036d", "\u036e", "\u036f",
    "\u0483", "\u0484", "\u0485", "\u0486", "\u0592", "\u0593", "\u0594", "\u0595",
    "\u0597", "\u0598", "\u0599", "\u059a", "\u059c", "\u059d", "\u059e", "\u059f",
    "\u05a0", "\u05a1", "\u05a8", "\u05a9", "\u05ab", "\u05ac", "\u05ad", "\u05ae",
    "\u05af", "\u05b1", "\u05b2", "\u05b3", "\u05b4", "\u05b5", "\u05b6", "\u05b8",
    "\u05b9", "\u05ba", "\u05bb", "\u05bc", "\u05bf", "\u05c1", "\u05c2", "\u05c4",
    "\u05c7", "\u0610", "\u0611", "\u0612", "\u0613", "\u0614", "\u0615", "\u0616",
    "\u0617", "\u0618", "\u0619", "\u061a", "\u064b", "\u064c", "\u064d", "\u064e",
    "\u064f", "\u0650", "\u0651", "\u0652", "\u0653", "\u0654", "\u0655", "\u0656",
    "\u0657", "\u0658", "\u0659", "\u065a", "\u065b", "\u065c", "\u065d", "\u065e",
    "\u065f", "\u0670", "\u0674", "\u06d6", "\u06d7", "\u06d8", "\u06d9", "\u06da",
    "\u06db", "\u06dc", "\u06df", "\u06e0", "\u06e1", "\u06e2", "\u06e3", "\u06e4",
    "\u06e5", "\u06e6", "\u06e7", "\u06e8", "\u06ea", "\u06eb", "\u06ec", "\u06ed",
    "\u0711", "\u0730", "\u0731", "\u0732", "\u0733", "\u0734", "\u0735", "\u0736",
    "\u0737", "\u0738", "\u0739", "\u073a", "\u073b", "\u073c", "\u073d", "\u073e",
    "\u073f", "\u0740", "\u0741", "\u0742", "\u0743", "\u0744", "\u0745", "\u0746",
    "\u0747", "\u0748", "\u0749", "\u074a", "\u07a6", "\u07a7", "\u07a8", "\u07a9",
    "\u07aa", "\u07ab", "\u07ac", "\u07ad", "\u07ae", "\u07af", "\u07b0", "\u07eb",
    "\u07ec", "\u07ed", "\u07ee", "\u07ef", "\u07f0", "\u07f1", "\u07f2", "\u07f3",
    "\u08e4", "\u08e5", "\u08e6", "\u08e7", "\u08e8", "\u08e9", "\u08ea", "\u08eb",
    "\u08ec", "\u08ed", "\u08ee", "\u08ef", "\u08f0", "\u08f1", "\u08f2", "\u08f3",
    "\u08f4", "\u08f5", "\u08f6", "\u08f7", "\u08f8", "\u08f9", "\u08fa", "\u08fb",
    "\u08fc", "\u08fd", "\u08fe", "\u0e31", "\u0e34", "\u0e35", "\u0e36", "\u0e37",
    "\u0e38", "\u0e39", "\u0e3a", "\u0e47", "\u0e48", "\u0e49", "\u0e4a", "\u0e4b",
    "\u0e4c", "\u0e4d", "\u0e4e", "\u0eb1", "\u0eb4", "\u0eb5", "\u0eb6", "\u0eb7",
    "\u0eb8", "\u0eb9", "\u0ebb", "\u0ebc", "\u0ec8", "\u0ec9", "\u0eca", "\u0ecb",
    "\u0ecc", "\u0ecd", "\u0f19", "\u0f35", "\u0f37", "\u0f39", "\u0f71", "\u0f72",
    "\u0f73", "\u0f74", "\u0f75", "\u0f76", "\u0f77", "\u0f78", "\u0f79", "\u0f7a",
    "\u0f7b", "\u0f7c", "\u0f7d", "\u0f7e", "\u0f80", "\u0f81", "\u0f82", "\u0f83",
    "\u0f84", "\u0f86", "\u0f87", "\u0f8d", "\u0f8e", "\u0f8f", "\u0f90", "\u0f91",
    "\u0f92", "\u0f93", "\u0f94", "\u0f95", "\u0f96", "\u0f97", "\u0f99", "\u0f9a",
    "\u0f9b", "\u0f9c", "\u0f9d", "\u0f9e", "\u0f9f", "\u0fa0", "\u0fa1", "\u0fa2",
    "\u0fa3", "\u0fa4", "\u0fa5", "\u0fa6", "\u0fa7", "\u0fa8", "\u0fa9", "\u0faa",
    "\u0fab", "\u0fac", "\u0fad", "\u0fae", "\u0faf", "\u0fb0", "\u0fb1", "\u0fb2",
    "\u0fb3", "\u0fb4", "\u0fb5", "\u0fb6", "\u0fb7", "\u0fb8", "\u0fb9", "\u0fba",
    "\u0fbb", "\u0fbc", "\u0fc6", "\u135d", "\u135e", "\u135f", "\u17b4", "\u17b5",
    "\u17d2", "\u180b", "\u180c", "\u180d", "\u18a9", "\u1dc0", "\u1dc1", "\u1dc2",
    "\u1dc3", "\u1dc4", "\u1dc5", "\u1dc6", "\u1dc7", "\u1dc8", "\u1dc9", "\u1dca",
    "\u1dfe", "\u1dff", "\u200c", "\u200d", "\u2cef", "\u2cf0", "\u2cf1", "\u2d7f",
    "\u2de0", "\u2de1", "\u2de2", "\u2de3", "\u2de4", "\u2de5", "\u2de6", "\u2de7",
    "\u2de8", "\u2de9", "\u2dea", "\u2deb", "\u2dec", "\u2ded", "\u2dee", "\u2def",
    "\u2df0", "\u2df1", "\u2df2", "\u2df3", "\u2df4", "\u2df5", "\u2df6", "\u2df7",
    "\u2df8", "\u2df9", "\u2dfa", "\u2dfb", "\u2dfc", "\u2dfd", "\u2dfe", "\u2dff",
    "\ua66f", "\ua67c", "\ua67d", "\ufb1e", "\ufc5e", "\ufc5f", "\ufc60", "\ufc61",
    "\ufc62", "\ufc63", "\ufe00", "\ufe01", "\ufe02", "\ufe03", "\ufe04", "\ufe05",
    "\ufe06", "\ufe07", "\ufe08", "\ufe09", "\ufe0a", "\ufe0b", "\ufe0c", "\ufe0d",
    "\ufe0e", "\ufe0f",
];

shuffle(validChars);
*/

function shuffle<T>(array: Array<T>)
{
    let current = array.length;
    let temp;
    let rand;

    while (current !== 0)
    {
        rand = Math.floor(Math.random() * current);
        --current;

        temp = array[current];
        array[current] = array[rand];
        array[rand] = temp;
    }
}

function urand(min: number, max?: number)
{
    if (max === undefined)
        return Math.floor(Math.random() * min);
    
    return Math.floor(Math.random() * max - min) + min;
}

function RandomElementsOfStringArray(array: Array<string>, count: number)
{
    let ret = "";
    for (let i = 0; i < count; ++i)
        ret += array[urand(array.length)];

    return ret;
}

function RandomElementOf<T>(array: Array<T>)
{
    return array[urand(array.length)];
}

function IsValidName(name: string)
{
    try
    {
        eval("var " + name);
        return true;
    }
    catch (e)
    {
        return false;
    }
}

const zalgoCharsExtended =
[   
    "\u08f1", "\u0363", "\u0364", "\u0365", "\u0366", "\u0367", "\u0368", "\u0369",
    "\u036a", "\u036b", "\u036c", "\u036d", "\u036e", "\u036f", "\u0483", "\u0484",
    "\u0485", "\u0486", "\u0593", "\u0594", "\u0595", "\u0597", "\u0598", "\u059c",
    "\u059e", "\u059f", "\u05a0", "\u05a1", "\u05a8", "\u05a9", "\u05ab", "\u05ac",
    "\u05af", "\u05b5", "\u05c4", "\u0610", "\u0611", "\u0612", "\u0613", "\u0614",
    "\u0615", "\u0616", "\u0617", "\u0618", "\u0619", "\u061a", "\u0656", "\u0657",
    "\u0658", "\u065a", "\u065b", "\u065d", "\u065e", "\u065f", "\u0674", "\u06d6",
    "\u06d7", "\u06d8", "\u06d9", "\u06da", "\u06db", "\u06dc", "\u06df", "\u06e0",
    "\u06e1", "\u06e2", "\u06e3", "\u06e4", "\u06e7", "\u06e8", "\u06ea", "\u06eb",
    "\u06ec", "\u06ed", "\u08e4", "\u08e5", "\u08e6", "\u08e7", "\u08e8",
    "\u08e9", "\u08f0", "\u08f2", "\u08f3", "\u08f4", "\u08f5", "\u08f6", "\u08f7",
    "\u08f8", "\u08f9", "\u08fa", "\u08fb", "\u08fc", "\u08fd", "\u08fe", "\u0e31",
    "\u0e34", "\u0e35", "\u0e36", "\u0e37", "\u0e38", "\u0e39", "\u0e3a", "\u0e47",
    "\u0e48", "\u0e49", "\u0e4a", "\u0e4b", "\u0e4c", "\u0e4d", "\u0e4e", "\u0ec9",
    "\u0f19", "\u0f35", "\u0f37", "\u0f72", "\u0f7a", "\u0f7b", "\u0f7c", "\u0f7d",
    "\u0f80", "\u0f84", "\u1dc0", "\u1dc1", "\u1dc2", "\u1dc3", "\u1dc4", "\u1dc5",
    "\u1dc6", "\u1dc7", "\u1dc8", "\u1dc9", "\u1dca", "\u1dfe", "\u1dff", "\ufb1e",
    "\ufc5e", "\ufc5f", "\ufc60", "\ufc61", "\ufc62", "\ufc63"
];

// stolen from http://eeemo.net/
const zalgo_up =
[
    '\u030d', '\u030e', '\u0304', '\u0305', 
    '\u033f', '\u0311', '\u0306', '\u0310', 
    '\u0352', '\u0357', '\u0351', '\u0307', 
    '\u0308', '\u030a', '\u0342', '\u0343', 
    '\u0344', '\u034a', '\u034b', '\u034c', 
    '\u0303', '\u0302', '\u030c', '\u0350', 
    '\u0300', '\u0301', '\u030b', '\u030f', 
    '\u0312', '\u0313', '\u0314', '\u033d', 
    '\u0309', '\u0363', '\u0364', '\u0365', 
    '\u0366', '\u0367', '\u0368', '\u0369', 
    '\u036a', '\u036b', '\u036c', '\u036d', 
    '\u036e', '\u036f', '\u033e', '\u035b', 
    '\u0346', '\u031a'
];

const zalgo_down =
[
    '\u0316', '\u0317', '\u0318', '\u0319', 
    '\u031c', '\u031d', '\u031e', '\u031f', 
    '\u0320', '\u0324', '\u0325', '\u0326', 
    '\u0329', '\u032a', '\u032b', '\u032c', 
    '\u032d', '\u032e', '\u032f', '\u0330', 
    '\u0331', '\u0332', '\u0333', '\u0339', 
    '\u033a', '\u033b', '\u033c', '\u0345', 
    '\u0347', '\u0348', '\u0349', '\u034d', 
    '\u034e', '\u0353', '\u0354', '\u0355', 
    '\u0356', '\u0359', '\u035a', '\u0323'
];

const zalgo_mid =
[
    '\u0315', '\u031b', '\u0340', '\u0341', 
    '\u0358', '\u0321', '\u0322', '\u0327', 
    '\u0328', '\u0334', '\u0335', '\u0336', 
    '\u034f', '\u035c', '\u035d', '\u035e', 
    '\u035f', '\u0360', '\u0362', '\u0338', 
    '\u0337', '\u0361'
];

const standaloneChars = 
[
    "\u13B0", "\u13B1", "\u2C0D", "\u2CB2", 
    "\u2CBA", "\uA722", "\uA724", "\uA78B", 

    "\u02B9", "\u02BA", "\u02BB", "\u02BC",
    "\u02BD", "\u02BE", "\u02BF", "\u02C6",
    "\u02C7", "\u02C8", "\u02C9", "\u02CA",
    "\u02CB", "\u02CC", "\u02CE", "\u02CF",
    "\u02D0", "\u02D1", "\u02EC", "\u0374",
    "\u037A", "\u0559", "\u0640", "\u07F4",
    "\u07F5", "\u07FA", "\u0971", "\u1843",
    "\u1C78", "\u1C79", "\u1C7A", "\u1C7B",
    "\u1C7C", "\u1D54", "\u1D55", "\u2D6F",
    "\u3035", "\u3033", "\u309D",
    "\u30FC", "\u30FD", "\u30FE", "\uA4F8",
    "\uA4F9", "\uA4FA", "\uA4FB", "\uA4FC",
    "\uA4FD", "\uA67F", "\uA788", "\uFF70",
    "\uFF9E", "\uFF9F", "\uA9E6",
    "\u05D9", "\u05D5", "\u0621", "\u0629",
    "\u0647", "\u06C0", "\u06C1", "\u06C2",
    "\u06C3", "\u06D5", "\u0715", "\u0716",
    "\u0718", "\u0719", "\u071A", "\u071D",
    "\u0722", "\u072A", "\u072F", "\u074D",
    "\u075A", "\u0765", "\u0766", "\u0780",
    "\u0789", "\u0799", "\u079A", "\u07D1",
    "\u07EA", "\u0B83", "\u0B9F", "\u0CF2",
    "\u0E14", "\u0E15", "\u0E16", "\u0E23",
    "\u0E27", "\u0E32", "\u0E33", "\u0E40",
    "\u0E45", "\u0EB0", "\u0EB2",
    "\u0EC0", "\u0F44", "\u0F4B", "\u0F50",
    "\u0F54", "\u0F55", "\u0F56", "\u0F66",
    "\u113C", "\u113E", "\u1173", "\u119E",
    "\u11A2", "\u141D", "\u141F", "\u1420",
    "\u1425", "\u1426", "\u1427", "\u1428",
    "\u1429", "\u1449", "\u144A", "\u14BB",
    "\u14BC", "\u14BD", "\u14BE", "\u14D0",
    "\u1508", "\u1540", "\u153E",
];

const startingChars = 
[
    "\u02b9", "\u02ba", "\u02bb", "\u02bc", "\u02bd", "\u02be", "\u02bf", "\u02c6",
    "\u02c7", "\u02c8", "\u02cc", "\u02d1", "\u0374", "\u037a", "\u0559", "\u1843",
    "\u1c78", "\u1c79", "\u1c7a", "\u1c7c", "\u1d54", "\u1d55", "\u1da5",
    "\u309d", "\u30fd", "\ua4f8", "\ua4f9", "\ua4fa", "\ua4fb", "\ua4fc", "\ua4fd",
    "\ua67f", "\ua717", "\ua718", "\ua719", "\ua71a", "\ua788", "\uff9e", "\uff9f",
    "\ua9e6", "\u05d9", "\u0621", "\u0627", "\u0674", "\u06c0", "\u06c1", "\u06c2",
    "\u06c3", "\u06d5", "\u0715", "\u0716", "\u0719", "\u071d", "\u072a", "\u072f",
    "\u0780", "\u0787", "\u0789", "\u0799", "\u079a", "\u07a2", "\u07a3", "\u07d1",
    "\u07e8", "\u0eb2", "\u03b3", "\u0f44", "\u0f4b", "\u0f56", "\u0f8b", "\u141d",
    "\u141e", "\u141f", "\u1420", "\u1425", "\u1426", "\u1427", "\u1449", "\u14a1",
    "\u14a2", "\u14bb", "\u14bc", "\u14bd", "\u14d0", "\u14d2", "\u14ea", "\u1505",
    "\u1507", "\u1508", "\u1509", "\u150a", "\u153e", "\u1550", "\u155d", "\u156a",
    "\u1595", "\u159f", "\u15a6", "\u15ae", "\u1690", "\u1691", "\u1692", "\u1693",
    "\u1694", "\u16b2", "\u16cd", "\u16e7", "\u1822", "\u1823", "\u1824", "\u1825",
    "\u1826", "\u1827", "\u1829", "\u182b", "\u1830", "\u1831", "\u1832", "\u1833",
    "\u1834", "\u1835", "\u1836", "\u1837", "\u1838", "\u1839", "\u183a", "\u183b",
    "\u184d", "\u1855", "\u185f", "\u186a", "\u188f", "\u189c", "\u18a4", "\u18a5",
    "\u18a6", "\u18d9", "\u18da", "\u18de", "\u18df", "\u2d30", "\u2d3e", "\u2d42",
    "\u2d46", "\u2d48", "\u2d53", "\u2d57", "\u318d", "\u31b4", "\u31b5", "\u31b6"
];

shuffle(startingChars);

const baseChars = 
[
    "\u02b9", "\u02ba", "\u02bb", "\u02bc", "\u02bd", "\u02be", "\u02bf", "\u02c6",
    "\u02c7", "\u02c8", "\u02cc", "\u02d1", "\u0374", "\u037a", "\u0559", "\u1d54",
    "\u1d55", "\u1da5", "\ua4f8", "\ua4f9", "\ua4fa", "\ua4fb", "\ua4fc", "\ua4fd",
    "\ua67f", "\ua717", "\ua718", "\ua719", "\ua71a", "\ua788", "\u05d9", "\u0621",
    "\u0627", "\u0674", "\u06c0", "\u06c1", "\u06c2", "\u06c3", "\u06d5", "\u03b3"
];

const justLetters =
[
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F",
    "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
    "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

const charsThatWorkWithExtendedZalgo =
[
    "_", "o", "I", "x"
];
/*
const linesLetters = 
[
    "\u2C85", "\u2C93", "\u2CD1", "\u2CDF", "\uAB80", "\uAB81", "\uABAE", "\u13B0",
    "\u13B1", "\u13DE", "\u2C2C", "\u2C84", "\u2CC6", "\u2CD0", "\u0B9F", "\u1100",
    "\u1102", "\u1161", "\u1165", "\u1175", "\u1198", "\u11A8", "\u11AB", "\u14A3",
    "\u14A5", "\u14A7", "\u14AA", "\u16C1", "\u16CC", "\u16E7", "\u2D4F", "\u30FF",
    "\u3131", "\u3134", "\u314F", "\u3153", "\u3163"
];*/

const linesLetters = 
[
    "\u13B1", "\u13DD",
    "\u13DE", "\u13DF",
    "\u2C84", "\u2CA4",
    "\u2CB6", "\u2CBA",
    "\u2CD0", "\u2CDE",
    "\uA78B", "\u{10411}",
    "\u{10415}","\u{1041B}",
    "\u{10423}","\u{1D5A2}",
    "\u{1D5A8}","\u{1D5A9}",
    "\u{1D5AB}","\u{1D5D6}",
    "\u{1D5DC}","\u{1D5DD}",
    "\u{1D5DF}","\u{1D758}",
    "\u{1D75E}","\u{1D763}",
    "\u2C85", "\u2C93",
    "\u2CA5", "\u2CB7",
    "\u2CBB", "\u2CDF",
    "\uA78C", "\u{10439}",
    "\u{1043D}","\u{10443}",
    "\u{1044B}","\u{1D5C5}",
    "\u{1D5F9}","\uAB81",
    "\uABAE", "\uABAF",
    "\u02B9", "\u02BB",
    "\u02BC", "\u02BD",
    "\u02C8", "\u02C9",
    "\u02CA", "\u02CB",
    "\u02CC", "\u02CD",
    "\u02CE", "\u02CF",
    "\u0374", "\u0559",
    "\u07F4", "\u07F5",
    "\u1C7B", "\u1C7C",
    "\uA4F9", "\uA60C",
    "\uFF70", "\u01C0",
    "\u01C1", "\u0B9F",
    "\u1100", "\u1102",
    "\u115F", "\u1160",
    "\u1173", "\u1175",
    "\u119E", "\u11A1",
    "\u11A8", "\u11AB",
    "\u11FA", "\u1427",
    "\u1428", "\u1429",
    "\u1433", "\u1438",
    "\u1440", "\u1441",
    "\u1444", "\u1445",
    "\u1449", "\u144A",
    "\u14A3", "\u14A5",
    "\u14A7", "\u14AA",
    "\u14AC", "\u14AF",
    "\u14B2", "\u14B7",
    "\u1540", "\u167F",
    "\u16C1", "\u16CC",
    "\u16E7", "\u18B4",
    "\u18B5", "\u18B6",
    "\u18DE", "\u18DF",
    "\u1963", "\u2D4E",
    "\u2D4F", "\u30CB",
    "\u30FF", "\u3127",
    "\u3131", "\u3134",
    "\u3137", "\u3161",
    "\u3163", "\u318D",
    "\u318E",
    
    //"\uFF9E", "\uFF9F",
    
];

const linesLetters_compatibility = 
[
    "\u13b1", "\u13dd", "\u13de", "\u13df",
    "\u2c84", "\u2ca4", "\u2cb6", "\u2cba",
    "\u2cd0", "\u2cde", "\ua78b", "\u2c85",
    "\u2c93", "\u2ca5", "\u2cb7", "\u2cbb",
    "\u2cdf", "\ua78c", "\u02bb", "\u02bc",
    "\u02bd", "\u0559", "\u07f4", "\u07f5",
    "\u1c7b", "\u1c7c", "\ua60c", "\uff70",
    "\u01c0", "\u01c1", "\u0b9f", "\u1100",
    "\u1102", "\u115f", "\u1160", "\u1173",
    "\u1175", "\u119e", "\u11a1", "\u11a8",
    "\u11ab", "\u1427", "\u1428", "\u1429",
    "\u1433", "\u1438", "\u1440", "\u1441",
    "\u1444", "\u1445", "\u1449", "\u144a",
    "\u14a3", "\u14a5", "\u14a7", "\u14aa",
    "\u14ac", "\u14af", "\u14b2", "\u14b7",
    "\u1540", "\u16c1", "\u16cc", "\u16e7",
    "\u1963", "\u2d4e", "\u2d4f", "\u30cb",
    "\u30ff", "\u3127", "\u3131", "\u3134",
    "\u3137", "\u3161", "\u3163", "\u318d",
    "\u318e"
];

const iLetters = [ "\u0049", "\u0406", "\u0399" ];

function ToggleCustomizeMode(on: boolean)
{
    if (!on)
    {
        if (!CheckCustomCharacters())
            return;
    }

    document.getElementById("main_page")!.style.display = on ? "none" : "";
    document.getElementById("customize_page")!.style.display = on ? "" : "none";
}

let customChars: string[] = [];
let customStartingChars: string[] = [];
function CheckCustomCharacters()
{
    const startingChars = new Set<string>();
    const chars = new Set<string>();

    const invalidChars = new Set<string>();

    const allChars: string[] = [];
    const allStartingChars: string[] = [];

    const characters = (<HTMLTextAreaElement>document.getElementById("customize_text_area")).value.split("");

    for (let i = 0; i < characters.length; ++i)
    {
        const char = characters[i];

        if (char === "\n")
            continue;

        if (char === " " || char === ";")
        {
            invalidChars.add(char === " " ? " space" : char);
            continue;
        }

        if (invalidChars.has(char))
            continue;

        if (chars.has(char))
        {
            allChars.push(char);
            continue;
        }

        if (startingChars.has(char))
        {
            allStartingChars.push(char);
            continue;
        }

        try
        {
            eval("var " + char);
            startingChars.add(char);
            allStartingChars.push(char);
        }
        catch (e) { }

        try
        {
            eval("var a" + char);
            chars.add(char);
            allChars.push(char);
        }
        catch (e)
        {
            invalidChars.add(char);
        }
    }

    const invalidCharsDiv = document.getElementById("invalid_chars")!;
    if (invalidChars.size !== 0)
    {
        const codePointsDivText = Array.from(invalidChars).reduce((acc, curr) =>
        {
            const codePoint = curr.codePointAt(0);
            if (codePoint === undefined)
                return acc;
            
            return acc + "<div style='font-family: consolas; font-size: 20px; margin-top: 10px;'>U+"
                + codePoint.toString(16).toUpperCase().padStart(4, "0") + " <span class='invalid_char'>" + curr + "</span></div>";
        }, "");
        invalidCharsDiv.innerHTML = "<div style='margin-top: 10px;'>The following character" + (invalidChars.size === 1 ? "" : "s")
            + " cannot be used in variable names:</div>" +  codePointsDivText;

        invalidCharsDiv.style.display = "";
        return false;
    }
    else if (startingChars.size === 0 && chars.size !== 0)
    {
        invalidCharsDiv.innerHTML = "<div style='margin-top: 10px;'>There are no characters that are valid starting characters in variable names</div>";
        invalidCharsDiv.style.display = "";
        return false;
    }
    else
    {
        invalidCharsDiv.style.display = "none";

        customChars = allChars;
        customStartingChars = allStartingChars;

        return true;
    }
}

let variableNamesCharset = "zalgo";
function CharsetChanged(name: string)
{
    variableNamesCharset = name;
    document.getElementById("zalgo_level_slider_container")!.style.display = name === "zalgo" ? "" : "none";
    document.getElementById("custom_charset_customizer_button")!.style.display = name === "custom" ? "" : "none";
}

let isCompatibilityMode = false;
function CompatibilityModeChanged(on: boolean)
{
    (<HTMLOptionElement>document.getElementById("type_zalgo")).disabled = on;
    (<HTMLOptionElement>document.getElementById("type_space")).disabled = on;

    if (on)
    {
        const selector = <HTMLSelectElement>document.getElementById("charset_selector");
        const selectedValue = selector.value;
        if (selectedValue === "zalgo" || selectedValue === "space")
        {
            selector.value = "i";
            CharsetChanged("i");
        }
    }

    isCompatibilityMode = on;
}

let isDeobfuscationProtection = false;
function DeobfuscationProtectionChanged(on: boolean)
{
    isDeobfuscationProtection = on;
    document.getElementById("deobfuscation_protection_options")!.style.visibility = on ? "" : "hidden";
}

let deobfuscationProtectionMode = "skip"
function DeobfuscationProtectionModeChanged(mode: string)
{
    deobfuscationProtectionMode = mode;
}

let debugVarIndex = 0;
const debuggingVarNames = false;

function GetRandomString(len: number, allowLonger: boolean)
{
    if (debuggingVarNames)
        return "a_" + (debugVarIndex++);

    if (len === undefined)
    {
        const min = variableNameLength;
        const max = variableNameLength * 1.5;
        len = Math.floor(Math.random() * (max - min) + min);
    }
    
    let name = "";
    switch (variableNamesCharset)
    {
        case "zalgo":
            name = RandomElementOf(startingChars);
            while (name.length < len)
            {
                if (zalgoLevel === 0)
                {
                    name += RandomElementOf(standaloneChars);
                }
                else
                {
                    const chance = Math.random() * 100;
                    //name += standaloneChars[(standaloneChars.length * Math.random())<<0];
                    //continue;
                    if (chance < 90)
                    {
                        // add a random number of zalgo characters with a starting character
                        name += RandomElementOf(baseChars);
                            
                        const min = zalgoLevel;
                        const max = zalgoLevel * 1.5;
                        const diff = max - min;
                        
                        name += RandomElementsOfStringArray(zalgo_up, Math.floor(Math.random() * diff + min));
                        name += RandomElementsOfStringArray(zalgo_mid, Math.floor(Math.random() * diff + min));
                        name += RandomElementsOfStringArray(zalgo_down, Math.floor(Math.random() * diff + min));
                        continue;
                    }
                    else
                    {
                        // add a random extended zalgo character with a starting character
                        // well, the only character that works and is not a letter is _
                        //name += RandomElementOf(charsThatWorkWithExtendedZalgo);
                        name += "_";
                        const count = urand(zalgoLevel, zalgoLevel * 1.5);
                        const ch = RandomElementOf(zalgoCharsExtended);
                        
                        for (let j = 0; j < count; ++j)
                            name += ch;
                        
                        continue;
                    }
                }
            }
            break;
        case "lines":
            name = RandomElementsOfStringArray(isCompatibilityMode ? linesLetters_compatibility : linesLetters, len);
            break;
        case "space":
            name = "\u02cb";
            for (let i = 0; i < len; ++i)
                name += String.fromCharCode(0xfe00 + (Math.random() * 16) | 0);
            break;
        case "i":
            if (len === undefined)
                len = variableNameLength;
            
            name = RandomElementsOfStringArray(iLetters, len);
            break;
        case "custom":
            if (customStartingChars.length === 0)
            {
                alert("No custom characters set");
                throw new Error();
            }

            name = RandomElementsOfStringArray(customStartingChars, 1) + RandomElementsOfStringArray(customChars, len - 1);
            break;
        default:
            alert("unknown charset");
            throw new Error();
    }
    
    if (allowLonger)
        return name;
    else
    {
        const codePoint = name.codePointAt(len - 1);
        if (codePoint !== undefined && codePoint > 0xffff)
            return name.substr(0, len + 1);
        else
            return name.substr(0, len);
    }
}

const usedVariableNames = new Set();
function GetVarName()
{
    let name;
    
    const allowLongerName = (variableNamesCharset === "zalgo");
    let len;
    if (allowLongerName)
    {
        const min = variableNameLength;
        const max = variableNameLength * 1.5;
        len = Math.floor(Math.random() * (max - min) + min);
    }
    else
        len = variableNameLength;

    let breaker = 0;
    while (true)
    {
        name = GetRandomString(len, allowLongerName);
        ++breaker;
        if (!IsValidName(name))
        {
            //console.log("invalid name (should not happen): " + name);
            continue;
        }
        
        if (!usedVariableNames.has(name))
        {
            usedVariableNames.add(name);
            return name;
        }
        
        if (breaker > 100)
        {
            if (variableNamesCharset === "custom")
                alert("Cannot get a variable name, try adding more custom characters or increase the variable name length");
            else
                alert("Cannot get a variable name, try increasing the variable name length");

            throw new Error();
        }
    }
}

function GetIntFromBits(number: number, i0: string, i1: string, i2: string, i4: string, i8: string, i16: string, i32: string, i64: string,
    i128: string, i256: string, i512: string, i1024: string, i2048: string, i4096: string, i8192: string, i16384: string, i32768: string)
{
    if (number === 0)
        return i0;
    
    const ret: string[] = [];
    
    if (number & 1) ret.push(i1);
    
    number >>= 1;
    if (number & 1) ret.push(i2);
    
    number >>= 1;
    if (number & 1) ret.push(i4);
    
    number >>= 1;
    if (number & 1) ret.push(i8);
    
    number >>= 1;
    if (number & 1) ret.push(i16);
    
    number >>= 1;
    if (number & 1) ret.push(i32);
    
    number >>= 1;
    if (number & 1) ret.push(i64);
    
    number >>= 1;
    if (number & 1) ret.push(i128);
    
    number >>= 1;
    if (number & 1) ret.push(i256);
    
    number >>= 1;
    if (number & 1) ret.push(i512);
    
    number >>= 1;
    if (number & 1) ret.push(i1024);
    
    number >>= 1;
    if (number & 1) ret.push(i2048);
    
    number >>= 1;
    if (number & 1) ret.push(i4096);
    
    number >>= 1;
    if (number & 1) ret.push(i8192);
    
    number >>= 1;
    if (number & 1) ret.push(i16384);
    
    number >>= 1;
    if (number & 1) ret.push(i32768);
    
    shuffle(ret);
    return ret.join("+");
}

function button()
{
    const text = (<HTMLTextAreaElement>document.getElementById("text_area")).value;
    if (text === "")
    {
        alert("shit's empty, yo");
        return;
    }
    
    usedVariableNames.clear();
    
    let result = "(" + (isCompatibilityMode ? "function()" : "()=>") + "{var ";
    
    const v_number_0 = GetVarName();
    const v_number_1 = GetVarName();
    const v_number_2 = GetVarName();
    const v_number_4 = GetVarName();
    const v_number_8 = GetVarName();
    const v_number_16 = GetVarName();
    const v_number_32 = GetVarName();
    const v_number_64 = GetVarName();
    const v_number_128 = GetVarName();
    const v_number_256 = GetVarName();
    const v_number_512 = GetVarName();
    const v_number_1024 = GetVarName();
    const v_number_2048 = GetVarName();
    const v_number_4096 = GetVarName();
    const v_number_8192 = GetVarName();
    const v_number_16384 = GetVarName();
    const v_number_32768 = GetVarName();
    
    // we generate variables for each letter
    const letters: { [index: string]: [string, string] } = {};
    
    function GetNumber(num: number)
    {
        return GetIntFromBits(num,
            v_number_0, v_number_1, v_number_2, v_number_4, v_number_8, v_number_16, v_number_32,
            v_number_64, v_number_128, v_number_256, v_number_512, v_number_1024, v_number_2048,
            v_number_4096, v_number_8192, v_number_16384, v_number_32768)
    }

    for (let i = 0; i < text.length; ++i)
    {
        const ch = text.charCodeAt(i);
        if (ch in letters)
            continue;

        const variableName = GetVarName();
        letters[ch] = [variableName + "=" + GetNumber(ch), variableName];
    }

    const allowLongerName = (variableNamesCharset === "zalgo");

    result += v_number_0 + "='" + GetRandomString(variableNameLength, allowLongerName) + "'&'" + GetRandomString(variableNameLength, allowLongerName) + "',";
    result += v_number_1 + "=-~'" + GetRandomString(variableNameLength, allowLongerName) + "',";
    result += v_number_2 + "=" + v_number_1 + "-~'" + GetRandomString(variableNameLength, false) + "',";
    result += v_number_4 + "=" + v_number_2 + "+" + v_number_2 + ",";
    result += v_number_8 + "=" + v_number_4 + "*" + v_number_2 + ",";
    result += v_number_16 + "=" + v_number_2 + "*" + v_number_4 + "*" + v_number_2 + ",";
    result += v_number_32 + "=" + v_number_8 + "*" + v_number_4 + ",";
    result += v_number_64 + "=" + v_number_4 + "*" + v_number_16 + ",";
    result += v_number_128 + "=" + v_number_8 + "*" + v_number_2 + "*" + v_number_8 + ",";
    result += v_number_256 + "=" + v_number_64 + "*" + v_number_4 + ",";
    result += v_number_512 + "=" + v_number_8 + "*" + v_number_64 + ",";
    result += v_number_1024 + "=" + v_number_4 + "*" + v_number_256 + ",";
    result += v_number_2048 + "=" + v_number_64 + "*" + v_number_32 + ",";
    result += v_number_4096 + "=" + v_number_256 + "*" + v_number_16 + ",";
    result += v_number_8192 + "=" + v_number_8 + "*" + v_number_1024 + ",";
    result += v_number_16384 + "=" + v_number_32 + "*" + v_number_512 + ",";
    result += v_number_32768 + "=" + v_number_4 + "*" + v_number_8192 + ",";
    
    // "acCdefghilmnoprsStuv. "  <- we need these characters

    // "false" = !1+[]
    const v_string_false = GetVarName();
    result += v_string_false + "=!" + v_number_1 + "+[],";
    
    // f = "false"[0]
    const v_char_f = GetVarName();
    result += v_char_f + "=" + v_string_false + "[" + v_number_0 + "],";
    
    // "undefined" = "f"[1]+[]
    const v_string_undefined = GetVarName();
    result += v_string_undefined + "=" + v_char_f + "[" + v_number_1 + "]+[],";
    
    // a = "false"[1]
    const v_char_a = GetVarName();
    result += v_char_a + "=" + v_string_false + "[" + v_number_1 + "],";
    
    // l = "false"[2]
    const v_char_l = GetVarName();
    result += v_char_l + "=" + v_string_false + "[" + v_number_2 + "],";
    
    // s = "false"[3]
    const v_char_s = GetVarName();
    result += v_char_s + "=" + v_string_false + "[" + v_number_2 + "+" + v_number_1 + "],";
    
    // e = "false"[4]
    const v_char_e = GetVarName();
    result  += v_char_e + "=" + v_string_false + "[" + v_number_4 + "],";
    
    // i = "undefined"[5]
    const v_char_i = GetVarName();
    result += v_char_i + "=" + v_string_undefined + "[" + v_number_4 + "+" + v_number_1 + "],";
    
    // "[object Object]"
    const v_string_object_object = GetVarName();
    result += v_string_object_object + "=[]+{},";
    
    // c = "[object Object]"[5]
    const v_char_c = GetVarName();
    result += v_char_c + "=" + v_string_object_object + "[" + v_number_4 + "+" + v_number_1 + "],";

    // b = "[object Object]"[2]
    const v_char_b = GetVarName();
    result += v_char_b + "=" + v_string_object_object + "[" + v_number_2 + "],"
    
    // u = "undefined"[0]
    const v_char_u = GetVarName();
    result += v_char_u + "=" + v_string_undefined + "[" + v_number_0 + "],";
    
    // n = "undefined"[1]
    const v_char_n = GetVarName();
    result += v_char_n + "=" + v_string_undefined + "[" + v_number_1 + "],";
    
    // t = (!0+[])[0]
    const v_char_t = GetVarName();
    result += v_char_t + "=(!" + v_number_0 + "+[])[" + v_number_0 + "],";
    
    // o = "[object Object]"[1]
    const v_char_o = GetVarName();
    result += v_char_o + "=" + v_string_object_object + "[" + v_number_1 + "],";
    
    // space = "[object Object]"[7]
    const v_char_space = GetVarName();
    result += v_char_space + "=" + v_string_object_object + "[" + v_number_8 + "-" + v_number_1 + "],";
    
    // d = "undefined"[2]
    const v_char_d = GetVarName();
    result += v_char_d + "=" + v_string_undefined + "[" + v_number_2 + "],";
    
    // r = (!0+[])[1]
    const v_char_r = GetVarName();
    result += v_char_r + "=(!" + v_number_0 + "+[])[" + v_number_1 + "],";
    
    // "constructor"
    const v_string_constructor = GetVarName();
    result += v_string_constructor + "=" + [v_char_c, v_char_o, v_char_n, v_char_s, v_char_t, v_char_r, v_char_u, v_char_c, v_char_t, v_char_o, v_char_r, ].join("+") + ",";
    
    // []["filter"]
    const v_function_filter = GetVarName();
    result += v_function_filter + "=[][" + [v_char_f, v_char_i, v_char_l, v_char_t, v_char_e, v_char_r].join("+") + "],";

    // []["filter"]["constructor"]
    const v_function_function = GetVarName();
    result += v_function_function + "=" + v_function_filter + "[" + v_string_constructor + "],";

    // []["filter"]["constructor"]("return btoa")()
    const v_function_btoa = GetVarName();
    result += v_function_btoa + "=" + v_function_function + "(" + [v_char_r, v_char_e, v_char_t, v_char_u, v_char_r, v_char_n, v_char_space, v_char_b, v_char_t, v_char_o, v_char_a].join("+") + ")(),";

    // S = btoa("a ")[1]
    const v_char_S = GetVarName();
    result += v_char_S + "=" + v_function_btoa + "(" + v_char_a + "+" + v_char_space + ")[" + v_number_1 + "],";
    
    // g = btoa("b")[1]
    const v_char_g = GetVarName();
    result += v_char_g + "=" + v_function_btoa + "(" + v_char_b + ")[" + v_number_1 + "],";
    
    // . = (+("16e32")+[])[1]
    const v_char_dot = GetVarName();
    result += v_char_dot + "=(+(" + v_number_16 + "+" + v_char_e + "+" + v_number_32 + ")+[])[" + v_number_1 + "],";
    
    // "toString"
    const v_string_toString = GetVarName();
    result += v_string_toString + "=" + [v_char_t, v_char_o, v_char_S, v_char_t, v_char_r, v_char_i, v_char_n, v_char_g].join("+") + ",";
    
    // v = (32-1)["toString"](32)
    const v_char_v = GetVarName();
    result += v_char_v + "=(" + v_number_32 + "-" + v_number_1 + ")[" + v_string_toString + "](" + v_number_32 + "),";
    
    // p = (16+8+1)["toString"](32)
    const v_char_p = GetVarName();
    result += v_char_p + "=(" + v_number_1 + "+" + v_number_8 + "+" + v_number_16 + ")[" + v_string_toString + "](" + v_number_32 + "),";
    
    // []["filter"]["constructor"]("return eval")()
    const v_function_eval = GetVarName();
    result += v_function_eval + "=" + v_function_function + "(" + [v_char_r, v_char_e, v_char_t, v_char_u, v_char_r, v_char_n, v_char_space, v_char_e, v_char_v, v_char_a, v_char_l].join("+") + ")(),";
    
    // S = btoa("d ")[1]
    const v_char_C = GetVarName();
    result += v_char_C + "=" + v_function_btoa + "(" + v_char_d + "+" + v_char_space + ")[" + v_number_1 + "],";
    
    // m = btoa("ba")[1]
    const v_char_m = GetVarName();
    result += v_char_m + "=" + v_function_btoa + "(" + v_char_b + "+" + v_char_a + ")[" + v_number_1 + "],";
    
    // h = (17)["toString"](32)
    const v_char_h = GetVarName();
    result += v_char_h + "=(" + v_number_16 + "+" + v_number_1 + ")[" + v_string_toString + "](" + v_number_32 + "),";
    
    // ''["constructor"]["fromCharCode"]
    const v_function_stringFromCharCode = GetVarName();
    result += v_function_stringFromCharCode + "=''[" + v_string_constructor + "][" + [v_char_f, v_char_r, v_char_o, v_char_m, v_char_C, v_char_h, v_char_a, v_char_r, v_char_C, v_char_o, v_char_d, v_char_e].join("+") + "],";
    
    let v_bool_deobfuscationOk;
    if (isDeobfuscationProtection)
    {
        let current = "";
        const dummyString = GetRandomString(variableNameLength, allowLongerName);
        const v_string_dummyString = GetVarName();
        current += v_string_dummyString + "='" + dummyString + "',";

        const v_function_deobfuscationProtection = GetVarName();
        const functionStart = isCompatibilityMode ? "function()" : "()=>";
        current += v_function_deobfuscationProtection + "=" + functionStart + "{'" + dummyString + "'},";

        // how this works:
        // deobfuscators usually format the code to make it more readable
        // so we create a dummy function which will be surely formatted
        // but in javascript, you can convert functions to a string, and if you convert a user-defined function to string, you'll get back the exact string representation of the function
        // we can detect this and do stuff if we want

        if (deobfuscationProtectionMode === "skip")
        {
            v_bool_deobfuscationOk = GetVarName();
            current += v_bool_deobfuscationOk + "=(" + v_function_deobfuscationProtection + "+[])["
                + [v_char_s, v_char_u, v_char_b, v_char_s, v_char_t, v_char_r].join("+")
                + "](" + GetNumber(functionStart.length + 2) + "," + GetNumber(dummyString.length) + ")==" + v_string_dummyString + ",";
        }
        else
        {
            const v_string_otherFunctionName = GetVarName();
            const v_string_param1_deobfuscationProtection = GetVarName();

            current += v_string_otherFunctionName + "=" + v_function_function + "('" + v_string_param1_deobfuscationProtection + "',";

            function GetCharCodes(str: string)
            {
                const charCodes = str.split("").map(char => char.charCodeAt(0));
                return v_function_stringFromCharCode + "(" + charCodes.map(charCode => GetNumber(charCode))
                    .join(",") + ")";
            }

            if (deobfuscationProtectionMode === "error")
                current += GetCharCodes("function z(){" + v_string_param1_deobfuscationProtection + "!='" + dummyString + "'&&z()}z()");
            else if (deobfuscationProtectionMode === "loop")
                current += GetCharCodes("if(" + v_string_param1_deobfuscationProtection + "!='" + dummyString + "')for(;;){}");
            else
                throw new Error("Unknown deobfuscation protection mode");

            current += ")((" + v_function_deobfuscationProtection + "+[])["
                + [v_char_s, v_char_u, v_char_b, v_char_s, v_char_t, v_char_r].join("+")
                + "](" + GetNumber(functionStart.length + 2) + "," + GetNumber(dummyString.length) + ")),";
        }

        result += current;
    }

    const finalLetters = [];
    const letterVariableNames: { [key: string]: string } = {};
    for (let i in letters)
    {
        finalLetters.push(letters[i][0]);
        letterVariableNames[i] = letters[i][1];
    }
    
    shuffle(finalLetters);
    
    result += finalLetters.join(",") + ";";
    
    if (isDeobfuscationProtection && deobfuscationProtectionMode === "skip")
    {
        result += v_bool_deobfuscationOk + "&&";
    }

    result += v_function_function + "(";
    
    // maximum number of function arguments is limited (65535 on chrome), so for long texts, we need to split up the process.
    // batchCount tells that how many arguments we use for a function call
    // 4096 should be fine on all browsers
    // and also add random count at a time
    const batchCount = 4096;
    const batchData = [];
    let textIndex = 0;
    while (textIndex < text.length)
    {
        let currentText = v_function_stringFromCharCode + "(";
        
        const finalTextAssembled = [];
        const target = Math.min(textIndex + batchCount * (Math.random() * 0.5 + 0.5) | 0, text.length);
        
        for (; textIndex < target; ++textIndex)
            finalTextAssembled.push(letterVariableNames[text.charCodeAt(textIndex)]);
        
        currentText += finalTextAssembled.join(",");
        currentText += ")";
        
        batchData.push(currentText);
    }
    result += batchData.join("+");
    result += ")()";
    result += "})()";
    (<HTMLTextAreaElement>document.getElementById("result_text")).value = result;
}
