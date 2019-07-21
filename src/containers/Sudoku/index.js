import React from 'react'
import styled from 'styled-components'

const field = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [2, 3, 4, 5, 6, 7, 8, 9, 1],
  [3, 4, 5, 6, 7, 8, 9, 1, 2],
  [4, 5, 6, 7, 8, 9, 1, 2, 3],
  [5, 6, 7, 8, 9, 1, 2, 3, 4],
  [6, 7, 8, 9, 1, 2, 3, 4, 5],
  [7, 8, 9, 1, 2, 3, 4, 5, 6],
  [8, 9, 1, 2, 3, 4, 5, 6, 7],
  [9, 1, 2, 3, 4, 5, 6, 7, 8]
]

// const field = [
//   [1, 1, 1, 2, 2, 2, 3, 3, 3],
//   [1, 1, 1, 2, 2, 2, 3, 3, 3],
//   [1, 1, 1, 2, 2, 2, 3, 3, 3],
//   [4, 4, 4, 5, 5, 5, 6, 6, 6],
//   [4, 4, 4, 5, 5, 5, 6, 6, 6],
//   [4, 4, 4, 5, 5, 5, 6, 6, 6],
//   [7, 7, 7, 8, 8, 8, 9, 9, 9],
//   [7, 7, 7, 8, 8, 8, 9, 9, 9],
//   [7, 7, 7, 8, 8, 8, 9, 9, 9]
// ]

// const field = [
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [4, 5, 6, 7, 8, 9, 1, 2, 3],
//   [7, 8, 9, 1, 2, 3, 4, 5, 6],
//   [2, 3, 4, 5, 6, 7, 8, 9, 1],
//   [5, 6, 7, 8, 9, 1, 2, 3, 4],
//   [8, 9, 1, 2, 3, 4, 5, 6, 7],
//   [3, 4, 5, 6, 7, 8, 9, 1, 2],
//   [6, 7, 8, 9, 1, 2, 3, 4, 5],
//   [9, 1, 2, 3, 4, 5, 6, 7, 8]
// ]

const Sudoku = () => {
  const transposeIndexes = invalidCells => {
    let transposedInvalidCells = []
    for (let k = 0; k < invalidCells.length; k++) {
      const i = invalidCells[k][0]
      const j = invalidCells[k][1]

      transposedInvalidCells[k] = [
        i + Math.trunc(j / 3) - (i % 3),
        j - Math.trunc(j / 3) * 3 + Math.trunc(i % 3) * 3
      ]

      // switch (i % 3) {
      //   case 0:
      //     if (j < 3) {
      //       transposedInvalidCells[k] = [i, j]
      //     } else if (j < 6) {
      //       transposedInvalidCells[k] = [i + 1, j - 3]
      //     } else {
      //       transposedInvalidCells[k] = [i + 2, j - 6]
      //     }
      //     break
      //   case 1:
      //     if (j < 3) {
      //       transposedInvalidCells[k] = [i - 1, j + 3]
      //     } else if (j < 6) {
      //       transposedInvalidCells[k] = [i, j]
      //     } else {
      //       transposedInvalidCells[k] = [i + 1, j - 3]
      //     }
      //     break
      //   case 2:
      //     if (j < 3) {
      //       transposedInvalidCells[k] = [i - 2, j + 6]
      //     } else if (j < 6) {
      //       transposedInvalidCells[k] = [i - 1, j + 3]
      //     } else {
      //       transposedInvalidCells[k] = [i, j]
      //     }
      //     break

      //   default:
      //     break
      // }
    }
    return transposedInvalidCells
  }

  const checkLines = (field, isTransposed = false) => {
    let isValidField = true
    let invalidCells = []
    for (let i = 0; i < 9; i++) {
      let currentLine = []
      for (let j = 0; j < 9; j++) {
        if (currentLine.includes(field[i][j])) {
          isValidField = false
          invalidCells.push([i, j])
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

  const checkColumns = field => {
    let isValidField = true
    let invalidCells = []
    for (let i = 0; i < 9; i++) {
      let currentColumn = []
      for (let j = 0; j < 9; j++) {
        if (currentColumn.includes(field[j][i])) {
          isValidField = false
          invalidCells.push(j + ' ' + i)
        } else {
          currentColumn.push(field[j][i])
        }
      }
    }
    return [isValidField, invalidCells]
  }

  const transponizeSquares = field => {
    let transField = []

    for (let i = 0; i < 9; i++) {
      transField[i] = []
      for (let j = 0; j < 9; j++) {
        // transField[i][j] =
        //   field[
        //     (i + Math.trunc(j / 3) - (i % 3), j - Math.trunc(j / 3) * 3 + Math.trunc(i % 3) * 3)
        //   ]
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
    return transField
  }

  const handleClick = index => {
    console.log('index', index)
  }

  const checkField = field => {
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

  const [isValidField, invalidCells] = checkField(field)
  console.log('isValidField', isValidField)
  console.log('invalidCells', invalidCells)

  return (
    <Wrapper>
      {field.map((line, l) => {
        return (
          <Line key={l}>
            {line.map((cell, c) => {
              const isValidCell = !invalidCells.includes(l + ' ' + c)
              return (
                <Cell key={l + ' ' + c} isValid={isValidCell} onClick={() => handleClick([l, c])}>
                  <span>{cell}</span>
                </Cell>
              )
            })}
          </Line>
        )
      })}
    </Wrapper>
  )
}

export default Sudoku

const Wrapper = styled.div`
  font-family: Comic Sans MS;
  width: 670px;
  height: 670px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border: 1px solid black;
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  box-shadow: 0 0 25px 25px rgba(0, 0, 0, 0.1);
`

// const Square = styled.div`
//   width: 33.33%;
//   height: 33.34%;
//   border: 1px solid grey;
//   display: flex;
//   flex-flow: row wrap;
//   box-sizing: border-box;
// `

const Line = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  box-sizing: border-box;
  height: 11.12%;
  :nth-child(3n) {
    border-bottom: 3px solid grey;
  }
`

const Cell = styled.div`
  width: 32.43%;
  height: 100%;
  border: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  font-style: italic;
  background: ${props => (props.isValid ? 'white' : 'red')};
  :nth-child(3n) {
    border-right: 2px solid grey;
  }

  :hover {
    background: rgba(0, 0, 0, 0.1);
  }
  span {
    cursor: pointer;
    :hover {
      user-select: none;
    }
  }
`
