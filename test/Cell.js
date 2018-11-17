import test from 'ava'
import Point from '../src/Point'
import Cell from '../src/Cell'

test('cell_getNeighbors', t => {
    const cell = new Cell(new Point(1, 2))
    t.truthy(cell.getNeighbors(), "cell.getNeighbors")
})
