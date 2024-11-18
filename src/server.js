import * as http from 'http';
import * as fs from 'fs';
const data=[
    {
      "id": "10",
      "title": "To kill a mockingbird",
      "description": "Mockingbird description",
      "genre": "Fantasy",
      "pages": "345"
    },
    {
      "id": "11",
      "title": "Brave New World",
      "genre": "Dystopian",
      "description": "A dystopian novel by Aldous Huxley, published in 1932.",
      "pages": 311
    },
    {
      "id": "12",
      "title": "Wuthering Heights",
      "genre": "Romance",
      "description": "A novel by Emily Brontë, published in 1847.",
      "pages": 416
    },
    {
      "id": "13",
      "title": "The Odyssey",
      "genre": "Epic",
      "description": "An epic poem attributed to Homer, composed around 800 BC.",
      "pages": 541
    },
    {
      "id": "16",
      "title": "The Divine Comedy",
      "genre": "Epic",
      "description": "An epic poem by Dante Alighieri, completed in 1320.",
      "pages": 798
    },
    {
      "id": "17",
      "title": "The Iliad",
      "genre": "Epic",
      "description": "An epic poem attributed to Homer, composed around 750 BC.",
      "pages": 704
    },
    {
      "id": "18",
      "title": "Les Misérables",
      "genre": "Historical",
      "description": "A novel by Victor Hugo, published in 1862.",
      "pages": 1463
    },
    {
      "id": "19",
      "title": "Anna Karenina",
      "genre": "Romance",
      "description": "A novel by Leo Tolstoy, published in 1877.",
      "pages": 864
    }
  ]

const server = http.createServer((req,res)=>{
    if(req.method==="GET" && req.url==="/books"){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.write(JSON.stringify(data));
        res.end();
    }else{
        res.writeHead(404,{'Content-Type':'application/json'});
        res.write(JSON.stringify({message:"Route not found"}));
        res.end();
    }
})
server.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
console.log(data[1]);