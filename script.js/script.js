let test = [
  {
    savollar: "hisooblang :2+4*8",
    variantlar: ["a.11", "b.34", "c.32", "d.64"],
    javobi: "b",
  },
  {
    savollar: "O'zbekiston poytaxti qayer",
    variantlar: ["a.Toshkent", "b.Samarqand", "c.Buxoro", "d.Xorazm"],
    javobi: "a",
  },
  {
    savollar: "Mustaqillik kunini ayting",
    variantlar: ["a.Ertaga", "b.1-oktabr", "c.1-sentabr", "d.31-avgust"],
    javobi: "c",
  },
  {
    savollar: "Ziynat opani qizini ismi nima",
    variantlar: ["a.Malika", "b.Zebiniso", "c.O'g'ilshod", "d.Shabbona"],
    javobi: "d",
  },
  {
    savollar: "Guruhimizda nechta talaba bor",
    variantlar: ["a.Aniq bilmiman", "b.30ta", "c.23ta", "d.to'gri javob yoq"],
    javobi: "a",
  },
];
let qoshimcha_savol = +prompt(
  "savol sonini kiriting kiritmasangiz 0 ni kiriting"
);
let question;
let obj;
for (let i = 0; i < qoshimcha_savol; i++) {
  obj = {
    savollar: prompt("savol kiriting"),
    variantlar: [],
    javobi: prompt("Togri javob qaysi"),
  };
  for (let i = 0; i < 4; i++) {
    question = prompt("variantlarini yozing");
    obj.variantlar.push(question);
  }
  test.push(obj);
}

let set_set = new Set();
let text_one = test.length;
let text_two;
let sum = 0;
do {
  sum = Math.floor(Math.random() * test.length);
  set_set.add(test[sum]);
  text_two = set_set.size;
} while (set_set.size != text_one);
let newarr = Array.from(set_set);

let ochko = 0;
for (let i = 0; i < test.length; i++) {
  let newarr = Array.from(set_set);
  let nimadir = prompt(
    newarr[i].savollar + "\n" + newarr[i].variantlar.join("\n")
  );

  if (nimadir == "exit" || nimadir == "cancel" || nimadir == "quit") {
    break;
  }
  if (
    nimadir == newarr[i].javobi ||
    nimadir == newarr[i].javobi.toUpperCase()
  ) {
    ochko++;
  }
  if (nimadir === null || nimadir === "") {
    alert("siz hech narsa yozmadingiz");
    i = i - 1;
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
// 1-o'zgarish,javob orniga hech narsa yozmasa keyingi savolga o'tmaydi
// 2-ozgarish yangi savol qosha oladi
// 3-ozgarish savollar almashadi
