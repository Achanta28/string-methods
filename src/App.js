
import './App.css';
function App() {

  
    return (
    <div className="App">
      <button type='button' onClick={()=>{
        let language ="JavaScript is a client-side programming language used to create a dynamic a web application"
        console.log(language.toLowerCase())

      }}>toLoerCase</button>
      <button type='button' onClick={()=>{
         let language ="JavaScript is a client-side programming language used to create a dynamic a web application"
         console.log(language.toUpperCase())

      }}>toUpperCase</button>
      <button type='button' onClick={()=>{
        let firstName = "Sai"
        let lastName = "Veeresh"

        let fullName = firstName.concat(lastName)
        console.log(fullName)

        let fullName2 = `${firstName} ${lastName}`
        console.log(fullName2)

      }}>Concat</button>
      <button type='button' onClick={()=>{
        let name = "  Sai Veeresh   "
        console.log(`---->${name.trim()}<-----`)

      }}>trim</button>
      <button type='button' onClick={()=>{
          let name = "  Sai Veeresh   "
          console.log(`---->${name.trimStart()}<-----`)

      }}>trimStart</button>
      <button type='button' onClick={()=>{
          let name = "  Sai Veeresh   "
          console.log(`---->${name.trimEnd()}<-----`)

      }}>trimEnd</button>
      <button type='button'onClick={()=>{
        let msg = "Hello"
        console.log(msg.padStart(10,"?"))


      }}>padStart</button>
      <button type='button' onClick={()=>{
          let msg = "Hello"
          console.log(msg.padEnd(10,"?"))

      }}>padEnd</button>
      <button type='button' onClick={()=>{
          let msg = "Hello "
          console.log(msg.repeat(100))

      }}>Repeat</button>
      <button type='button' onClick={()=>{
       let msg = "Hello World";
       console.log(msg.replace("World", "JavaScript"))
      

      }}>Replace</button>
      <button type='button' onClick={()=>{
        let msg = "Hello World"
        console.log(msg.replace(/\s/g, "-"));

      }}>ReplaceAll</button>
      <button type='button' onClick={()=>{
        let msg = "Hello-World-JavaScript";
        console.log(msg.split("-"))

        let str = "apple,banana,orange"
        let arr= str.split(",", 2);
        console.log(arr); 
       }}>Split</button>
      <button type='button' onClick={()=>{
        let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        console.log(alphabets.length)
      }}>Length</button>
      <button type='button' onClick={()=>{
        let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        for(let i=0;i<alphabets.length;i++){
          console.log(alphabets.at(i))
        }
        console.log(alphabets.at(0))
      }}>At</button>
      <button type='button'onClick={()=>{
        let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let charAtString = alphabets.charAt(0)
        console.log(charAtString)
        
        
      }}>CharAt</button>
      <button type='button'onClick={()=>{
        let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let str = alphabets[0]
        console.log(str)
        
      }}>String[]</button>
      <button type='button'onClick={()=>{
        let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        console.log(alphabets.slice(5,7))
        
      }}>Slice</button>
      <button type='button'onClick={()=>{
        let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        console.log(alphabets.substring(5,7))
        
      }}>SubString</button>
      <button type='button'onClick={()=>{
        let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        console.log(alphabets.substr(5,7))
        
      }}>SubStr</button>
      <button type='button'onClick={()=>{
          
          console.log(String.fromCharCode(67))
        
        
      }}>FromCharCode</button>
      <button type='button'onClick={()=>{
          let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
          for(let i=0;i<alphabets.length;i++){
            console.log(alphabets.charCodeAt(i))
          }
        
      }}>CharCOdeAt</button>
      <button type='button'onClick={()=>{
        let hero =  "Shri Chiranjeevi ji"
        console.log(hero.startsWith("Shri"))
        
      }}>Statswith</button>
      <button type='button'onClick={()=>{
         let hero =  "Shri Chiranjeevi ji"
         console.log(hero.endsWith("ji"))
        
      }}>Endswith</button>
       <button type='button'onClick={()=>{
         let hero =  "Shri Chiranjeevi ji"
         console.log(hero.includes("ji"))
        
      }}>Include</button>
       <button type='button'onClick={()=>{
         let hero =  "Shri Chiranjeevi ji"
         console.log(hero.indexOf("Shri"))
        
      }}>IndexOf</button>
       <button type='button'onClick={()=>{
         let hero =  "Shri Chiranjeevi ji"
         console.log(hero.lastIndexOf("ji"))
        
      }}>LastIndexOf</button>
       <button type='button'onClick={()=>{
         let hero =  "Shri Chiranjevvi  ji"
         console.log(hero.search(/shri/i))
        
      }}>Search</button>
     

     
    </div>
  );
}

export default App;

