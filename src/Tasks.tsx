import React from 'react';
import {DataType} from "./App";

type TasksPropsType = {
    title:string
    data:DataType
}

export const Tasks = (props:TasksPropsType) => {
    return (
        <div>
            <h2>{props.title}</h2>
            {props.data.tasks.map((el)=>{
                return (
                    <>

                        <div>
                            <div key={el.taskId}>{el.title}
                                <span><input type="checkbox" checked={el.isDone} /></span>
                            </div>

                        </div>

                    </>

                    )

            })}
            <br/>
            {props.data.students.map((el,index)=>{
                return (
                    <>
                        <div>Студент: {el}</div>

                    </>

                )

            })}
        </div>
    );
};

