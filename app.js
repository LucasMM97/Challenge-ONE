function codificar() {
    let texto = document.getElementById('texto').value;
    let chave = parseInt(document.getElementById('chave').value);
    let textoCodificado = '';

    for (let i = 0; i < texto.length; i++) {
        let char = texto.charCodeAt(i);
        let novoChar = char + chave;
        textoCodificado += String.fromCharCode(novoChar);
    }

    document.getElementById('resultado').innerText = textoCodificado;
}

function decodificar() {
    let texto = document.getElementById('texto').value;
    let chave = parseInt(document.getElementById('chave').value);
    let textoDecodificado = '';

    for (let i = 0; i < texto.length; i++) {
        let char = texto.charCodeAt(i);
        let novoChar = char - chave;
        textoDecodificado += String.fromCharCode(novoChar);
    }

    document.getElementById('resultado').innerText = textoDecodificado;
}
