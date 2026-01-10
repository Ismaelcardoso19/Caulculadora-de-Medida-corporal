

// fazer primeira função

function calcular() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const Idade = parseInt(document.getElementById('Idade').value);
    const sexo = document.getElementById('sexo').value;

    if (peso <= 0 || altura <= 0 || Idade <= 0) {
        document.querySelector('.infor-piscando').style.display = 'block';

        setTimeout(() => {
            document.querySelector('.infor-piscando').style.display = 'none';
        }, 3000);
    }

    if (!peso || !altura || !Idade) {
        document.querySelector('.infor-piscando').style.display = 'block';

        setTimeout(() => {
            document.querySelector('.infor-piscando').style.display = 'none';
        }, 3000);
        return;
    }

    const AlturaM = altura / 100;

    const imc = peso / (AlturaM * AlturaM);

    let categoriaIMC = '';
    if (imc < 18.5) {
        categoriaIMC = 'Abaixo do peso';
    } else if (imc < 25) {
        categoriaIMC = 'Peso normal';
    } else if (imc < 30) {
        categoriaIMC = 'Sobrepeso';
    } else {
        categoriaIMC = 'Obesidade';
    }
    // Peso Ideal Fórmula de Robinson

    let pesoCorreto;
    if (sexo === 'masculino') {
        pesoCorreto = 52 + (1.9 * ((altura - 152.4) / 2.54));
    } else {
        pesoCorreto = 49 + (1.7 * ((altura - 152.4) / 2.54));
    }
    // Taxa Metabólica Basal

    let tmb;
    if (sexo === 'masculino') {
        tmb = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * Idade);
    } else {
        tmb = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * Idade);
    }
    // Agora Vamos Exibir os resultados
    document.getElementById('resultados').innerHTML = `

    <div class="resultados-item">
    <strong>IMC :</strong>
    ${imc.toFixed(1)} - ${categoriaIMC}
    </div>

    <div class="resultados-item">
    <strong>Peso ideal:</strong>
    ${pesoCorreto.toFixed(1)} KG
    </div>

    <div class="resultados-item">
    <strong>Taxa Metabólica basal:</strong>
    ${tmb.toFixed(0)} Calorias/dia
    </div>

    <div class="resultados-item">
    <strong>Diferença do peso Ideal:</strong>
    ${(peso - pesoCorreto).toFixed(1)}KG
    </div>
    `;
    
    // Efeito fade-in nos resultados
    const resultados = document.getElementById('resultados');
    resultados.style.display = 'block';
    resultados.classList.remove('ativo');
    
    setTimeout(() => {
        resultados.classList.add('ativo');
    }, 25);
}