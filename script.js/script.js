let test = [
  {
    savollar: "hisooblang :2+4*8",
    variantlar: ["11", "34", "32", "64"],
    javobi: "34",
  },
  {
    savollar: "O'zbekiston poytaxti qayer",
    variantlar: ["Toshkent", "Samarqand", "Buxoro", "Xorazm"],
    javobi: "Toshkent",
  },
  {
    savollar: "Mustaqillik kunini ayting",
    variantlar: ["Ertaga", "1-oktabr", "1-sentabr", "31-avgust"],
    javobi: "1-sentabr",
  },
  {
    savollar: "Ziynat opani qizini ismi nima",
    variantlar: ["Malika", "Zebiniso", "O'g'ilshod", "Shabbona"],
    javobi: "Shabbona",
  },
  {
    savollar: "Guruhimizda nechta talaba bor",
    variantlar: ["Aniq bilmiman", "30ta", "23ta", "to'gri javob yoq"],
    javobi: "Aniq bilmiman",
  },
];
let ochko = 0;
for (let i = 0; i < test.length; i++) {
  let nimadir = prompt(test[i].savollar + "\n" + test[i].variantlar.join("\n"));
  if (nimadir == test[i].javobi || nimadir == test[i].javobi.toUpperCase()) {
    ochko++;
  }
  if (nimadir == "exit" || nimadir == "cancel" || nimadir == "quit") {
    break;
  }
  if (nimadir == test[i].javobi || nimadir == test[i].javobi.toUpperCase()) {
    ochko++;
  }
  if (nimadir === null || nimadir === "") {
    alert("siz hech narsa yozmadingiz");
    continue;
  }
}

alert(
  " Siz " +
    test.length +
    " ta  savoldan " +
    ochko +
    " tasiga javob berdingiz va " +
    ochko * 5 +
    " ballga ega bo'ldingiz "
);
