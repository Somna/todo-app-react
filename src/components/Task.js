/**
 * Created by lost on 30-May-17.
 */
import { Component } from 'react'
import * as React from "react";

export const Task = ({title, completed, endDate, onClick}) => {
  const months = [
    'янв',
    'фев',
    'мар',
    'апр',
    'май',
    'июн',
    'июл',
    'авг',
    'сен',
    'окт',
    'ноя',
    'дек'
  ]
  const formatDate = () => ({
    day: (new Date(endDate)).getDay(),
    month: months[(new Date(endDate)).getMonth()]
  })
  return (
    <li onClick={onClick}>
      <div className="Task-date__completed">
        <input type="chechbox"
               checked={completed}
               ref={node => this.completed = node}
        />
      </div>
      <div className="Task-date__title">
        {title}
      </div>
      <div className="Task-date">
        <div className="Task-date__day">{formatDate().day}</div>
        <br/>
        <div className="Task-date__month">{formatDate().month}</div>
      </div>
    </li>
  )
}