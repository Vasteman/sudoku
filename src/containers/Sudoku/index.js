import React from 'react'
import styled from 'styled-components'

import { checkField } from '../../utils/checker'
import { generateField } from '../../utils/generator'

const Sudoku = () => {
  const handleClick = index => {
    console.log('index', index)
  }
  const field = generateField()
  const [isValidField, invalidCells] = checkField(field)
  console.log(isValidField)

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
