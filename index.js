// Write your code in this file!
function scuberGreetingForFeet(ft) {
  switch (true) {
    case ft <=400:
      return 'This one is on me!'
      break;
    case (ft > 2000 && ft <= 2500):
      return 'I will gladly take your thirty bucks.'
      break;
    case ft > 2500:
      return 'No can do.'
      break;
    default:
  }
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.'
      break;
    case 'not as generous':
      return 'Thank you.'
      break;
    default:
      return 'Bye.'
  }
}
