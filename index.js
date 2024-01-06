// 1- stringni input sifatida qabul qiladigan va stringni teskari tartibda qaytaradigan funksiya

// function teskariTartib(str) {
//   let teskari = str.split("").reverse().join("");
//   //  let teskari =  str.split("").reverse().join("");
//   return teskari;
// }
// let berilganStr = "Shukurullo";
// let teskariSoz = teskariTartib(berilganStr);
// console.log(`Teskari tartibdagi natija: ${teskariSoz}`);

// 2-gapdagi eng uzun so'zni toping va qaytaring

// function engUzunSoz(soz) {
//   let sozArray = soz.split(" ");
//   let uzunSoz = sozArray[0];
//   for (let i = 1; i < sozArray.length; i++) {     //     //ichma ich
//     if (sozArray[i].length > uzunSoz.length) {
//       uzunSoz = sozArray[i];
//     }
//   }
//   return uzunSoz;
// }

// console.log(engUzunSoz("My surname is Mirzaakhmedov,Mirzaakhmedov"));

// 3-unli harflar sonini topuvchi funksiya yozing

// function unlilarSoni(text) {
//   let counter = 0;
//   let unlilar = ["a", "e", "i", "o", "u"];
//   for (let i = 0; i < text.length; i++) {
//     let unli = text[i];
//     if (unlilar.includes(unli)) {
//       counter++;
//     }
//   }
//   return counter;
// }
// let inputText = "Do you like sport";
// let unlilarsoni = unlilarSoni(inputText);
// console.log(unlilarsoni);

// // to'rtinchi masala
// function isPalindrome(text) {
//    let cleanText = text.replace('').toLowerCase();
//    let reversedText = cleanText.split('').reverse().join('');
//    return cleanText === reversedText;
//  }
//  let inputText = 'salom, turkiya, fargona, radar';
//  let Palindromic = isPalindrome(inputText);
//  console.log('palindrome:', Palindromic);

// 5-arraydan dublikatlarni ochiradigan funksiya yozing

function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }
  
  console.log(removeDuplicates([47,22,15,22,45,15,12,10,47,]));
// 6. So‘zlarni bosh harf bilan yozing.
// function capitalizeWords(sentence) {
//   let words = sentence.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substring(1);
//   }
//   return words.join(" ");
// }

// console.log(capitalizeWords("my name is shukurullo"));

// 8. Massivni aylantirish:

function shiftArray(arr, k) {
    for (let i = 0; i < k; i++) {
      arr.unshift(arr.pop());
    }
    return arr;
  }
  
  console.log(shiftArray([1, 2, 3, 4, 5],3));
  
