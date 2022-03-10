
var nomes = ["Minha Família", "Elizabeth Naveca", "André Mateus", "André Naveca"];
var  imagens = ["Family.jpeg", "Mom.jpeg", "AndreMateus.jpeg", "Father.jpeg"];
var i = 0;
function update()
{
i++;
var numbersOFFamilyMemberInArray = 4;
if(i >=numbersOFFamilyMemberInArray)
{
    i = 0;
}
var updatedImage = imagens[i];
var updatedName = nomes[i];
document.getElementById("FamilyImage").src = updatedImage;
document.getElementById("FamilyName").innerHTML = updatedName;
}
