function onload() {

    const dtAtual = new Date();
    document.getElementById("anal_impl").innerText = "jan de 2019 - ago de 2020 - " + calcularTempo(2019, 0, 2020, 8)
    document.getElementById("anal_soft").innerText = "ago de 2020 - nov de 2020 - " + calcularTempo(2020, 7, 2020, 11)
    document.getElementById("dev").innerText = "nov de 2020 - o momento - " + calcularTempo(2020, 10, dtAtual.getFullYear(), dtAtual.getMonth())
}

function calcularTempo(yearIni, monthIni, yearFin, monthFin) {
    const dataAtual = new Date(yearFin, monthFin);
    const dataInicial = new Date(yearIni, monthIni);

    // Calculando a diferença de meses
    const diferencaEmAnos = dataAtual.getFullYear() - dataInicial.getFullYear();
    const diferencaEmMeses = (diferencaEmAnos * 12) + (dataAtual.getMonth() - dataInicial.getMonth());

    const anos = Math.floor(diferencaEmMeses / 12)
    const mesesRestantes = diferencaEmMeses % 12

    let resultado = ''
    if (anos > 0) {
        resultado += anos === 1 ? '1 ano ' : `${anos} anos `
    }
    if (mesesRestantes > 0) {
        resultado += mesesRestantes === 1 ? '1 mês' : `${mesesRestantes} meses`
    }

    return resultado
}