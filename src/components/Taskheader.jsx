import React from "react";
import { FaPlus } from "react-icons/fa";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from 'uuid';

const Taskheader = () => {
  const Iconstyle = { fontSize: "18px", color: "purple" };
  
  const addAlert = async () => {
    Swal.fire({
      title: "Add new item",
      text: "You won't be able to revert this!",
      html: `<div class='todo-alert-input'><label>Title</label>
        <input id="swal-input1" class="swal2-input-title" type="text"></div>`,
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Add item",
    }).then((result) => {
      let a = document.getElementById("swal-input1").value;
      let allTaskDb = JSON.parse(localStorage.getItem('All_Tasks')) || []
      let allTaskItems;
      const singleTask = {
        id: uuidv4().substring(0, 7),
        title: a,
        completed: false,
      };

      if (result.isConfirmed) {
        Swal.fire("added!", `Your task has been added as ${a}`, "success");
        
        allTaskItems = [...allTaskDb, singleTask]
        setTimeout(() => {
          window.location.reload();
        }, 1300);
        
      }
   
      localStorage.setItem('All_Tasks', JSON.stringify(allTaskItems))
      console.log(allTaskDb)
      console.log(allTaskItems)
    });
    
  };

  return (
    <section className="Todo-header">
      <h4>Have a new plan ?</h4>
      <input type={"text"} placeholder="search tasks..." />
      <div className="Todo-action-buttons-holder">
        <button onClick={addAlert}>
          <FaPlus style={Iconstyle} />
          Add
        </button>
      </div>
    </section>
  );
};

export default Taskheader;

/*****************************************************************************************************************
<div class='todo-alert-input'><label>task description</label>
        <textarea type="text" rows="7" cols="40" id="swal-input2" class="swal2-input-desc"></textarea></div>
*******************************************************************************************************************/
