const phoneNumber = prompt("Введите номер телефона:");

function tekshirishPhoneNumber(number) {
    if (!number.startsWith("+998")) {
        return false; 
    }

    const validCodes = ["97", "88", "33"];
    const code = number.slice(4, 6); 
    return validCodes.includes(code);
}

if (tekshirishPhoneNumber(phoneNumber)) {
    console.log("рахмет");
    alert("рахмет");
} else {
    console.log("рахмат емас");
    alert("рахмат эмас");
}
function fn(x, y) {
    return {
        a: 8,           
        b: () => 5,      
        c: -12          
    };
}


const {a, b, c} = fn(4, 5);
console.log(a + (b() + c)); // 8 + (5 - 12) = 1

