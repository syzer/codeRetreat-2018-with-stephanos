import test from 'ava'
import Point from '../src/Point'
import Cell from '../src/Cell'
import Grid from '../src/Grid'

test('grid_can_add_cells', t => {
    const cell = new Cell(new Point(1, 2))
    const grid = new Grid()
    grid.addCell(cell)
    t.truthy(grid.cells.length >= 1, "grid.cells")
})
