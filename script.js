const f=["file1.text","file2.text","file3.text","file4.text"];

function loadfiles (files, callback){
  const newList = []
  for(let index = 0; index < files.length; index++) {
    const currentNumber = files[index]
    const updatedNumber = readfiles(index, callback)
    newList.push(updatedNumber)
  }
  return newList
}

function readfiles (file, callback){
 
  setTimeout(()=>{
    callback("content of" + file)
    
    }, 1000)
  }
  
loadfiles(f, (results)=>{
  console.log(results)
})
