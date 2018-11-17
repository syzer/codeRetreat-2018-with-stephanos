import test from 'ava'
import Generation from '../src/Generation'

test('Generation_creation', t => {
    const generation = new Generation()
    t.truthy(generation.next(), "Generation.next()")
})

test('Generation_print', t => {
    const generation = new Generation()
    t.truthy(generation.print(), "Generation.print()")
})
