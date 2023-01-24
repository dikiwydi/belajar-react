// const root = document.querySelector('#root');
        // const element = document.createElement('h1');
        // element.textContent = 'halo saya diki';

        // root.appendChild(element)
        

        //  const p1 = React.createElement('p',{
        //     children : 'halo semua'
        //  })
        //  const p2 = React.createElement('p',{
        //     children : 'saya diki wahyudi'
        //  })
        //  const div = React.createElement('div',{
        //     children: [p1,p2]
        //  } )
        // const element = React.createElement(React.Fragment,{
        //     children: [p1,p2]
        //  } )
           

            // const element = (
                 //    <ul> 
                //         <li>anggur </li>
                //         <li> apel </li>
                //         <li> sayur</li>
                //         <li>jengkol </li>
                //     </ul>
                // ) -->
                 
                    // function name (text){
                    //     return text.toUpperCase() ;
                    // }
                    //     const kelas = 'heading'
                    // const elemen = <h1 className={kelas} >halo nama saya </h1>
                        // const foto = (
                        //     <img src="https://images.unsplash.com/photo-1671794646577-e6cbb5d5065e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" />)
                        
    
                        // function Halo (props){
                        //     return <h2> halo {props.name} </h2>
                        // }
    
                        // const foto = (
                        //     <div>
                        //     <Halo name='wahyu' />
                        //     <Halo name='wahyu' />
                        //     <Halo name='wahyu' />
                        //     </div>
                                  
    
                        // )
                        
                           // const element = React.createElement('ul', 
                            // { clasName:'list'},
                            // React.createElement('li',null,'orange'),
                            // React.createElement('li',null,'buah'),
                            // React.createElement('li',null,'japan')
                            // )
                            // const root = document.querySelector('#root')    
                            // function tick (){
                            //     const foto = (
                            //         <div>
                            //             <h1>{new Date().toLocaleTimeString()}</h1>    
                            //         </div>
                            //     ) 
                            //     ReactDOM.render(foto,root)
                            //    }
                               
                            //    setInterval(function(){
                            //     tick()
                            //    },1000)


                            //style pada jsx harus object 
        // const root = document.querySelector('#root');
        // const elemen = (
        //     <div 
        //     style={{
        //         height:'200px',
        //         width : '200px',
        //         backgroundColor:'blue',
                
        //     }}>
                
        //     </div>
        // ) 
        // ReactDOM.render(elemen,root);

/*         const root = document.querySelector('#root');
        const element = (
            <div className='box'>

            </div>
        )
        ReactDOM.render(element,root) */

        // const root =document.querySelector('#root');
        // function klikSaya (){
        //     alert(1)
        // }
        // const elemen = (
           
        // <button onClick={klikSaya}>click saya </button>
        // )
        
        // ReactDOM.render(elemen,root)


        // const root =document.querySelector('#root');
        // function klikSaya (msg){
        //     alert(msg)
        // }
        // const elemen = (
           
        // <button onClick={() => klikSaya( 'helo aku di klik')}>click saya </button>
        // )
        
        // ReactDOM.render(elemen,root);


        
            // react state
        // const root = document.querySelector('#root');
        // function Apps(){
        //     return <h1> halo semua</h1>
        // }

        // ReactDOM.render(<Apps />,root)


        // const root = document.querySelector('#root');

        //     function Apps(){
        //         const [count,addCount] = React.useState(0);
                
        //         return (
        //             <div>
        //                 <button onClick ={function(){addCount(count-1)}} >
        //                     -
        //                 </button>
        //                  <span>{count}</span>
        //                 <button onClick = {function(){addCount(count +1)}}>
        //                     +
        //                 </button>
        //             </div>
        //         )
        //     }


        // ReactDOM.render(<Apps />,root)



        // const root = document.querySelector('#root');

        //     function Apps(){
        //         const [count,setCount] = React.useState(0);
        //         const [klik,diKlik] = React.useState(false);

        //         React.useEffect(function(){
        //             console.log('di klik')
        //         },[count,klik])
        //         return(
        //             <div>
        //                 <button onClick = {function(){diKlik(true)}}>
        //                     klik saya
        //                 </button>
        //                 <button onClick={function(){setCount(count + 1)}}>
        //                     nilai saya {count}
        //                 </button>
        //             </div>
        //         )
        //     }


        // ReactDOM.render(<Apps />,root)







        //conditional state            
        // const root = document.querySelector('#root');

        // function Apps(){
        //     const [login,setLogin] = React.useState(false);
            // if(login){
            //     return(
            //         <div>
            //             <h1>
            //                 udah login
            //             </h1>
            //         </div>
            //     )
            // }
    //         return(
    //             <div>
    //                 <p>{login ? 'kamu sudah login' : 'kamu belum login'}</p>
    //                 <button onClick={function(){setLogin(true)}} > login</button>
    //             </div>
    //         )
    //     }


    // ReactDOM.render(<Apps />,root)





            // dom manupulation 

            
            // const root = document.querySelector('#root')
            // function Apps(){
            //     const [login,setLogin] = React.useState(false)
            //     const judulRef =React.useRef(null)
            //     React.useEffect(() => {
            //         // const judul =document.querySelector('#judul')
            //         setTimeout(function(){
            //             judulRef.current.textContent = 'haloww'
            //         },1000)
                    
            //     })
            //     return (
            //        <div>
            //         <h1 ref= {judulRef} >halo </h1>
            //        </div>
            //     )
            // }
            // ReactDOM.render( <Apps /> , root)





        //    react list
            // const root = document.querySelector('#root')
            // function Apps(){
            //     const fruit = ['orange','red','blue','black']

            //     return (
            //         <ul>
            //             {fruit.map((fruits =>{
            //                 return <li key = {color}>{fruits}</li>
            //             }))}
            //         </ul>
            //     )

            // }
            // ReactDOM.render(<Apps />,root)

            // react form

            // const root = document.querySelector('#root')
            // function Apps(){
            //     const namaRef = React.useRef(null);
            //     function ketikaSubmit(event){
            //         event.preventDefault();
            //         const nama = namaRef.current.value;
            //         console.log('nama :', nama)
                    
            //     }
            //     return (
            //         <form onSubmit={ketikaSubmit}>
            //             <div>
            //                 <label>nama :</label>
            //                 <input type='text' name= 'nama' ref={namaRef} />
            //             </div>
            //             <button type='submit'> kirim</button>
            //         </form>
            //     )

            // }
            // ReactDOM.render(<Apps /> , root)


            // const root = document.querySelector('#root')
            // function Apps(){
            //     const [nama,setNama] = React.useState('');
            //     function ketikaSubmit(event){
            //         event.preventDefault();
            //         console.log('nama :', nama)
                    
            //     }
            //     return (
            //         <form onSubmit={ketikaSubmit}>
            //             <div>
            //                 <label>nama :</label>
            //                 <input type='text' name= 'nama' onChange={function(event){
            //                     setNama(event.target.value)
            //                 }} />
            //             </div>
            //             <button type='submit'> kirim</button>
            //         </form>
            //     )

            // }
            // ReactDOM.render(<Apps /> , root)



            // data fecth
            // const root = document.querySelector('#root')
            // function Apps(){
            //         React.useEffect(function(){
            //             const getData = fetch('https://api.spaceflightnewsapi.net/v3/blogs')
            //             .then((response)=>{return response.json()})
            //             .then((response)=>console.log(response))
            //         },[])

            // }
            // ReactDOM.render(<Apps />,root)


            // const root = document.querySelector('#root')
            // function Apps(){
            //         const [news,setNews] = React.useState([])
            //         const [loading, setloading]=React.useState(true)

            //         React.useEffect(function(){
            //             async function getData(){
            //                 const reqeust = await fetch('https://api.spaceflightnewsapi.net/v3/blogs')
            //                 const response = await reqeust.json()
            //                 setNews(response)
            //                 setloading(false)
            //             }
                        
            //             getData()
            //         },[])
                    
            //         return(
            //             <div>
            //                 <h1>data fecth</h1>
            //                 {loading ? <i>lagi loading..</i> :
            //                 <ul>
            //                 {news.map(function(item){
            //                     return <li key={item.id}> {item.title}</li>
            //                 })}
            //             </ul>}
                            
            //             </div>
            //         )

            // }
            // ReactDOM.render(<Apps />,root)

                 
            const root = document.querySelector('#root')
            function App(){
                const[activity,setAcitivity]=React.useState('')
                const [edit,setEdit] = React.useState({})
                const[todos,setTodos]= React.useState([])
                function getId(){
                    return Date.now()
                }
                function addToDoHandler(event){
                    event.preventDefault();

                    if(edit.id){
                        const updatedTodo = {
                            id : edit.id,
                            activity : activity, 
                        }
                        
                        const editTodoIndex = todos.findIndex(function(todo){
                            return todo.id == edit.id
                        })
                        const newTodo = [
                            ...todos
                        ]
                        newTodo[editTodoIndex]=updatedTodo
                        setTodos(newTodo)
                        

                        return cancelEditHandler();
                    }


                    setTodos([...todos,{
                        id:getId(),
                        activity:activity
                    }]);
                    setAcitivity('')
                }
               
                function removeToDo(todoID){
                    const getRemove=todos.filter(function(todo){
                        console.log(todo.id,todoID)
                        return todo.id !== todoID
                        
                    })
                    setTodos(getRemove)
                    if(edit.id)cancelEditHandler()
                }

                function editToDO(todo){
                    setAcitivity(todo.activity) 
                    setEdit(todo)
                }
                function cancelEditHandler(){
                    setEdit({});
                    setAcitivity('');
                }
                return(
                    <div>
                        <form onSubmit={addToDoHandler}>
                            <input type='text' value={activity} placeholder='masukan aktivitas' onChange={function(event){setAcitivity(event.target.value)}} />
                            <button type='submit' >{edit.id ? 'simpan perubahan':'tambah'}</button>
                            {edit.id && <button onClick={cancelEditHandler}>batal edit</button> }
                            
                        </form>
                        <ul>
                            {todos.map(function(todo){
                                return(
                                <li key={todo.id}>
                                    {todo.activity}
                                <button onClick={editToDO.bind(this,todo)}>edit</button>    
                                <button onClick={removeToDo.bind(this,todo.id)}>hapus</button>
                                </li>)
                            })}
                        </ul>
                    </div>
                )
            }
            ReactDOM.render(<App />,root)
           

            














