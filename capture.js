let bank_info = "";
var db_bank_info = "XX00100 - XXX75678903";


bank_info = db_bank_info.replace(/-|\s/g, "");
bank_info = bank_info.replace(/^(.{2})(.{2})(.{2})(.{4})(.{4})(.*)$/, "XX-$2-$3-XXXX-$5");

console.log(bank_info); 

var make_it_like_this = 'XX-06-75-XXXX3379';