
export const dataAtual = ()  => {

    const data = new Date()

    const dia = String(data.getDate()).padStart(2, '0')

    const mes = String(data.getMonth() + 1).padStart(2, '0')

    const ano = data.getFullYear()

    const dataAtual = `${ano}-${mes}-${dia}`

    return dataAtual
}

export const formatData = (data: Date)  => {

    const recData = new Date(data)

    const dia = String(data.getDate()).padStart(2, '0')

    const mes = String(data.getMonth() + 1).padStart(2, '0')

    const ano = data.getFullYear()

    const newAtual = `${dia}/${mes}/${ano}`

    return newAtual
}