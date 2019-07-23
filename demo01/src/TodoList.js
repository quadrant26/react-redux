import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

const data = [
    '早8点开晨会，分配今天的开发工作',
    '早9点和项目经理作开发需求讨论会',
    '晚5:30对今日代码进行review'
]

class TodoList extends Component {
    render() { 
        return (
            <div>
                <div style={{margin: '10px'}}>
                    <Input placeholder="Write somgthings" style={{width: '250px'}} />
                    <Button type="primary">添加</Button>
                </div>
                <div style={{margin: '10px', width: '300px'}}>
                    <List 
                        bordered
                        dataSource={data}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }
}
 
export default TodoList;