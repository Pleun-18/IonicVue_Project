// import { Service } from './service';

class MyService /*extends Service*/{

  constructor() {
      // super();
  }

  // async myMethod() {
  //     // Simple GET request using fetch
  //     return fetch("http://localhost:3000/inspections")
  //         .then(response => response.json())
  //         .then(data => this.inspections = data)
  //         .then(console.log(this.inspections))
  //         .catch(err => console.log(err.message))
  // }

  // myMethod1 = () => {
  //     return new Promise((resolve, reject) => {
  //        fetch('http://localhost:3000/inspections')
  //        .then((response) => {
  //          return response.json()
  //        })
  //        .then((data) => {
  //          this.inspections = data;
  //          resolve();
  //        })
  //        .catch((err) => {
  //          console.error(err);
  //          reject();
  //        })
  //     });
  //   }

  async myMethod() {
      try {
        const response = await fetch('http://localhost:3000/inspections');
        const data = await response.json();
        return data;
      } catch (err) {
        console.error(err);
      }
    }
  // test() {
  //     console.log(this.$vue);
  //     console.log(this.$vue.router);
  //     console.log(this.$router);
  //   }
}

export default MyService;

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
