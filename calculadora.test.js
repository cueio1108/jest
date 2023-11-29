const calc = require('./calculadora')

describe('Teste para calculadora', () => {
    test('somar 2 e 2 deve resultar em 4', () => {
        const minhaSoma = calc.soma(2, 2)
    
        expect(minhaSoma).toBe(4)
    })
    
    test('multiplicar 3 e 2 deve resultar em 6', () => {
        const minhaMultiplicacao = calc.multiplicacao(3, 2)
    
        expect(minhaMultiplicacao).toBeGreaterThan(5)
    })
})