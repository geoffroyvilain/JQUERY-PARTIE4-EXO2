/* Demander à l'aide d'un formulaire les 5 dernières notes d'un élève.
Calculer sa moyenne et déterminer son appréciation.
    Si la moyenne de l'élève est supérieure ou égale à 0 et inférieure à 10, il aura comme appréciation : "En dessous de la moyenne".
    Si la moyenne de l'élève est supérieure ou égale à 10 et inférieure à 13, il aura comme appréciation : "Moyen".
    Si la moyenne de l'élève est supérieure ou égale à 13 et inférieure à 16, il aura comme appréciation : "Bien".
    Si la moyenne de l'élève est supérieure ou égale à 16 et inférieure à 20, il aura comme appréciation : "Très bien".
    Si la moyenne de l'élève est égale à 20, il aura comme appréciation : "Excellent".
Afficher la moyenne et l'appréciation de l'élève.
*/
$(function(){
  $('#average').click(function(){
// On déclare les variables (de la 1ère à la 5ème note)(la somme et le calcul de la moyenne)
    var firstNote = $('#firstNote').val();
    var secondNote = $('#secondNote').val();
    var thirdNote = $('#thirdNote').val();
    var fourthNote = $('#fourthNote').val();
    var fifthNote = $('#fifthNote').val();
    var sum = parseInt(firstNote)+parseInt(secondNote)+parseInt(thirdNote)+parseInt(fourthNote)+parseInt(fifthNote);
    var average = sum/5;
//console.log('1ère note' + firstNote);
//console.log('somme =' + sum);
//si la moyenne est entre x et y alors .... sinon si ......
    if(average >=0 && average < 10){
    alert(average + ' : En dessous de la moyenne');
  }else if(average >= 10 && average < 13){
    alert(average + ' : Moyen');
  }else if(average >= 13 && average < 16){
    alert(average + ' : Bien');
  }else if(average >= 16 && average < 20){
    alert(average + ' : Trés bien');
  }else if(average == 20){
    alert(average + ' : Excellent');
//console.log('moyenne =' + average);
  }
});
});
