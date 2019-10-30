export const transposeIndexes = invalidCells => {
  let transposedInvalidCells = []
  for (let k = 0; k < invalidCells.length; k++) {
    const i = invalidCells[k][0]
    const j = invalidCells[k][1]

    transposedInvalidCells[k] = [
      i + Math.trunc(j / 3) - (i % 3),
      j - Math.trunc(j / 3) * 3 + Math.trunc(i % 3) * 3
    ]
  }
  return transposedInvalidCells
}

export const checkLines = (field, isTransposed = false) => {
  let isValidField = true
  let invalidCells = []
  for (let i = 0; i < 9; i++) {
    let currentLine = []
    for (let j = 0; j < 9; j++) {
      if (currentLine.includes(field[i][j])) {
        isValidField = false
        if (!invalidCells.includes(field[i][j])) {
          invalidCells.push([i, j])
        }
      } else {
        currentLine.push(field[i][j])
      }
    }
  }
  if (isTransposed) {
    invalidCells = transposeIndexes(invalidCells)
  }
  invalidCells = invalidCells.map(value => {
    return value[0] + ' ' + value[1]
  })

  return [isValidField, invalidCells]
}

export const checkColumns = field => {
  let isValidField = true
  let invalidCells = []
  for (let i = 0; i < 9; i++) {
    let currentColumn = []
    for (let j = 0; j < 9; j++) {
      if (currentColumn.includes(field[j][i])) {
        isValidField = false
        if (!invalidCells.includes(field[j][i])) {
          invalidCells.push(j + ' ' + i)
        }
      } else {
        currentColumn.push(field[j][i])
      }
    }
  }
  return [isValidField, invalidCells]
}

export const transponizeSquares = field => {
  let transField = []

  for (let i = 0; i < 9; i++) {
    transField[i] = []
    for (let j = 0; j < 9; j++) {
      transField[i][j] =
        field[i + Math.trunc(j / 3) - (i % 3)][j - Math.trunc(j / 3) * 3 + Math.trunc(i % 3) * 3]
    }
  }
  return transField
}

export const checkField = field => {
  let isValidField = true
  let invalidCells = []
  const lines = checkLines(field)
  const columns = checkColumns(field)
  const squares = checkLines(transponizeSquares(field), true)
  isValidField = lines[0] && columns[0] && squares[0]
  invalidCells.push(lines[1])
  invalidCells.push(columns[1])
  invalidCells.push(squares[1])
  invalidCells = invalidCells.flat()
  return [isValidField, invalidCells]
}
