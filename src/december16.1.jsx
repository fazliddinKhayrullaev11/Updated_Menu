import React from "react";
import { people } from "./persons.jsx";

class December161 extends React.Component{
        constructor(props){
            super(props)

            this.state={
                name:'',
                surname:'',
                status:'',
                 nation:'',
                 hobby:'',
                 data:people,
                 search:'id',
                 active:null,
            }
        }




    render(){

        let onChange=(e)=>{
            this.setState({
                [e.target.name] : e.target.value

            })
        };
        let onAdd=()=>{
            let user ={
                id:Date.now(),
                name:this.state.name,
                surname:this.state.surname,
                status:this.state.status,
                nation:this.state.nation,
                hobby:this.state.hobby,

            }
            this.setState({
                data:[user, ...this.state.data],
                name:'',
                surname:'',
                status:'',
                 nation:'',
                 hobby:'',
            })
        };
          let onDelete=(id)=>{
            let del = this.state.data.filter((value)=>value.id!==id)
            this.setState({
                data:del
            })
          };
          let onSearch=(e)=>{
            const{value}=e.target;
            let fil=people.filter((item)=>
            `${ item[this.state.search]}`.toLowerCase().includes(value.toLowerCase())
            
            )
            this.setState({
                data:fil
            })

          };
          let onSelect=(e)=>{
          this.setState({
            search:e.target.value,
          })
          };
          let onEdit =({id,name,surname,status,nation,hobby},Issave)=>{
            if(Issave){
                let res=this.state.data.map((value)=>value.id===this.state.active?.id?
                {
                ...value,
                 name:this.state.name,
                 surname:this.state.surname,
                 status:this.state.status,
                 nation:this.state.nation,
                 hobby:this.state.hobby,
                 
                }:value
                
                )
                this.setState({
                    active:null,
                    data:res
                })
            }      else {
                this.setState({
                    name:name,
                    surname:surname,
                    status:status,
                    nation:nation,
                    hobby:hobby,
                    active: {id,name,surname,status,nation,hobby}
                })
            }

          }

        return(
            <div>
                <h1>HI {this.state.name} {this.state.surname}
                <br />
                your status is : {this.state.status}
                <br />
                your nationality is  : {this.state.nation}
                <br />
                your hobby is :  {this.state.nation}
                <br />
                </h1>
               
                <input  value={this.state.name} onChange={onChange}  name="name" type="text" placeholder="name" />
                <br />
                <br />
                <input  value={this.state.surname} onChange={onChange}  name="surname" type="text" placeholder="surname" />
                <br />
                <br />
                <input  value={this.state.status} onChange={onChange}  name="status" type="text" placeholder="status" />
                <br />
                <br />
                <input  value={this.state.nation} onChange={onChange}  name="nation" type="text" placeholder="nationality" />
                <br />
                <br />
              <input  value={this.state.hobby} onChange={onChange}  name="hobby" type="text" placeholder="hobby" />
                <br />
                <br />
                <button onClick={onAdd}>Add</button>
                <br />
                <br />
                <input onChange={onSearch} type="text" placeholder="search"/>
                <select onChange={onSelect} name="" id="">
                    <option value="id">ID</option>
                    <option value="name">Name</option>
                    <option value="surname">Surname</option>
                    <option value="status">Status</option>
                    <option value="nation">Nationality</option>
                    <option value="hobby">Hobby</option>

                </select>
                <br />
                <br />
                <table border={1} width="100%" height="400px">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Status</th>
                            <th>Nationality</th>
                            <th>Hobby</th>
                            <th>Delete</th>
                            <th>Edit</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.length?
                            this.state.data.map(({id,name,surname,status,nation,hobby})=>{
                                return(
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td>{
                                           this.state.active?.id===id?  <input onChange={onChange} name="name" value={this.state.name}  type="text" />  :
                                           (
                                            name
                                           )
                                            
                                            
                                            }</td>
                                        <td>{
                                             this.state.active?.id===id?  <input onChange={onChange} name="surname" value={this.state.surname}  type="text" />  :
                                             (
                                              surname
                                             )
                                            
                                            }</td>
                                        <td>{
                                           this.state.active?.id===id?  <input onChange={onChange} name="status" value={this.state.status}  type="text" />  :
                                           (
                                            status
                                           )  
                                            }</td>
                                        <td>{
                                        this.state.active?.id===id?  <input onChange={onChange} name="nation" value={this.state.nation}  type="text" />  :
                                        (
                                         nation
                                        )     
                                            }</td>
                                        <td>{
                                              this.state.active?.id===id?  <input onChange={onChange} name="hobby" value={this.state.hobby}  type="text" />  :
                                              (
                                               hobby
                                              )
                                            
                                            }</td>
                                        <td><button onClick={()=>onDelete(id)}>delete</button></td>
                                        <td><button onClick={()=>onEdit({id,name,surname,status,nation,hobby},  this.state.active?.id===id)}>
                                            {
                                                this.state.active?.id===id? 'save':'edit'
                                            }
                                            
                                            </button></td>

                                    </tr>
                                )
                            }) :(
                                <tr>
                                    <th colSpan={8}>NO DATA</th>
                                </tr>
                            )
                        }
                    </tbody>

                    
                </table>
                <br />
                <br />
                <br />
                <br />
            </div>

        );
    }


}
export default December161