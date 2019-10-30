const basicField = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [4, 5, 6, 7, 8, 9, 1, 2, 3],
  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [2, 3, 4, 5, 6, 7, 8, 9, 1],
  [5, 6, 7, 8, 9, 1, 2, 3, 4],
  [8, 9, 1, 2, 3, 4, 5, 6, 7],
  [3, 4, 5, 6, 7, 8, 9, 1, 2],
  [6, 7, 8, 9, 1, 2, 3, 4, 5],
  [9, 1, 2, 3, 4, 5, 6, 7, 8]
]

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}

export const generateField = () => {
  let newField = swapColumnSmall(basicField)
  return newField
}

const transpose = field => {
  let transposedField = []
  for (let i = 0; i < 9; i++) {
    transposedField[i] = []
    for (let j = 0; j < 9; j++) {
      transposedField[i][j] = field[j][i]
    }
  }
  return transposedField
}

const swapLineSmall = field => {
  let swapedField = field.slice()

  const currentLine = getRandomInt(0, 9)
  let swappingLine

  switch (currentLine % 3) {
    case 0:
      swappingLine = getRandomInt(1, 3)
      break
    case 1:
      swappingLine = getRandomInt(-1, 2)
      while (swappingLine === 0) {
        swappingLine = getRandomInt(-1, 2)
      }
      break
    case 2:
      swappingLine = getRandomInt(-2, 0)
      break
    default:
      break
  }

  for (let j = 0; j < field.length; j++) {
    let temp = swapedField[currentLine][j]
    swapedField[currentLine][j] = swapedField[currentLine + swappingLine][j]
    swapedField[currentLine + swappingLine][j] = temp
  }

  return swapedField
}

const swapColumnSmall = field => {
  let swapedField = field.slice()
  swapedField = transpose(swapedField)
  swapedField = swapLineSmall(swapedField)
  swapedField = transpose(swapedField)
  return swapedField
}
