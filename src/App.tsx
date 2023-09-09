import React from 'react';
import logo from './assets/images/logo.svg';

import Robot from './components/Robot';
import styles from './App.module.css';
import ShoppingCart from './components/ShoppingCart';

interface Props{}
interface State{
  rebotGallery:any[];
  count:number;
}


class App extends React.Component<Props,State>{
  constructor(props: Props | Readonly<Props>){
    super(props);
    this.state={
      rebotGallery:[],
      count:0,
    }; 
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
    .then((data)=>this.setState({rebotGallery:data}));
  }



  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo"></img>
          <h1>Robot online </h1>
  
        </div>
        <button onClick={()=>{
          this.setState((preState,preProps)=>{ 
            return {count:this.state.count+1}
          },()=>{
            console.log("count",this.state.count);
          
          });
          this.setState((preState,preProps)=>{ 
            return {count:this.state.count+1}
          },()=>{
            console.log("count",this.state.count);
          
          });
          
        }}>Click</button>
        <span>count:{this.state.count}</span>
        <ShoppingCart></ShoppingCart>
      <div className={styles.robotList}>
        
        {this.state.rebotGallery.map((r)=>(<Robot id ={r.id} email ={r.email} name={r.name}></Robot>))}
        </div>
      </div>
    );
  }
  
}

export default App;
