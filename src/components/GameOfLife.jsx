import React, { useState, useEffect } from 'react'
import { Inconsolata, Life_Savers } from '@next/font/google'
import { IoShuffle, IoPlay, IoPause, IoTrashBin, IoInformationCircle } from 'react-icons/io5'

const inconsolata = Inconsolata({ weight: '400' })

export default function GameOfLife() {
  const [grid, setGrid] = useState([])
  const [rows, setRows] = useState(15)
  const [cols, setCols] = useState(15)
  const [generation, setGeneration] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    resetGrid()
    random()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const resetGrid = () => {
    setGeneration(0)
    const newGrid = []
    for (let i = 0; i < rows; i++) {
      newGrid[i] = []
      for (let j = 0; j < cols; j++) {
        newGrid[i][j] = 0
      }
    }
    setGrid(newGrid)
  }

  const startStop = () => {
    setRunning(!running)
  }

  const random = () => {
    setGeneration(0)
    const newGrid = []
    for (let i = 0; i < rows; i++) {
      newGrid[i] = []
      for (let j = 0; j < cols; j++) {
        newGrid[i][j] = Math.floor(Math.random() * 2)
      }
    }
    setGrid(newGrid)
  }

  const handleClick = (i, j) => {
    const newGrid = [...grid]
    newGrid[i][j] = grid[i][j] ? 0 : 1
    setGrid(newGrid)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextGeneration = () => {
    const newGrid = []
    for (let i = 0; i < rows; i++) {
      newGrid[i] = []
      for (let j = 0; j < cols; j++) {
        let count = 0
        // count number of neighbors
        if (i > 0) if (grid[i - 1][j]) count++
        if (i > 0 && j > 0) if (grid[i - 1][j - 1]) count++
        if (i > 0 && j < cols - 1) if (grid[i - 1][j + 1]) count++
        if (j < cols - 1) if (grid[i][j + 1]) count++
        if (j > 0) if (grid[i][j - 1]) count++
        if (i < rows - 1) if (grid[i + 1][j]) count++
        if (i < rows - 1 && j > 0) if (grid[i + 1][j - 1]) count++
        if (i < rows - 1 && j < cols - 1) if (grid[i + 1][j + 1]) count++
        if (grid[i][j] && (count < 2 || count > 3)) newGrid[i][j] = 0
        else if (!grid[i][j] && count === 3) newGrid[i][j] = 1
        else newGrid[i][j] = grid[i][j]
      }
    }
    if (JSON.stringify(grid) === JSON.stringify(newGrid)) {
      setRunning(false)
      return
    }
    setGrid(newGrid)
    setGeneration(generation + 1)
  }

  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        nextGeneration()
      }, 100)
      return () => clearInterval(interval)
    }
  }, [nextGeneration, running])

  return (
    <>
      <div className='container p-4 mx-auto'>
        <div className='flex flex-row items-center justify-center mb-4 space-x-10 text-3xl text-center'>
          {!running ? (
            <IoPlay
              className='inline-block transition-colors duration-150 ease-out cursor-pointer hover:text-yellow-500'
              onClick={startStop}
            />
          ) : (
            <IoPause
              className='inline-block transition-colors duration-150 ease-out cursor-pointer hover:text-yellow-500'
              onClick={startStop}
            />
          )}
          <IoShuffle
            className='inline-block transition-colors duration-150 ease-out cursor-pointer hover:text-yellow-500'
            onClick={random}
          />
          <IoTrashBin
            className='inline-block transition-colors duration-150 ease-out cursor-pointer hover:text-yellow-500'
            onClick={resetGrid}
          />
          <IoInformationCircle
            className='inline-block transition-colors duration-150 ease-out cursor-pointer hover:text-yellow-500'
            onClick={() => {
              alert(`Conway's Game of Life Rules:

1. Cells with less than 2 neighbors die
2. Cells with 2 or 3 neighbors live
3. Cells with more than 3 neighbors die
4. Dead cells with 3 neighbors become alive
`)
            }}
          />
        </div>
        <div className='mt-4 text-center'>
          <p className={inconsolata.className + ' text-md'}>Generation: {generation}</p>
        </div>
        <div className='inline-grid grid-cols-15'>
          {grid.map((row, i) =>
            row.map((cell, j) => (
              // handle clicking and dragging to draw
              <div
                key={`${i}-${j}`}
                onClick={() => handleClick(i, j)}
                className={`border border-neutral-300 ${cell ? 'bg-blue-500' : 'bg-yellow-600'} h-6 w-6`}
              />
            )),
          )}
        </div>
      </div>
    </>
  )
}
