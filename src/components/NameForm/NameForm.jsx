import React from 'react'
import { useState } from 'react'

// Задание:
//    Сделать форму, в которой будет два поля с именем и фамилией
//    при отправке формы, на экран выводится сообщение с текущей датой и текстом
//    «Имя Фамилия, 22.11.2021»

export const NameForm = () => {
  const [inputName, setInputName] = useState('')
  const [inputSirname, setInputSirname] = useState('')
  const [button, setButton] = useState('')
  
  const nameHolder = (e) => {
    setInputName(e.target.value + ' ')
    
}
  const sirnameHolder = (e) => {
    setInputSirname(e.target.value)
  }
  const buttonHolder = () => {
    setButton(inputName + inputSirname + "," + " " + new Date().toLocaleString('ru-Ru'));
  }

  return (
    <div>
      <input onChange={nameHolder} type="text" placeholder="Name" />
      <input onChange={sirnameHolder} type="text" placeholder="Sirname" />
      <button onClick={buttonHolder}>Submit</button>
      <h2>
        {button}
      </h2>
    </div>
  );
}
