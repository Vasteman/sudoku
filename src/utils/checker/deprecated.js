export const transposeIndexes = invalidCells => {
  let transposedInvalidCells = []
  for (let k = 0; k < invalidCells.length; k++) {
    const i = invalidCells[k][0]
    const j = invalidCells[k][1]

    switch (i % 3) {
      case 0:
        if (j < 3) {
          transposedInvalidCells[k] = [i, j]
        } else if (j < 6) {
          transposedInvalidCells[k] = [i + 1, j - 3]
        } else {
          transposedInvalidCells[k] = [i + 2, j - 6]
        }
        break
      case 1:
        if (j < 3) {
          transposedInvalidCells[k] = [i - 1, j + 3]
        } else if (j < 6) {
          transposedInvalidCells[k] = [i, j]
        } else {
          transposedInvalidCells[k] = [i + 1, j - 3]
        }
        break
      case 2:
        if (j < 3) {
          transposedInvalidCells[k] = [i - 2, j + 6]
        } else if (j < 6) {
          transposedInvalidCells[k] = [i - 1, j + 3]
        } else {
          transposedInvalidCells[k] = [i, j]
        }
        break

      default:
        break
    }
  }
  return transposedInvalidCells
}

export const transponizeSquares = field => {
  let transField = []

  for (let i = 0; i < 9; i++) {
    transField[i] = []
    for (let j = 0; j < 9; j++) {
      switch (i % 3) {
        case 0:
          if (j < 3) {
            transField[i][j] = field[i][j]
          } else if (j < 6) {
            transField[i][j] = field[i + 1][j - 3]
          } else {
            transField[i][j] = field[i + 2][j - 6]
          }
          break
        case 1:
          if (j < 3) {
            transField[i][j] = field[i - 1][j + 3]
          } else if (j < 6) {
            transField[i][j] = field[i][j]
          } else {
            transField[i][j] = field[i + 1][j - 3]
          }
          break
        case 2:
          if (j < 3) {
            transField[i][j] = field[i - 2][j + 6]
          } else if (j < 6) {
            transField[i][j] = field[i - 1][j + 3]
          } else {
            transField[i][j] = field[i][j]
          }
          break

        default:
          break
      }
    }
  }
  console.log(field)
  console.log(transField)
  return transField
}
