/* 
Generics is a tool for creating reusable components. Rather than working with a single data type, it builds a component that can interact with various data types. It enables users to consume these data components while also using their own data types.
 */
// Using generic you can manage the passing data types into a function
class ConnectToDB<T> {
  constructor(public baseUrl: string, public response: T) {
    console.log(`url is ${baseUrl} and the response is ${response}`);
  }
}

let exampleConnectOnStringType = new ConnectToDB<string>(
  'localhost:3000',
  'status ok 200'
);

let exampleConnectOnBooleanType = new ConnectToDB<boolean>(
  'localhost:3000',
  true
);
