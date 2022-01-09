import { Component } from 'react';
import check from './checkmark.png';

export class DreamsList extends Component {
    state = {
        userInput: '',
        dreamsList: []
    }
onChangeEvent(e) {
    this.setState({userInput:e})
}
addDream(inside) {

    if(inside === ``){
        alert("Please, enter a dream!")
    }
    else {
        let listArray = this.state.dreamsList;
        listArray.push(inside);
        this.setState({dreamsList: listArray, userInput: ''}) 
    }

}

deleteItem() {
    let listArray = this.state.dreamsList;
    listArray = [];
    this.setState({dreamsList: listArray})
}
crossedWord(event) {
    const li = event.target;
    li.classList.toggle('crossed');
}

onFromSubmit(e) {
    e.preventDefault();
}
    render() {
        return(
            <form onSubmit={this.onFromSubmit}>
            <div>
            <div className='container'>
            <input type="text" placeholder='Think about your dreams..then, write down'
            onChange={(e)=>{this.onChangeEvent(e.target.value)}}
            value={this.state.userInput}/>
            </div>
            <div className='container'>
            <button className='btn add' onClick={()=> this.addDream(this.state.userInput)}>Add</button>
            </div>
            <ul>
                {this.state.dreamsList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}>
                        <img src={check} alt="checkmark" width="27px"/>{item}</li>
                ))}
            </ul>
            <div className='container'>
            <button className='btn delete' onClick={() => this.deleteItem()}>Delete</button>
            </div>
            </div>
            </form>
        )
    }
}