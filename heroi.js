function atacar(tipo) {
    let ataque;

    switch (tipo) {
        case 'mago':
            ataque = 'magia';
            break;
        case 'guerreiro':
            ataque = 'uma espada';
            break;
        case 'monge':
            ataque = 'artes marciais';
            break;
        case 'ninja':
            ataque = 'uma shuriken';
            break;
        default:
            ataque = 'não realizou nenhum ataque';
    }

    const resultado = `${tipo} atacou usando ${ataque}`;
    document.getElementById('hero-result').textContent = resultado;

    const resultDiv = document.getElementById('result');
    resultDiv.classList.remove('hidden');
}
