
// Simulation of the database
var data = [
    {
        "id": 1,
        "name": "Niaina", 
        "last_name": "Christopher", 
        "email": "niainachristopher4@gmail.com", 
        "password": "12345678"
    }
]

const model = {
    getAll: async () => {
        // Query data from the DB
        let result = data
        return result
    },
    getOne: async (id : number) => {
        // Find the data of the object with the given ID
        let result = data.find((user) => user.id == id)
        
        return result 
    },
    create: async (
        name: string, 
        last_name: string, 
        email: string, 
        password: string
    ) => {
        let lastId = data[data.length - 1].id
        data.push({
            id: lastId+1,
            name: name,
            last_name: last_name,
            email: email, 
            password: password,
        })
        const result = data

        return result
    },
    update:  async (
        name:string, 
        last_name:string, 
        email:string, 
        id:number
    ) => {
        let newData = {
            name,
            last_name,
            email
        }
       // Find the index of the object with the given ID
        const index = data.findIndex(item => item.id === id);
        
        // If the object is found, update it
        if (index !== -1) {
            data[index] = { ...data[index], ...newData };
        } else {
            console.log('Object not found');
        }
        let result = data[index]
        return result
    },
    delete: async (id : number) => {
        const index = data.findIndex(item => item.id === id);
        
        // If the object is found, remove it
        if (index !== -1) {
            data.splice(index, 1);
        } else {
            console.log('Object not found');
        }

        return "Row Deleted"
    },
}

export default model