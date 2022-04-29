import { Service } from './service';

class MyJsonService extends Service{

    constructor() {
        super();
    }

    myMethod() {
        // Simple GET request using fetch
        fetch("http://localhost:3000/inspections")
            .then(response => response.json())
            .then(data => this.inspections = data)
            .catch(err => console.log(err.message))
    }

    test() {
        console.log(this.$vue);
        console.log(this.$vue.router);
        console.log(this.$router);
      }
}

export default new MyJsonService();

// const test = async () => {
//     console.log('Data ophalen);
//     try {
//        await doeRequest();
//        console.log('Doe iets met data
//     } catch (err) {
//       console.log('Laat error zien aan user')
//     }
//   }
  
//   const doeRequest = () => {
//     return new Promise((resolve, reject) => {
//        setTimeout(resolve(true), 2000);
//     });
//   }
  
//   test();
  