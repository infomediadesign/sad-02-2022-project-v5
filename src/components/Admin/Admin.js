import React,{useState} from 'react'
import Axios from "axios";
import './Admin.css'
import CRUDTable, {
  Fields,
  Field,
  Pagination,
  CreateForm,
//   UpdateForm,
  DeleteForm
} from "react-crud-table";
const Admin = () => {
    const [tasks,setTasks] = useState([]); 
    async function fetchData(payload){
        await Axios.get('http://localhost:5000/api/getallusers').then((response)=>{
                setTasks(response.data);
                console.log("here")
                return service.fetchItems(payload)
                    });
    }
    async function fetchPagination(payload){
        await Axios.get('http://localhost:5000/api/getallusers').then((response)=>{
                setTasks(response.data);
                console.log("here")
                return service.fetchTotal(payload)
                    });
    }

const SORTERS = {
  NUMBER_ASCENDING: mapper => (a, b) => mapper(a) - mapper(b),
  NUMBER_DESCENDING: mapper => (a, b) => mapper(b) - mapper(a),
  STRING_ASCENDING: mapper => (a, b) => mapper(a).localeCompare(mapper(b)),
  STRING_DESCENDING: mapper => (a, b) => mapper(b).localeCompare(mapper(a))
};

const getSorter = data => {
  const mapper = x => x[data.field];
  let sorter = SORTERS.STRING_ASCENDING(mapper);
    sorter =
    data.direction === "ascending"
    ? SORTERS.STRING_ASCENDING(mapper)
    : SORTERS.STRING_DESCENDING(mapper);

  return sorter;
};

const service = {
    fetchTotal: payload => {
        console.log(tasks.length)
    return Promise.resolve(tasks.length);
    },
    fetchItems: payload => {
        const { activePage, itemsPerPage } = payload.pagination;
        const start = (activePage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        let result = Array.from(tasks);
        result = result.sort(getSorter(payload.sort));
        return Promise.resolve(result.slice(start, end));
    },
//   update: data => {
//     const task = tasks.find(t => t.id === data.id);
//     task.title = data.title;
//     task.description = data.description;
//     return Promise.resolve(task);
//   },
  delete: data => {
    const task = tasks.find(t => t.id === data.id);
    setTasks(tasks.filter(t => t.id !== task.id));
    return Promise.resolve(task);
  }
};

const styles = {
  container: { margin: "auto", width: "fit-content" }
};
const createAdmin = async(e) => {
    debugger;
    console.log(e.email)
    await Axios.post('http://localhost:5000/api/addadmin',{email:e.email,password:e.password,isAdmin:e.admin}).then((response)=>{
        
            console.log("post Start")
            console.log(response.data)
            console.log("post End")
                });
                //try returning from post itself using return and the object
    // await Axios.get('http://localhost:5000/api/getallusers').then((response)=>{
        
    //         console.log("get Start2")
    //         setTasks(response.data);
    //         console.log(response.data)
    //         console.log("get Start2")
    //             });
};
const deleteUser = async(e) => {
    await Axios.post('http://localhost:5000/api/deleteuser',{email:e.email,password:e.password,isAdmin:e.admin}).then((response)=>{
        
            console.log("post delete Start")
            console.log(response.data)
            console.log("post delete End")
                });
};
  return (
      
    <div style={styles.container}>
    <CRUDTable
      caption="Users List"
      fetchItems={payload => fetchData(payload)}
    >
      <Fields>
        <Field name="email" label="Email" placeholder="Email" />
        <Field name="password" label="Password" placeholder="Password" />
        <Field
          name="isAdmin"
          label="Admin"
          placeholder="True or False"
        />
      </Fields>
      <Pagination
        itemsPerPage={2}
        fetchTotalOfItems={payload => fetchPagination(payload)}
      />
      <CreateForm
        title="Add Admin"
        message="Create a new Admin!"
        trigger="Add Admin"
        onSubmit={createAdmin}
        submitText="Create"
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = "Please provide email ID";
          }

          if (!values.password) {
            errors.password = "Please provide password";
          }
          return errors;
        }}
      />    

      {/* <UpdateForm
        title="Task Update Process"
        message="Update task"
        trigger="Update"
        onSubmit={task => service.update(task)}
        submitText="Update"
        validate={values => {
          const errors = {};

          if (!values.id) {
            errors.id = "Please, provide id";
          }

          if (!values.title) {
            errors.title = "Please, provide task's title";
          }

          if (!values.description) {
            errors.description = "Please, provide task's description";
          }

          return errors;
        }}
      /> */}

      <DeleteForm
        title="Task Delete Process"
        message="Are you sure you want to delete the task?"
        trigger="Delete"
        onSubmit={task => deleteUser(task)}
        submitText="Delete"
        validate={values => {
          const errors = {};
          if (!values.id) {
            errors.id = "Please, provide id";
          }
          return errors;
        }}
      />
    </CRUDTable>
  </div>
  )
}

export default Admin