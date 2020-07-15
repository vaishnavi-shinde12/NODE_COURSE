const tasks = {
    tasks: [
        {
            text: 'Grocery Shopping',
            completed: true
        },
        {
            text: 'Cloths Shopping',
            completed: false
        },
        {
            text: 'Cosmetics & Jewellery',
            completed: false
        },
        {
            text: 'Shoes Shoppiee',
            completed: true
        }
    ],

    getTasksToDo() {
        const tasksToDo = this.tasks.filter((task) => {        // here we can also return tasksTODO variable instead of declaring with const
            // return task.text == 'Clean Yard'                            // here we can access tasks text name
            return task.completed === true
        })
        return tasksToDo
    }           
}

console.log(tasks.getTasksToDo())