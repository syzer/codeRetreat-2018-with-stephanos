import test from 'ava'
import Point from '../src/Point'

test('point_creation', t => {
    const point = new Point(1, 2)
    t.truthy(point, "no point")
})
