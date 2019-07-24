import React, { Component } from 'react';
import { Input, Button, List } from 'antd'

class TodoListUI extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        }
    }
    render() { 
        return ( 
            <div>
                <div style={{margin: '10px'}}>
                    <Input 
                        placeholder={this.props.inputValue} 
                        style={{width: '250px'}}
                        onChange={this.props.changeInputValue}
                        value={this.props.inputValue}
                    />
                    <Button type="primary" onClick={this.props.clickBtn}>添加</Button>
                </div>
                <div style={{margin: '10px', width: '300px'}}>
                    <List 
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item, index) => (
                            <List.Item onClick={ ()=>{this.props.deleteItem(index)}}>
                                {item}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        );
    }
}
 
export default TodoListUI;