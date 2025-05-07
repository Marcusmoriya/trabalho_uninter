document.addEventListener("DOMContentLoaded", function(){

   const butao= document.getElementById("butao");
   const mensagem = document.getElementById("mensagem");
   const frase = "Uma coisa é necessário ter ou um espírito leve por natureza ou um espírito aliviado pela arte e pelo saber (Nietzsche)"

 butao.addEventListener("click", function(){

    mensagem.textContent = frase
 });

});