module.exports = function toReadable (number) {
  let numberArray = String(number).split("");
  if( number >=0 && number <= 99 ){
  return numberToWord(numberArray)
  }
  if (number >= 100 && number <= 999) {
    return hundred(numberArray)
  }

  }

function numberToWord(numberArray) {
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    let summOfNumbers = numberArray.reduce(reducer);
    for (let i = 0; i <= numberArray.length - 1; ++i) {
       if (summOfNumbers >= 0 && summOfNumbers<=9) {
           switch (numberArray[i]) {
              case "0":
                  return ('zero');
               case "1":
                   return ('one');
               case "2":
                   return ('two');
               case "3":
                   return ('three');
               case "4":
                   return ('four');
               case "5":
                   return ('five');
               case "6":
                   return ('six');
               case "7":
                   return ('seven');
               case "8":
                   return ('eight');
               case "9":
                   return ('nine');
               default:
                   continue             
           }
       }
       if (numberArray.length == 2) {
         if ((summOfNumbers >= 10) && summOfNumbers <= 13 || summOfNumbers == 15) {
           switch (summOfNumbers) {
                case "10":
                   return ('ten');
                case "11":
                   return ('eleven');
                case "12":
                   return ('twelve');
                case "13":
                   return ('thirteen');
                case "15":
                   return ('fifteen');
               default:
                   continue
           }
       }
        if (summOfNumbers >= 14 && summOfNumbers != 15 && summOfNumbers != 13 && summOfNumbers <= 19) {
            if (numberArray[1] == 8){
              return numberToWord([numberArray[1]]) + "een"
            }
            return numberToWord([numberArray[1]]) + "teen"
        }
        if (summOfNumbers >= 20 && summOfNumbers <= 99) {
          if (numberArray[1] == 0) {
            switch (summOfNumbers) {
              case "20":
                return ('twenty');
              case "30":
                return ('thirty');
              case "40":
                return ('forty');
              case "50":
                return ('fifty');
              case "60":
                return ('sixty');
              case "70":
                return ('seventy');
              case "80":
                return ('eighty');
              case "90":
                return ('ninety');   
              default:
                break;
            }
          }
            return numberToWord([numberArray[0],"0"]) + ' ' + numberToWord([numberArray[1]])
        }
      }

   }
}

function hundred(numberArray) {
      let summOfLastNumbers = '';
      for (let i = 1; i <= numberArray.length - 1; i++) {
          summOfLastNumbers += numberArray[i];
      }
            if (summOfLastNumbers == 0) {
                return `${numberToWord([numberArray[0]])} hundred`
            }
            if (summOfLastNumbers >= 1 && summOfLastNumbers <= 9) {
                return `${numberToWord([numberArray[0]])} hundred ${numberToWord([summOfLastNumbers[1]])}`
            }
            if ((summOfLastNumbers >= 10) && summOfLastNumbers <= 13 || summOfLastNumbers == 15) {
                return `${numberToWord([numberArray[0]])} hundred ${numberToWord([numberArray[1],numberArray[2]])}`
            }
            if ((summOfLastNumbers >= 16) && (summOfLastNumbers <= 99) || summOfLastNumbers == 14) {
                return `${numberToWord([numberArray[0]])} hundred ${numberToWord([summOfLastNumbers[0],summOfLastNumbers[1]])}`
            }
}