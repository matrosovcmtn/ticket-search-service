import React from 'react'
import classes from './RegPage.module.css'
import { Link } from 'react-router-dom'

const RegPage = () => {
    const action = (event) => {
        event.preventDefault()
    }
  return (
    <div className={classes.wrap}>
        <div className={classes.reg}>
            <h1>Регистрация</h1>
            <form>
                <label htmlFor="usrname">ФИО:</label>
                <input type="text" name='usrname'/>
                <label htmlFor="pass">Пароль:</label>
                <input type="password" name='pass'/>
                <label htmlFor="pass_confirm">Повторите пароль:</label>
                <input type="password" name='pass_confirm'/>
                <button onClick={(event) => {action(event)}}>Зарегестрироваться</button>
            </form>
        </div>
        <div className={classes.navs}>
            <Link to='/'>&laquo; Вернуться на главную</Link>
            <Link to='/login'>Уже есть аккаунт?&raquo;</Link>
        </div>
    </div>
  )
}

export default RegPage