/*
1. Ouvir o evendo de quando o user sair do campo de CEP
2. validar CEP
3. FAzer a busca no ViaCEP
*/

//passo 1
document.getElementById("cep").addEventListener("blur", (evento)=>{
    const elemento = evento.target;
    const cepInformado = elemento.value;

    //Passo 2Validar CEP
    if(!(cepInformado.length === 8)){ 
        return;
        //SE o CEP NÃO TIVER 8 caracteres = nao faça nada
    }

    //Passo 3
    // 3.1 promessa de que o fetch vai buscar este recurso
    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
        .then(response => response.json())
        .then(data => {
            //3.2 processamento da pagina
            if(!data.erro){
                document.getElementById('logradouro').value = data.logradouro;
                document.getElementById('bairro').value =data.bairro;
                document.getElementById('cidade').value =data.localidade;
                document.getElementById('estado').value = data.uf;
            }else{
                alert("CEP não encontrado.")
            }
        })
        .catch(error => console.error("Erro ao buscar o CEP: ", error));
})