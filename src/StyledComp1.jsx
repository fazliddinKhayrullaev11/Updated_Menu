   import React from "react"; 

    import { MainContainer,ChildContainer1,ChildContainer,Title , Searchbar,Table, Minibar,Footers,FooterBars, FooterBut} from "./StyledComp1";
    import {students} from './students.jsx'
    import { BsFillPatchMinusFill,BsPencil,BsCalendar2Check} from "react-icons/bs";
    class Stcomponent extends React.Component{
       constructor(props){
        super(props)

        this.state={
            name:'',
            surname:'',
            status:'',
            age:'',
            data:students,
            search:'id',
            active:null,
           
        }
       }

         

        render(){
        let onSearch=(e)=>{
            const{value}=e.target;
            let fil=students.filter((item)=>
            
            `${item[this.state.search]}`.toLowerCase().includes(value.toLowerCase())
            
            );
            this.setState({
                data:fil
            })

        };
        let onSelect=(e)=>{
            this.setState({
                search:e.target.value,
            })

        };
        let onChange=(e)=>{
            this.setState({
                [e.target.name]:e.target.value,
            })

        };
       let onAdd=()=>{
        let user={

            id:Date.now(),
            name:this.state.name,
            surname:this.state.surname,
            status:this.state.status,
            age:this.state.age,

            

        };
        this.setState({
            data:[user, ...this.state.data],
            
        })
       };
       let  onDelete=(id)=>{
        let del=this.state.data.filter((value)=>value.id!==id)
        this.setState({
            data:del
        })

       };
       let onEdit=({id,name,surname,status,age},isSave)=>{
        let res=this.state.data.map((value)=>value.id=== this.state.active?.id?
          {...value, 
        name:this.state.name,
        surname:this.state.surname,
        status:this.state.status,
        age:this.state.age,

        
        }: value
        
        )
        if(isSave){
            this.setState({
                active:null,
                data:res,
            })
        } else{
            this.setState({
                name:name,
                surname:surname,
                status:status,
                age:age,
                active:{id,name,surname,status,age}
            })
        }

       }

            return(
             <MainContainer>
                <ChildContainer1>
                <ChildContainer>
                    <Title>WebBrain Academy</Title>
                    
                    < Searchbar onChange={onSearch}  type="text" placeholder="Search" /> 
                    <Minibar onChange={onSelect} name="" id="">
                        <option value="id">ID</option>
                        <option value="name">Name</option>
                        <option value="surname">Status</option>
                        <option value="age">Age</option>
                       </Minibar>
                    
                       
                    
                     <Table >
                      <thead>
                      <tr>
                        <td><h3>ID</h3></td>
                        <td><h3>Name</h3></td>
                        <td><h3>SurName</h3></td>
                        <td><h3>Status</h3></td>
                        <td><h3>Age</h3></td>
                        <td>Delete</td>
                        <td>Edit</td>
                      </tr>
                      </thead>
                      <tbody>
                    {
                     this.state.data.map(({id,name,surname,status,age,})=>{ //to make table you should always use map method with state element
                         return(
                            <tr key={id}>
                            <td>{id}</td>
                            <td>{
                                this.state.active?.id===id? <input value={this.state.name} name="name" onChange={onChange}   type='text'/>:
                                (
                                    name
                                )
                                
                                }</td>
                            <td>{
                                   this.state.active?.id===id? <input value={this.state.surname} name="surname" onChange={onChange}   type='text'/>:
                                   (
                                       surname
                                   )
                                
                                }</td>
                            <td>{
                                   this.state.active?.id===id? <input value={this.state.status} name="status" onChange={onChange}   type='text'/>:
                                   (
                                       status
                                   )
                                
                                }</td>
                            <td>{
                                   this.state.active?.id===id? <input value={this.state.age} name="age" onChange={onChange}   type='text'/>:
                                   (
                                       age
                                   )
                                }</td>
                            <td>   <div onClick={()=>onDelete(id)}>< BsFillPatchMinusFill/></div></td>
                            <td> <div onClick={()=>onEdit({id,name,surname,status,age},this.state.active?.id===id)}>
                                {
                                this.state.active?.id===id? <BsCalendar2Check/>:<BsPencil/>
                                }
                                
                                </div>   </td>


                            </tr>
                         )

                     })

                    }

                      </tbody>
                     </Table>
                     <br />
                     <br />
                     <br />
                     <Footers>
                     <FooterBars value={this.state.name} onChange={onChange} name="name" type="text"  placeholder="name"/>
                     <FooterBars value={this.state.surname} onChange={onChange} name="surname" type="text"  placeholder="surname"/>
                     <FooterBars value={this.state.status} onChange={onChange} name="status" type="text"  placeholder="status"/>
                     <FooterBars value={this.state.age} onChange={onChange} name="age" type="text"  placeholder="age"/>
                     <FooterBut onClick={onAdd}>Add</FooterBut>
                     </Footers>
                     


                </ChildContainer>
                </ChildContainer1>

             </MainContainer>

            );
        }




    }
    export default Stcomponent





