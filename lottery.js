async function lottery() {
    console.log("Вы начали игру");
     setTimeout( async function () {
        await Math.random(0) > 0.5 ? resolve(console.log('234')) : reject(console.log('234'));
      }, 1000)
    }
async function end(){
    try {
        const res = await lottery();
         console.log(res);
        console.log("Вы выиграли");
        console.log("Вам заплатили");
      } catch (e) {
        console.log("Вы проиграли");
      } finally {
        console.log("Игра закончена");
      }
}    
  end()
    
   

  
