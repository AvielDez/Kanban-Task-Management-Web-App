/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'

import useStore from './bearStore'
import Button from './Button'
import Header from './components/Header/Header'
import Task from './components/Task'
import Column from './components/Column'
import SideBar from './components/SideBar/SideBar'
import AddTaskModal from './components/AddTaskModal'
import AddBoardModal from './components/AddBoardModel'
import EditTaskModal from './components/EditTaskModal'
import ViewTaskModal from './components/ViewTaskModal'
import DeleteModal from './components/DeleteModal'
import EditPopOut from './components/EditPopOut'

import { set } from 'react-hook-form'
import { modalBackground } from './styles/modalStyle'
import { flex } from './styles/utilStyle'

const boardStyle = css `
  position: absolute;
  left: 0;
  top: 6rem;
  bottom: 0;
  right: 0;
  display: flex;
  padding: 1.5rem 2rem;
  cursor: move;
  overflow: scroll;

  @media (min-width: 768px) {
    top: 81px;
    left: 18.75rem;
  }
`


function App() {
 
  const isModalOpen = false;

  return (
    <div>
      {isModalOpen && <div css={modalBackground}></div>}
      <Header/>
      {/* {<EditPopOut item='task' />} */}
      <main>
        <SideBar/>
        <div css={boardStyle}>
          <Column status="Todo">
            <Task taskId={78}/>
            <Task taskId={34}/>
            <Task taskId={23}/>
            <Task taskId={14}/>
          </Column>
          <Column status="Doing">
            <Task taskId={78}/>
            <Task taskId={34}/>
            <Task taskId={23}/>
            <Task taskId={14}/>
            <Task taskId={65}/>
            <Task taskId={89}/>
          </Column>
          <Column status="Done">
            <Task taskId={78}/>
            <Task taskId={34}/>
            <Task taskId={14}/>
          </Column>
        </div>
      </main>
    </div>
  )
}

export default App
